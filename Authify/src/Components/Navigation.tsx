import { Outlet, Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='bg-white  fixed w-full top-0 left-0'>
      <nav className='flex  items-center justify-between lg:mx-16  md:mx-16 mx-4 py-2'>
        <h1 className='text-2xl'>Authify</h1>
        <ul className='flex items-center gap-4'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navigation
