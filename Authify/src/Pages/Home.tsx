import { Link } from 'react-router-dom'
import image from '../assets/main.svg'

const HomePage = () => {
  return (
    <div className='flex flex-col bg-sky min-h-screen'>
      <div className='flex flex-col md:flex-row mx-4 md:mx-8 lg:mx-16  items-center justify-between mt-8'>
        <article className='order-2 md:order-1 mt-4 md:mt-0 md:w-[400px] w-[90%] text-center md:text-left '>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            facere magnam asperiores assumenda quam minima illum dignissimos
            aspernatur laboriosam sint autem obcaecati ducimus eius
            necessitatibus, voluptas explicabo consequatur dicta molestias.
          </p>
          <div className='p-2 flex justify-center items-center mx-auto md:mx-0 bg-background mt-4 w-[100px] text-center text-white rounded-md'>
            <Link to='/register'>Register</Link>
          </div>
        </article>
        <div className='order-1 max-w-[60%] md:order-2 md:max-w-[80%]'>
          <img src={image} alt='' />
        </div>
      </div>
    </div>
  )
}

export default HomePage
