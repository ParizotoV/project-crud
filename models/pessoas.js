const findAll = async (db) => {
  const pessoas = await db('pessoas').select('*')
  return pessoas;
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