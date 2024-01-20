import { Outlet } from 'react-router-dom'
const Navigation = () => {
  return (
    <div>
      <nav>
        <h1>Navigation</h1>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navigation
