const express = require('express')
const conn = require('./db/conn')
const router = express.Router()
const sql = require('./sql')
const { IsTrue, IsFalse } = require('./message')
// 修改Key状态 注册成功的时候调用
const EditKey = function (key) {
  conn.query(sql.EditKeySql(key), (_err, data) => {
    if (data.affectedRows > 0) {
      console.log('修改成功Key!')
    }
  })
}

/**
 * 注册账号
 */
router.post('/register', function (req, res, _next) {
  const { Account, PassWord, UserName, Key, Email } = req.body
  if (!(Account, PassWord, UserName, Key, Email)) {
    res.send(IsFalse('参数错误!'))
    return
  }
  conn.query(sql.registerKey(Key), (_err, data) => {
    if (data.length > 0) {
      // 激活码正确
      conn.query(sql.registerSql(req.body), (err, data) => {
        if (err) {
          res.send({ IsSucceed: false, Error: err.sqlMessage, code: 1062 })
        } else if (data.affectedRows > 0) {
          res.send(IsTrue('注册成功!'))
          // 修改激活码状态
          EditKey(Key)
        } else {
          res.send(IsFalse('注册失败!'))
        }
      })
    } else {
      res.send(IsFalse('激活码错误!'))
    }
  })
})

/**
 * 添加Key
 */
router.post('/addKey', function (req, res, _next) {
  const { Key } = req.body
  if (!Key) {
    console.log('!key')
    res.send(IsFalse('请输入Key!'))
  } else if (Key.length !== 32) {
    console.log('key.length !== 32')
    res.send(IsFalse('请输入32位的Key!'))
  } else {
    conn.query(sql.selectAddKey(Key), (_err, data) => {
      if (data.length === 1) {
        res.send(IsFalse('该激活码已存在!'))
      } else {
        conn.query(sql.addKey(Key), (_err, data) => {
          if (data.affectedRows === 1) {
            res.send(IsTrue('添加成功'))
          }
        })
      }
    })
  }
})

/**
 * 验证Key
 */
router.post('/checkKey', (req, res, _next) => {
  const { Key } = req.body
  console.log(Key)
  if (!Key) {
    res.send(IsFalse('请输入Key!'))
    return
  }
  if (Key.length < 32) {
    res.send(IsFalse('请输入长度为32字符的Key!'))
    return
  }
  conn.query(sql.selectAddKey(Key), (_err, data) => {
    if (_err) throw _err

    if (data.length === 0) {
      res.send(IsTrue('该激活码可以使用!'))
      return
    }

    if (data.length === 1) {
      let KeyData = {}
      data.forEach((element) => {
        KeyData = element
      })
      if (KeyData.state === '1') {
        res.send(IsFalse('该激活码已经使用!'))
      } else {
        res.send(IsFalse('该激活码已经存在!'))
      }
    }
  })
})

/**
 * 登录账号
 */
router.post('/login', (req, res, _next) => {})
module.exports = router
