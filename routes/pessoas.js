const express = require('express')
const pessoasController = require('../controllers/pessoas')

const pessoasRouter = ({ db }) => {
  const router = express.Router()
  router.get('/', pessoasController.index.bind(null, db))
  router.get('/delete/:id', pessoasController.deleteById.bind(null, db))
  router.get('/create', pessoasController.createForm)
  router.post('/create', pessoasController.createProcess.bind(null, db))
  router.get('/update/:id', pessoasController.updateForm.bind(null, db))
  router.post('/update/:id', pessoasController.updateProcess.bind(null, db))

  return router
}

module.exports = pessoasRouter