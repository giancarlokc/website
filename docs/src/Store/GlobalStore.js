const EventEmitter = require('events');

class GlobalStore extends EventEmitter {
  constructor (defaultData) {
    super()
    this.data = defaultData
  }

  update (name, value) {
    this.data[name] = value
    this.emit('changed', this.data)
  }

  getState () {
    return this.data
  }
}

module.exports = GlobalStore
