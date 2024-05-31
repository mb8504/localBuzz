import React from 'react'

const Footer = () => {
  return (
    <section className='bg-black pb-16 pt-28'>
        <div className='siteContainer flex flex-col footerWrap text-white'>
            <div className='flex flex-col text-center footerWrap'>
                <ul className='footerLinks mb-8 uppercase text-xl'>
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
            <div className='font-Logo text-white text-4xl pt-20 text-center md:text-left '>
                Local Buzz Brewing
            </div>
        </div>
        <div className='siteContainer text-white'>
            <div className='pt-4'>
                <ul className='text-sm text-center bottomText'>
                    <li className='bottomText'>&copy; 2024 Local Buzz Brewing</li>
                    <li className='bottomText'>Legal</li>
                    <li className='bottomText'>Privacy</li>
                    <li>Cookies</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer


{/* <div className='siteContainer text-white'>
<div className='pt-8 md:text-left'>
    <ul className='text-sm flex md:flex-row md:justify-start justify-center'>
        <li>&copy; 2024 Local Buzz Brewing</li>
        <li>Legal</li>
        <li>Privacy</li>
        <li>Cookies</li>
    </ul>
</div>
</div> */}