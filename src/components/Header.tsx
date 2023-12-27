import React from 'react'
import HeaderBar from './Headerbar'

const Header: React.FC = () => {
  return (
    <header className='w-full bg-primary text-fg sticky top-0 z-50'>
      <HeaderBar />
    </header>
  )
}

export default Header