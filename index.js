const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const db = require('knex')({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'cadastro'
  }
})
const bodyParse = require('body-parser')

const pessoas = require('./routes/pessoas')

// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(bodyParse.urlencoded({ extended: false }))

const dependencies = {
  db
}

app.use(express.static('public'))

app.get('/', (req, res) => res.render('home'))
app.use('/pessoas', pessoas(dependencies))

app.listen(port, () => console.log('CRUD listening on port:' + port))
