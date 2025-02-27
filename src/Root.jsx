import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function Root() {

  return (
    <>
      <div className='bg-[#1A1C1E] text-white'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Root
