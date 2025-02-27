
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero.jsx'
import Category from './Components/Category/Category'
function Root() {

  return (
    <>
      <div className='bg-[#1A1C1E] text-white'>
        <Header />
        <Hero/>
        <Category/>
        <Footer />
      </div>
    </>
  )
}

export default Root
