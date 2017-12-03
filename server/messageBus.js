class MessageBus {
  constructor() {
    this.topics = {};
  }

  subscribe(topic, callback) {
    this.checkTopic(topic)
      ? this.topics[topic].push(callback)
      : this.topics[topic] = [callback];
  }

  publish(topic, payload) {
    this.checkTopic(topic)
      ? this.dispatchMessage(this.topics[topic], payload)
      : console.error(`There are no subscribers for the topic: ${topic}`);
  }

  dispatchMessage(callbacks, payload) {
    callbacks.forEach(callback => {callback.call(null, payload)})
  }

  checkTopic(topic) {
    return typeof topic !== 'number' && typeof topic !== 'string'
      ? true
      : new TypeError(`Invalid Type passed into 'topic' input. Expected: STRING or NUMBER -- Received: ${(typeof input).toUpperCase()}`);
  }
}

module.exports = MessageBus;