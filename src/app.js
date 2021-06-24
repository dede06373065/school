require('dotenv').config();
const express = require('express')
const morgan = require('morgan')
const cors=require('cors')
const router = require('./routes');
const { connectToDB } = require('./utils/db');
const app = express();
const PORT = process.env.PORT || 3000

const morganLog=process.env.NODE_ENV==='production'?morgan('common'):morgan('dev')
app.use(morganLog)
app.use(cors())
app.use('/api', router)
app.use(express.json())

connectToDB();
app.listen(PORT, () => {

    console.log(`${PORT}`)
})