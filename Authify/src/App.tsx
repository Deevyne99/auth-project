import { Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation'
import HomePage from './Pages/Home'
import ProfilePage from './Pages/Profile'
import RegisterPage from './Pages/Register'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='profile' element={<ProfilePage />} />
      </Route>
    </Routes>
  )
}

export default App
