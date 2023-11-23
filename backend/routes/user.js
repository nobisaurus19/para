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

// Define the admin route
router.get('/user', (req, res) => {
    res.send({ message: 'user route!' })
})

// Define the login route
router.post('/user/login', async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' })
    }

    try {
        const conn = await pool.getConnection();
        const [rows, fields] = await conn.execute('SELECT * FROM users WHERE userName = ? AND role = "user"', [username])
        conn.release();

        if (rows.length === 0) {
            console.log(`👤 AUTH: invalid password attempt`)
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const user = rows[0]

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

// Define the create admin account route
router.post('/user/create', async (req, res) => {
    const { username, password, fullname, email } = req.body

    console.log(req.body)

    if (!username || !password || !fullname || !email) {
        return res.status(400).json({ success: false, message: 'Arguments not complete' })
    }

    try {
        const conn = await pool.getConnection();
        const [result] = await conn.execute('INSERT INTO `users` (userName, fullName, password, email, phoneNum, role) VALUES (?, ?, ?, ?, "00000000" , "user")', [username, fullname, password, email])
        conn.release();
        const adminId = result.insertId;
        console.warn(`👤 AUTH: User account [${username}] has been created (user)`)
        return res.json({ success: true, adminId })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false })
    }
});


module.exports = router
