const sql = {
  EditKeySql: (key) => {
    return 'update `key` set state = 0 where registerKey =' + `'${key}'`
  },
  registerKey: (key) => {
    return 'select * from `key` where registerKey = ' + `'${key}'` + ' and state = 1'
  },
  registerSql: (params) => {
    return `insert into account (Account, PassWord, UserName, Email) values("${params.Account}", "${params.PassWord}", "${params.UserName}", "${params.Email}")`
  },
  selectAddKey: (key) => {
    return 'select * from `key` where registerKey = ' + `'${key}'`
  },
  addKey: (key) => {
    return 'insert into `key`(registerKey, state) values(' + `'${key}'` + ', 1)'
  }

}

module.exports = sql
