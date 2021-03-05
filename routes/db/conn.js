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

conn.connect()
console.log('数据库链接成功...')

module.exports = conn
