import React from 'react'
import {  NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='bg-black pb-16 pt-28'>
        <div className='siteContainer flex flex-col footerWrap text-white'>
            <div className='flex flex-col text-center footerWrap'>
                <ul className='footerLinks mb-8 uppercase text-xl'>
                    <li><NavLink className='hover:text-orange' to='/'>Home</NavLink></li>
                    <li><NavLink className='hover:text-orange' to='/beers'>beers</NavLink></li>
                    <li><NavLink className='hover:text-orange' to='/locals-only'>locals only</NavLink></li>
                    <li><NavLink className='hover:text-orange' to='/contact'>contact</NavLink></li>
                </ul>
                <ul className='uppercase text-xl'>
                    <li><NavLink className='hover:text-orange' to='#'>TIKTOK</NavLink></li>
                    <li><NavLink className='hover:text-orange' to='#'>facebook</NavLink></li>
                    <li><NavLink className='hover:text-orange' to='#'>instagram</NavLink></li>
                    <li><NavLink className='hover:text-orange' to='#'>youtube</NavLink></li>
                </ul>
            </div>
            <div className='font-Logo text-white text-4xl pt-20 text-center md:text-left '>
            <NavLink to='/'>Local Buzz Brewing</NavLink>
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