const express = require('express')
const xmlParser  = require('express-xml')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(xmlParser)

// Routes
app.use(process.env.API.toString(), require('./routes/CargaOrdenes'))

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})