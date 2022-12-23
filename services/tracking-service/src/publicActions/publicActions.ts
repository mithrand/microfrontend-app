import pubsub from 'pubsub-js'
import events from '../events'

import { ClickEvent } from '../types'

export const sendClickEvent = (clickEvent: ClickEvent) =>
  pubsub.publish(events.sendClickEvent, clickEvent)
