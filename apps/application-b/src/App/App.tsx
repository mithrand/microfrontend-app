import React from 'react'
import { Text, Button } from '@microfrontend-app/ui-kit'
import { sendClickEvent } from '@microfrontend-app/tracking-service/dist/publicActions'

const App: React.FC = () => {
  const handleOnClick = () =>
    sendClickEvent({ userId: 'myUser', location: 'ApplicationB' })
  return (
    <div>
      <Text>Application B</Text>
      <Button onClick={handleOnClick}>Send button click</Button>
    </div>
  )
}

export default App
