import React, { useEffect, useState } from 'react';

function Header() {
  return (
    <>
        <img className='w-full' src="src/assets/Locals/locals.png" alt="" />
        <section className='siteContainer'>
            <div className='flex flex-col md:flex-row md:justify-between mt-28 mb-28'>
                <div className='md:w-1/2'>
                    <p cla>Locals Only Mug Club</p>
                    <h1 className='text-4xl text-left mb-2 font-bold'>
                        The beer tastes even better when you're a local! 
                    </h1>
                    <p className='mb-2 md:mr-20'>
                        The Locals Only mug club is the chance to share your love for beer with others in the community. 
                    </p>
                    <ul className='list-disc ml-6 mb-8'>
                        <li>Get your own mug</li>
                        <li>Exclusive 4 packs every month</li>
                        <li>Food and beer pairing events</li>
                        <li>Discounted growlers and 4 packs</li>
                        <li>Swag pack when you first sign up</li>
                    </ul>
                </div>
                <div className='md:w-auto'>
                    <img className='w-full h-auto md:max-w-xs lg:max-w-sm' src="src/assets/Locals/cheers2.png" alt="Cheers" />
                </div>
            </div>
        </section>
        <section>
            <div className='text-[#F0840A] font-bold'>
                <p className='text-center text-3xl mb-28 mt-28 pt-28 pb-28'>
                When you sign up, we'll buy your first beer!
                </p>
            </div>
        </section>
    </>
  )
}

export default Header
