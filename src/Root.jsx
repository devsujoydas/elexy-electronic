
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Root() {

  return (
    <>
      <div className='bg-[#1A1C1E] text-white'>
        <Header />
        <Outlet/>
        <Footer />
      </div>
    </>
  )
}

export default Root
