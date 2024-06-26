import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {  NavLink } from 'react-router-dom';

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
            <NavLink className='font-Logo text-white text-4xl pt-8 pb-8 pr-5' to='/'>Local Buzz Brewing</NavLink>

            <button onClick={handleNav} className='z-50 text-white md:max-xl:hidden lg:hidden xl:hidden 2xl:hidden'>
                {!nav ? <AiOutlineMenu size={40} /> : <AiOutlineClose size={40} />}
            </button>

            <div id='mobile' className={!nav ? 'fixed right-[-100%]' : 'fixed right-0 top-0 w-[100%] h-full bg-black bg-opacity-90'}>

            <ul className='flex flex-col text-white text-lg text-center font-bold'>
                <NavLink className='hover:text-orange mt-20 pt-8' to='/'>Home</NavLink>
                <NavLink className='hover:text-orange mt-8' to='/beers'>Beers</NavLink>
                <NavLink className='mt-8 hover:text-orange' to='/locals-only'>Locals Only</NavLink>
                <NavLink className='mt-8 hover:text-orange' to='/contact'>Contact</NavLink>
            </ul>

            </div>

            <div id='desktop' className='hidden md:block'>
            <ul className='flex text-white pt-8 pb-8 text-lg'>
                <NavLink className='hover:text-orange' to='/'>Home</NavLink>
                <NavLink className='ml-10 hover:text-orange' to='/beers'>Beers</NavLink>
                <NavLink className='ml-10 hover:text-orange' to='/locals-only'>Locals Only</NavLink>
                <NavLink className='ml-10 hover:text-orange' to='/contact'>Contact</NavLink>
            </ul>
            </div>
        </nav>
      </section>  
    )
  }
  
  export default Navbar