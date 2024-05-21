import React from 'react'

function Header() {
  return (
    <>
      <img className='w-full' src="src/assets/hero.png" alt="" />
      <div className='bg-black pt-14 pb-14'>
        <section className="siteContainer">
          <div className="text-white flex justify-between text-center">
              <div className="result">
                  <div className="number text-4xl font-bold">5</div>
                  <div className="text">Years</div>
              </div>
              <div className="result">
                  <div className="number text-4xl font-bold">14</div>
                  <div className="text">Staff</div>
              </div>
              <div className="result">
                  <div className="number text-4xl font-bold">1,503,252</div>
                  <div className="text">Gallons of Beer</div>
              </div>
              <div className="result">
                  <div className="number text-4xl font-bold">109,500</div>
                  <div className="text">Quenched</div>
              </div>
              <div className="result">
                  <div className="number text-4xl font-bold">200,000</div>
                  <div className="text">Charity</div>
              </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Header

