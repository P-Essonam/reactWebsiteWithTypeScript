import React from 'react'
import { Header,Footer } from '../components'
import { Outlet } from 'react-router-dom'
import Banner from '../components/Banner'


const MainLayout: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Banner />
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout