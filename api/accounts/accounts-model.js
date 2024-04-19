const db = require('../../data/db-config')


const getAll = () => {
  // DO YOUR MAGIC
  const result = db('accounts')
  return result
}



const getById = id => {
  // DO YOUR MAGIC
}
// async function getById(shipperId) {
//   const result = await db('shippers').where('shipperid', shipperId).first()
//   return result
//   }

const create = account => {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
