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


 

const updateById = async (id, account) => {
  await db('accounts').where('id', id).update(account)
  return getById(id)
}

// async function update(shipperId, changes) {
//   await db('shippers').update(changes).where('shipperid', shipperId)
//   const result = await getById(shipperId)
//   return result
//  }



const deleteById = id => {
  return db('accounts').where('id', id).del()
}


module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
