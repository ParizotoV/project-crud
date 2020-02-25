const pessoas = require('../models/pessoas')

const index = async (db, req, res) => {
	const params = {
		pageSize: req.query.pageSize || 10,
		currentPage: req.query.page || 0
	}
	const results = await pessoas.findAll(db, params)
  res.render('pessoas/index', { results })
}

const deleteById = async (db, req, res) => {
  await pessoas.deleteById(db, req.params.id)
  res.redirect('/pessoas')
}

const createForm = (req, res) => {
  res.render('pessoas/create')
}

const createProcess = async(db, req, res) => {
  await pessoas.create(db, req.body)
  res.redirect('/pessoas')
}

const updateForm = async(db, req, res) => {
  const pessoa = await pessoas.findById(db, req.params.id)
  res.render('pessoas/update', { pessoa })
}

const updateProcess = async(db, req, res) => {
  await pessoas.update(db, req.params.id, req.body)
  res.redirect('/pessoas')
}


module.exports = {
  index,
  deleteById,
  createForm,
  createProcess,
  updateForm,
  updateProcess
}