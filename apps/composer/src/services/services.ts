import trackingService from '@microfrontend-app/tracking-service'

type Service = {
  start(): void
  stop(): void
}

const services: Service[] = [trackingService]

export default services
