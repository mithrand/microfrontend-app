import PubSub from 'pubsub-js'
import events from '../events'

import { ClickEvent } from '../types'

let initialized: Boolean = false

let subscriptions: string[] = []

const sendClickEvent = (message: string, clickEvent: ClickEvent) => {
  console.log(`Click event tracked: ${clickEvent}`)
}

const start = () => {
  if (!initialized) {
    subscriptions = [PubSub.subscribe(events.sendClickEvent, sendClickEvent)]
    console.log('Starting tracking service')
  }
  initialized = true
}

const stop = () => {
  if (initialized) {
    subscriptions.forEach(PubSub.unsubscribe)
    console.log('Stopping tracking service')
  }
  initialized = false
}

const API = {
  start,
  stop,
}

export default API
