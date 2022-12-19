import React from 'react'
import ReactDOM from 'react-dom/client'
import Composer from './composer'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Composer />
  </React.StrictMode>,
)
