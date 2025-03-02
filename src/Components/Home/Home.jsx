import Hero from "../Hero/Hero.jsx"
import Category from "../Category/Category.jsx"
import Recommended from "../Recommended/Recommended.jsx"
import Marque from "../PromoMarquee/PromoMarquee.jsx"
import SmartGrid from "../SmartGrid/SmartGrid.jsx"
import OurClients from "../OurClients/OurClients.jsx"

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Recommended />
      <Marque/>
      <SmartGrid/>
      <OurClients/>
    </div>
  )
}

export default Home