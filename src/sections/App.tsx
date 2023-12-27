import React from 'react'
import { Fapp, Hfapp } from '../components'

const App: React.FC = () => {
  return (
    <main className='grow flex flex-col bg-primary text-fg'>
      <Hfapp title='React' subtitle='The library for web and native user interfaces'/>
      <Fapp />
    </main>
  )
}

export default App