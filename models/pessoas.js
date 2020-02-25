const findAll = async (db, params) => {
	const offset = parseInt(params.currentPage) * params.pageSize
	const pageSize = params.pageSize
	const countPages = await db('pessoas').count({ total: 'id' })
	const total = countPages[0].total
	const totalPages = parseInt(total / pageSize)
	const pessoas = await db('pessoas').select('*').limit(pageSize).offset(offset)
	return ({
		data: pessoas,
		pagination: {
			pages: totalPages,
			pageSize,
			currentPage: parseInt(params.currentPage)
		}
	});
}

const findById = async (db, id) => {
	const pessoa = await db('pessoas').where({ id }).select('*')
	if (pessoa.length > 0) {
		return pessoa[0]
	}
	return {};
}

const deleteById = async (db, id) => {
	await db('pessoas').where({ id }).del()
}

const create = async (db, data) => {
	await db('pessoas').insert({ ...data })
}

const update = async (db, id, data) => {
	await db('pessoas').where({ id }).update({ ...data })
}

module.exports = {
	findAll,
	findById,
	deleteById,
	create,
	update
}