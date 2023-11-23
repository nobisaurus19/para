require('dotenv').config()

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mysql = require('mysql2/promise')

router.use(bodyParser.json())

const pool = mysql.createPool({
    host: process.env.MYSQL_SERVER_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})

// For testing admin route
router.get('/admin', (req, res) => {
    res.send({ message: 'admin route!' })
})

// Admin login route
router.post('/admin/login', async (req, res) => {
    const { username, password } = req.body
    console.log(req.body)

    if (!username || !password) {
        console.log(`👤 AUTH: no username || password noob`)
        return res.status(400).json({ message: 'Username and password are required' })
    }

    try {
        const conn = await pool.getConnection();
        const [rows, fields] = await conn.execute('SELECT * FROM users WHERE userName = ? AND role = "admin"', [username])
        conn.release();

        if (rows.length === 0) {
            console.log(`👤 AUTH: invalid password attempt`)
            return res.status(401).json({ message: 'Invalid username or password or user is not admin' });
        }

        const user = rows[0];

        if (password === user.password) {
            const token = jwt.sign({ username: user.ad_username }, process.env.JWT_SECRET_KEY);
            console.warn(`👤 AUTH: [${user.userName}] has logged in (${user.role})`)
            return res.json({ token, role: user.role });
        } else {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'An error occurred' });
    }
});

// Create an admin account
router.post('/admin/create', async (req, res) => {
    const { username, fullname, password, email } = req.body

    if (!username || !password || !email) {
        return res.status(400).json({ success: false, message: 'Arguments not complete' })
    }

    try {
        const conn = await pool.getConnection();
        const [result] = await conn.execute('INSERT INTO `users` (userName, fullName, password, email, phoneNum, role) VALUES (?, ?, ?, ?, "000000000", "admin")', [username, fullname, password, email])
        conn.release();
        const adminId = result.insertId;
        console.warn(`👤 AUTH: User account [${username}] has been created (admin)`)
        return res.json({ success: true, adminId })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false })
    }
});

// List all users that has user role
router.get('/admin/users', async (req, res) => {
    try {
        const conn = await pool.getConnection();
        const [rows] = await conn.execute('SELECT role, userId, userName, email FROM users')
        conn.release();
        return res.json({ success: true, users: rows })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false })
    }
});

router.get('/admin/users/:userId', async (req, res) => {
    const { userId } = req.params

    try {
        const conn = await pool.getConnection();
        const [rows] = await conn.execute('SELECT role, userId, userName, email FROM users WHERE userId = ?', [userId])
        conn.release();
        return res.status(201).json({ success: true, users: rows })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false })
    }
});

// Updates user information
router.post('/admin/users/:userId', async (req, res) => {
    const { userId } = req.params
    const { username, role, email } = req.body

    console.log(req.params)
    console.log(req.body)

    try {
        const conn = await pool.getConnection();
        const [result] = await conn.query(`UPDATE users SET userName = ?, role = ?, email = ? WHERE userId = ?`, [username, role, email, userId])
        conn.release()

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'User not found' })
        }
        console.warn(`👤 AUTH: User account [${username}] has been updated`)
        return res.json({ success: true })
    } catch (error) {
        console.error(error)
    }
})

router.delete('/admin/users/:userId', async (req, res) => {
    const { userId } = req.params

    try {
        const conn = await pool.getConnection()
        await conn.execute('DELETE FROM users WHERE userId = ?', [userId])
        conn.release()
        console.warn(`👤 AUTH: User account [${userId}] has been deleted`)
        return res.status(200).json({ success: true })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ success: false })
    }
})

module.exports = router
