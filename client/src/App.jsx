import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import SignOut from './pages/SignOut'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-out" element={<SignOut />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App