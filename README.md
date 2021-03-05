### API文档

> 作者：Taixu 框架Express
>
> 地址:	http://119.23.216.240:63800

##### 注册账号

> /account/register

- 参数：

  - Account  账号
  - PassWord 密码
  -  UserName  昵称
  -  Key 激活码(需要先添加)
  -  Email

- 返回：

  ```json
  1. 账号重复或昵称重复 具体看Error:
  { IsSucceed: false, Error: err.sqlMessage, code: 1062}
  2. 注册成功
  { IsSucceed: true, Error: '注册成功!' }
  3. 注册失败 原因未知
  { IsSucceed: false, Error: '注册失败!' }
  ```

##### 添加Key

> /account//addKey

- 参数:

  - Key 激活码 (32位字符)
  - 激活码生成：https://suijimimashengcheng.bmcx.com/

- 返回:

  ```json
  1. 为空时
  { IsSucceed: false, Error: '请输入Key' }
  2. 不满足32位字符时
  { IsSucceed: false, Error: '请输入32位的Key' }
  3. 激活码已存在
  { IsSucceed: false, Error: '该激活码已存在!' }
  4.添加成功
  { IsSucceed: true, Error: null, Message: '添加成功' }
  ```

##### 验证Key

> /account/checkKey

- 参数:

  - Key(同上)

- 返回:

  ```json
  1. 为空时
  { IsSucceed: false, Error: '请输入Key' }
  2. 不满足32位字符时
  { IsSucceed: false, Error: '请输入32位的Key' }
  3. 激活码已存在
  { IsSucceed: false, Error: '该激活码已存在!' }
  4. 该激活码已经使用
  { IsSucceed: false, Error: '该激活码已经使用!' }
  5.该激活码可以使用
  { IsSucceed: true, Error: null, Message: '该激活码可以使用!' }
  ```

  