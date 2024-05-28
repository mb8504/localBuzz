import React from 'react'

const Cards = () => {
  return (
    <section className='bg-black pt-14'>
      <div className='siteContainer text-white flex flex-col items-center'>
        <div className='flex-col '>
          <div className='img1 mb-8'>
            <img src="src/assets/1.png" alt="" />
          </div>
          <div className='img2 mb-8'>
            <img src="src/assets/2.png" alt="" />
          </div>
          <div className='img3'>
            <img src="src/assets/3.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards