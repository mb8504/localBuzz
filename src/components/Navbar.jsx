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
            <a href="#" className='font-Logo text-white text-3xl pt-8 pb-8 pr-5'>Local Buzz Brewing</a>

            <button onClick={handleNav} className='z-50 text-white md:max-xl:hidden lg:hidden xl:hidden 2xl:hidden'>
                {!nav ? <AiOutlineMenu size={40} /> : <AiOutlineClose size={40} />}
            </button>

            <div id='mobile' className={!nav ? 'fixed right-[-100%]' : 'fixed right-0 top-0 w-[100%] h-full bg-black bg-opacity-90'}>

            <ul className='flex flex-col text-white text-base text-center font-bold'>
                <li className='mt-20 pt-8'><a href="#">Home</a></li>
                <li className='mt-8'><a href="#">Beers</a></li>
                <li className='mt-8'><a href="#">Events</a></li>
                <li className='mt-8'><a href="#">Rhythm & Blues</a></li>
                <li className='mt-8'><a href="#">Contact</a></li>
            </ul>

            </div>

            <div id='desktop' className='hidden md:block'>
            <ul className='flex text-white pt-8 pb-8'>
                <li><a href="#">Home</a></li>
                <li className='ml-10'><a href="#">Beers</a></li>
                <li className='ml-10'><a href="#">Events</a></li>
                <li className='ml-10'><a href="#">Rhythm & Blues</a></li>
                <li className='ml-10'><a href="#">Contact</a></li>
            </ul>
            </div>
        </nav>
      </section>  
    )
  }
  
  export default Navbar