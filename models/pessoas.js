const findAll = (connection) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM pessoas', (err, results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
}

const findById = (connection, id) => {
  return new Promise((resolve, reject) => {
    console.log('ID>>:', id)
    connection.query('SELECT * FROM pessoas WHERE id = ' + id, (err, results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
}

const deleteById = (connection, id) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM pessoas WHERE id = ' + id + ' limit 1', (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

const create = (connection, data) => {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO pessoas (nome, nascimento, cargo) VALUES ('${data.nome}', '${data.nascimento}', '${data.cargo}')`, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

module.exports = {
  findAll,
  findById,
  deleteById,
  create
}