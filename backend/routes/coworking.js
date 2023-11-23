require('dotenv').config()

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mysql = require('mysql2/promise')

router.use(bodyParser.json())

const pool = mysql.createPool({
    host: process.env.MYSQL_SERVER_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})

// Define the default coworking route
router.get('/cowork', (req, res) => {
    res.send({ message: 'cowork route!' })
})

router.post('/cowork/create', async (req, res) => {
    try {
        const { placename, descr, rating, seat, parking, freewifi, charging, food, bakery, meetingroom, quietzone, smokezone, locate, map, image } = req.body
        const connection = await pool.getConnection()
        const query = `
        INSERT INTO coworking (placeName, descr, rating, seat, parking, freewifi, charging, food, bakery, meetingroom, quietzone, smokezone, locate, map, image)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )
    `
        const [result] = await connection.query(query, [placename, descr, rating, seat, parking, freewifi, charging, food, bakery, meetingroom, quietzone, smokezone, locate, map, image])
        connection.release()
        console.log(`🏢 COWORK: Cowork ${placename} has been created`)
        res.json({ success: true, placeId: result.insertId })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ success: false })
    }
})

router.post('/cowork/update/:placeId', async (req, res) => {
    try {
        const placeId = req.params.placeId
        const { placename, rating, seat } = req.body
        const connection = await pool.getConnection()
        const query = `
            UPDATE coworking
            SET placeName = ?, rating = ?, seat = ?
            WHERE placeId = ?
        `
        const [result] = await connection.query(query, [placename, rating, seat, placeId])
        connection.release()
        console.log(`🏢 COWORK: Cowork ${placename} has been updated`)
        res.json({ success: true, rowsAffected: result.affectedRows })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ success: false })
    }
})

router.get("/cowork/get/:placeId", async (req, res) => {
    try {
        const placeId = req.params.placeId;

        const connection = await pool.getConnection();
        const query = `
        SELECT * FROM coworking WHERE placeId = ?`;
        const [result] = await connection.query(query, [placeId]);
        connection.release();
        res.json({ success: true, data: result });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false });
    }
});

router.get('/cowork/search', async (req, res) => {
    try {
        const params = req.query

        const connection = await pool.getConnection()
        let query = 'SELECT * FROM coworking WHERE '
        if (params.placeName) {
            query += `placeName LIKE '%${params.placeName}%'`
        } else if (params.locate) {
            query += `locate LIKE '%${params.locate}%'`
        } else if (params.rating) {
            query += `rating BETWEEN ${params.rating} AND ${params.rating}`
        } else {
            query += `
        WHERE placeName LIKE '%${params.placeName || ''}%'
        AND locate LIKE '%${params.locate || ''}%'
        AND rating BETWEEN ${params.rating || 0} AND ${params.rating || 5}
            `
        }



        const [rows] = await connection.query(query)
        connection.release()
        res.json({ success: true, list: rows })
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal server error')
    }
})

router.get('/cowork/list', async (req, res) => {
    try {
        const connection = await pool.getConnection()
        const query = 'SELECT * FROM coworking'
        const [rows] = await connection.query(query)
        connection.release()
        res.json({ success: true, list: rows })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ success: false })
    }
})

router.get('/cowork/random', async (req, res) => {
    try {
        const connection = await pool.getConnection()
        const query = 'SELECT * FROM coworking WHERE rating = 5 ORDER BY RAND() LIMIT 1'
        const [rows] = await connection.query(query)
        connection.release()
        res.json({ success: true, list: rows })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ success: false })
    }
})

router.delete('/cowork/:placeId', async (req, res) => {
    const placeId = req.params.placeId

    try {
        const connection = await pool.getConnection()
        const query = 'DELETE FROM coworking WHERE placeId = ?'
        const [result] = await connection.query(query, [placeId])
        connection.release()
        res.json({ success: true, rowsAffected: result.affectedRows })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ success: false })
    }
})

module.exports = router