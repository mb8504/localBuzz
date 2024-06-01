// import reactLogo from 'src/assets/yellow_underline.svg'
import Header from '../Home/components/Header'
import Carousel from '../Home/components/Carousel'
import Hops from '../Home/components/Hops'
import Cards from '../Home/components/Cards'
import Newsletter from '../../components/Newsletter'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Home = () => {

  return (
    <>
      <Navbar />
      <Header />
      <Carousel />
      <Hops />
      <Cards />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
