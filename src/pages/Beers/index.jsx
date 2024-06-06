import Newsletter from '../../components/Newsletter'

const Beers = () => {

  return (
    <>
      <section className='siteContainer'>
        <h1 className='text-6xl text-center font-bold pt-8'>BEERS</h1>
        <p className='text-center pb-8'>
          Stop in for a cold beer from your friendly neighborhood brewery!
        </p>
        <h2 className='text-4xl'>LAGERS</h2>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className='lagers flex justify-center pb-2'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            <img src="/33_carousel_beer.png" alt="" />
            <img src="/33_carousel_beer.png" alt="" />
            <img src="/33_carousel_beer.png" alt="" />
            <img src="/33_carousel_beer.png" alt="" />
          </div>
        </div>

        <div className='lagers flex justify-center pb-2'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            <img src="/33_carousel_beer.png" alt="" />
            <img src="/33_carousel_beer.png" alt="" />
            <img src="/33_carousel_beer.png" alt="" />
            <img src="/33_carousel_beer.png" alt="" />
          </div>
        </div>

        <h2 className='text-4xl pt-8'>IPAs</h2>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className='ipas flex justify-center pb-2'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            <img src="/33_carousel_beer.png" alt="" />
            <img src="/33_carousel_beer.png" alt="" />
            <img src="/33_carousel_beer.png" alt="" />
            <img src="/33_carousel_beer.png" alt="" />
          </div>
        </div>

        <div className='ipas flex justify-center'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            <img src="/33_carousel_beer.png" alt="" />
            <img src="/33_carousel_beer.png" alt="" />
            <img src="/33_carousel_beer.png" alt="" />
            <img src="/33_carousel_beer.png" alt="" />
          </div>
        </div>

        <h2 className='text-4xl pt-8'>Seasonal</h2>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className='stouts flex justify-center pb-2'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            <img src="/33_carousel_beer.png" alt="" />
            <img src="/33_carousel_beer.png" alt="" />
            <img src="/33_carousel_beer.png" alt="" />
            <img src="/33_carousel_beer.png" alt="" />
          </div>
        </div>
      </section>
      <Newsletter />    
    </>
  )
}

export default Beers
