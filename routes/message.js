const Message = {
  IsTrue: (msg) => {
    return { IsSucceed: true, Message: msg, Error: null }
  },
  IsFalse: (msg) => {
    return { IsSucceed: false, Error: msg }
  }
}

module.exports = Message
