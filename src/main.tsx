import ReactDOM from 'react-dom/client'
import { App, Blog, Community, Learn, Reference } from './sections'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<App/>} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/reference' element={<Reference />} />
        <Route path='/community' element={<Community />} />
        <Route path='/blog' element={<Blog />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
