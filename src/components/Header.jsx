import React from 'react'

function Header() {
  return (
    <>
      <img className='w-full' src="src/assets/hero.png" alt="" />
      <div className='bg-black pt-8 pb-8'>
        <section className="siteContainer">
          <div className="text-white grid grid-cols-3 md:flex justify-between text-center">
              <div className="result p-4">
                  <div className="number text-4xl font-bold">7</div>
                  <div className="text">Years</div>
              </div>
              <div className="result p-4">
                  <div className="number text-4xl font-bold">14</div>
                  <div className="text">Staff</div>
              </div>
              <div className="result p-4 ">
                  <div className="number text-4xl font-bold">1M</div>
                  <div className="text">Gallons of Beer</div>
              </div>
              <div className="result p-4 ">
                  <div className="number text-4xl font-bold">9</div>
                  <div className="text">Awards</div>
              </div>
              <div className="result p-4">
                  <div className="number text-4xl font-bold">55K</div>
                  <div className="text">Charity</div>
              </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Header

