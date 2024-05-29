import React from 'react'

const Footer = () => {
  return (
    <section className='bg-black pb-28 pt-28'>
        <div className='siteContainer flex flex-col md:flex-row md:justify-between text-white'>
            <div className='flex '>
                <ul className='mr-28 uppercase text-xl'>
                    <li>Home</li>
                    <li>Beers</li>
                    <li>Locals Only</li>
                    <li>Contact</li>
                </ul>
                <ul className='uppercase text-xl'>
                    <li>TikTok</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>YouTube</li>
                </ul>
            </div>
            <div className='font-Logo text-white text-4xl pt-14'>
                Local Buzz Brewing
            </div>
        </div>
    </section>
  )
}

export default Footer