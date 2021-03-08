const sql = {
  EditKeySql: (key) => 'update `key` set state = 0 where registerKey =' + `'${key}'`,

  registerKey: (key) => 'select * from `key` where registerKey = ' + `'${key}'` + ' and state = 1',

  registerSql: (params) => `insert into account (Account, Password, UserName, Email) values("${params.Account}", "${params.Password}", "${params.UserName}", "${params.Email}")`,

  selectAddKey: (key) => 'select * from `key` where registerKey = ' + `'${key}'`,

  addKey: (key) => 'insert into `key`(registerKey, state) values(' + `'${key}'` + ', 1)',

  loginSql: (params) => `select * from account where Account = '${params.Account}' and Password = '${params.Password}'`
}

module.exports = sql
