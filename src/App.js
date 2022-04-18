import { Route, Routes } from 'react-router-dom'
import './App.css'
import { About } from './components/About/About'
import { Blog } from './components/Blog/Blog'
import { Footer } from './components/Footer/Footer'
import { Home } from './components/Home/Home'
import Navbar from './components/Navbar/Nav'
import { Notfound } from './components/Notfound/Notfound'
import Profile from './components/Profile/Profile'
import { Register } from './components/Register/Register'
import { Services } from './components/Services/Services'
import { Checkout } from './components/Checkout/Checkout'
import { RequiredAuth } from './Auth/RequiredAuth'
function App() {
  return (
    <div>
      {/* <header className="App-header"></header> */}
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route
          path="/checkout"
          element={
            <RequiredAuth>
              <Checkout></Checkout>
            </RequiredAuth>
          }
        />

        <Route path="/about" element={<About></About>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="*" element={<Notfound></Notfound>} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
