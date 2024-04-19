const db = require('../../data/db-config')


const getAll = () => {
  // DO YOUR MAGIC
  const result = db('accounts')
  return result
}



const getById = id => {
  // DO YOUR MAGIC
 return db('accounts').where('id',id).first()
}


const create = async account => {
  // DO YOUR MAGIC
  const [id] = await db('accounts').insert(account)
  return getById(id)
 
}

// async function create(shipper) {
//   const [shipperId] = await db('shippers').insert(shipper)
//   const result = await getById(shipperId)
//   return result
// }

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
