import { capitalize } from './utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error("No $root provided for DomLitener");
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      if (!this[method]) {
        throw new Error(`Method ${method} is not emplemented in ${this.name} Component`)
      }
      console.log(this)
      console.log(method)
      this.$root.on(listener, this[method].bind(this))
    })
  }

  removeDOMListeners() {}
}


function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}