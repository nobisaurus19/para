require('dotenv').config()
const cors = require('cors')
const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 4000; 

const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');
const coworkRouter = require('./routes/coworking');

console.log(`=== Kohub Backend server ===`)
console.log(`🔐 JWT_SECRET_KEY: ${process.env.JWT_SECRET_KEY}`)
console.log(`🗄 MYSQL_SERVER_HOST: ${process.env.MYSQL_SERVER_HOST}`)
console.log(`🗄 MYSQL_SERVER_PORT: ${process.env.MYSQL_SERVER_PORT}`)
console.log(`🗄 MYSQL_USER: ${process.env.MYSQL_USER}`)


app.get('/', (req, res) => { 
    res.send({ message: 'Hello World!' }); 
})

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(adminRouter);
app.use(coworkRouter)

app.listen(port, () => console.log(`🚀 Server ready at 0.0.0.0:${port}`)); 