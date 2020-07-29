
require('dotenv').config()
const knex = require('knex')
const CharService = require('./char-service')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
})

console.log(CharService.getAllChar())