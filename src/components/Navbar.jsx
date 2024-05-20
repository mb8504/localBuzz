import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
 // I want React to remember nav. Initial value of your state is set to false.
 // const [index, setIndex] = useState(0). 
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
      <section className='bg-black'>
        <nav className="font-Roboto flex justify-between siteContainer">
            <a href="#" className='font-Logo text-white'>Local Buzz Brewing</a>

            <button onClick={handleNav} className='z-50 text-white md:max-xl:hidden lg:hidden xl:hidden 2xl:hidden'>
                {!nav ? <AiOutlineMenu size={40} /> : <AiOutlineClose size={40} />}
            </button>

            <div id='mobile' className={!nav ? 'fixed right-[-100%]' : 'fixed right-0 top-0 w-[60%] h-full bg-slate-900'}>

            <ul className='flex flex-col text-white'>
                <li><a href="#">Home</a></li>
                <li className='ml-8'><a href="#">Beers</a></li>
                <li className='ml-8'><a href="#">Events</a></li>
                <li className='ml-8'><a href="#">Rhythm & Blues</a></li>
                <li className='ml-8'><a href="#">Contact</a></li>
            </ul>

            </div>

            <div id='desktop' className='hidden md:block'>
            <ul className='flex text-white pt-5 pb-5'>
                <li><a href="#">Home</a></li>
                <li className='ml-8'><a href="#">Beers</a></li>
                <li className='ml-8'><a href="#">Events</a></li>
                <li className='ml-8'><a href="#">Rhythm & Blues</a></li>
                <li className='ml-8'><a href="#">Contact</a></li>
            </ul>
            </div>
        </nav>
      </section>  
    )
  }
  
  export default Navbar