if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}


const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')


//hookup with index routes
const indexRouter = require('./routes/index')

app.set('view engine','ejs')  //The app.set('view engine', 'ejs') command sets the view engine to EJS. EJS is a templating language that allows users to generate HTML with plain JavaScript. 

app.set('views',__dirname +'/views')
app.set('layout', 'layouts/layout')

app.use(expressLayouts)
app.use(express.static('public'))


//database
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.Connection
//db.on('error', error => console.error(error))
//db.once('open', () => console.log("connected"))


app.use('/',indexRouter) 


app.listen(process.env.PORT || 3000)
