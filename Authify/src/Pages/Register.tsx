import { FaGithub, FaLinkedin } from 'react-icons/fa'
// import google from '../assets/google-color-icon.svg'
const RegisterPage = () => {
  return (
    <div className='bg-sky min-h-screen'>
      <div className='flex justify-center items-center flex-col '>
        <div className='flex flex-col mt-8 min-w-[300px] bg-white p-4'>
          <h2 className='text-2xl text-center'>Authify</h2>
          <form action='' className='w-[350px]'>
            <div className='flex flex-col gap-1'>
              <label htmlFor='name'>Name</label>
              <input type='text' className='border p-2 rounded-md' />
            </div>
            <div className='flex flex-col gap-1 mt-4'>
              <label htmlFor='name'>Email</label>
              <input type='text' className='border p-2 rounded-md' />
            </div>
            <div className='flex flex-col gap-1 mt-4'>
              <label htmlFor='name'>Password</label>
              <input type='text' className='border p-2 rounded-md' />
            </div>
            <button className='p-2 flex justify-center items-center mx-auto md:mx-0 bg-background mt-4 w-full text-center text-white rounded-md'>
              Register
            </button>
            <div className='flex flex-col items-center mt-8'>
              <div className='flex items-center jus'>
                <div className='h-[1px] w-[100px] bg-gray-300'></div>
                <p className='text-lg px-[4px]'>Continue with</p>
                <div className='h-[1px] w-[100px] bg-gray-300'></div>
              </div>
              <div className='flex items-center mt-4 space-x-4'>
                <button className='  px-4 py-2 flex items-center space-x-2'></button>
                <button className='  px-4 py-2 flex items-center space-x-2'>
                  <FaGithub />
                </button>
                <button className='  px-4 py-2 flex items-center space-x-2'>
                  <FaLinkedin />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
