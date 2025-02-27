
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero.jsx'
import Category from './Components/Category/Category'
import Recommended from './Components/Recommended/Recommended.jsx'
function Root() {

  return (
    <>
      <div className='bg-[#1A1C1E] text-white'>
        <Header />
        <Hero/>
        <Category/>
        <Recommended/>
        <Footer />
      </div>
    </>
  )
}

export default Root
