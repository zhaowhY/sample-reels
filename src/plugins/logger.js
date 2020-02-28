/**
 * usage
 *  - Vue.$log.[info|warn|error]()
 *  - vm.$log.[info|warn|error]()
 */
class Logger {
  constructor(debug) {
    ['info', 'warn'].forEach((key) => {
      this[key] = (...args) => (debug ? console[key](...args) : '');
    });
    this.error = console.error;
  }
}

export default {
  install(Vue, { debug }) {
    const log = new Logger(debug);
    Vue.$log = log;
    Vue.prototype.$log = log;
  }
};
