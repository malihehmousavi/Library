import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Navbar from './Navbar.jsx'
import Books from './Books.jsx'
import About from './About.jsx'
import Notfound from './Notfound.jsx'
import Book from './Book.jsx'
import Contact from './Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Navbar />}>

          <Route path='/books' element={<Books />}>
          
            <Route path=':bookId' element={<Book />} />
          </Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>

          <Route path='*' element={<Notfound />} />

        </Route>


      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
