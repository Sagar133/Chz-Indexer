require('dotenv').config()

import {open} from "./src/database"

const express = require('express')
const app = express()

// opening database connection
open()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on PORT:`, process.env.PORT);
})