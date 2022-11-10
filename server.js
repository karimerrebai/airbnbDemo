const express = require('express')
const { success, error } = require("consola");
const cors = require('cors')

const app = express()

// using json format 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



require('dotenv').config();
const DB = require('./conf/confing')


const PORT = process.env.PORT || 4000;

const DOMAIN = process.env.DOMAIN;




app.listen(PORT, async () => {
  try {
    success({
      message: `server started on port ${PORT} ` + `URL ${DOMAIN}`,
      badge: true,
    });
  } catch (err) {
    error({ message: "error with server " + err.message, badge: true });
  }
});