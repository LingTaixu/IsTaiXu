/**
 * 连接数据库模块
 */
const mysql = require('mysql')
const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'guyinglanshan',
  password: 'jiangwenwen1.',
  database: 'admin'
})
const list = mysql.createConnection({
  host: '127.0.0.1',
  user: 'guyinglanshan',
  password: 'jiangwenwen1.',
  database: 'list'
})

conn.connect()
console.log('admin链接成功...')
list.connect()
console.log('list链接成功...')

module.exports = {
  conn, list
}
