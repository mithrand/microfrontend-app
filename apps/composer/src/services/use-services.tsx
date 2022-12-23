import { useEffect } from 'react'
import services from './services'

export const useServices = () =>
  useEffect(() => {
    services.forEach((service) => service.start())
    return () => {
      services.forEach((service) => service.stop())
    }
  }, [])
