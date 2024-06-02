import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Newsletter from '../../components/Newsletter'

const Beers = () => {

  return (
    <>
      <Navbar />
      <section className='siteContainer'>
        <h1 className='text-6xl text-center font-bold pt-8'>BEERS</h1>
        <p className='text-center pb-8'>
          Stop in for a cold beer from your friendly neighborhood brewery!
        </p>
        <h2 className='text-4xl'>LAGERS</h2>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className='lagers flex justify-center pb-2'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
          </div>
        </div>

        <div className='lagers flex justify-center pb-2'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
          </div>
        </div>

        <h2 className='text-4xl pt-8'>IPAs</h2>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className='ipas flex justify-center pb-2'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
          </div>
        </div>

        <div className='ipas flex justify-center'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
          </div>
        </div>

        <h2 className='text-4xl pt-8'>Seasonal</h2>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className='stouts flex justify-center pb-2'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
            <img src="src/assets/Home/33_carousel_beer.png" alt="" />
          </div>
        </div>
      </section>

      {/* <section className="newsletter bg-black pb-28 pt-28">
        <div className="siteContainer">
            <div className="text-white text-6xl pb-12 text-center md:text-left mb-28">
            Get updates, homebrew recipes, and special offers from your neighborhood brewery.
            </div>
            
            <div className='flex flex-row justify-between border-b-2 border-white pb-1 md:justify-end md:border-none'>
                <form className='md:border-b-2' action="#" method="POST">
                    <div className="text-2xl text-center">
                        <input className='bg-black text-white outline-none' type="email" name="email" placeholder="Drop your email here!" />
                    </div>
                </form>
                <button className="md:border-b-2 text-white">
                    Send
                </button>
            </div>
        </div>
      </section> */}

      <Newsletter />
      <Footer />
      
    </>
  )
}

export default Beers
