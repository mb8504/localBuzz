import React, { useEffect, useState } from 'react';

function Contact() {
  return (
    <>
        <section className='bg-black text-white pt-8'>
            <div className='siteContainer flex flex-col md:flex-row md:justify-between mt-28 mb-28'>
                <div className='md:w-1/2'>
                    <h1 className='text-4xl text-left mb-2 font-bold'>
                        Get to know us! 
                    </h1>
                    <p className='mb-2 md:mr-20'>
                       Hours of Operation
                    </p>
                    <ul className='list-disc ml-6 mb-8'>
                        <li>Monday Closed</li>
                        <li>Tuesday – Thursday 4:30 p.m. to 10 p.m.</li>
                        <li>Friday 4 p.m. to 11 p.m.</li>
                        <li>Saturday Noon to 11 p.m.</li>
                        <li>Sunday Noon to 8 p.m.</li>
                    </ul>
                </div>
                <div className='md:w-auto'>
                    <img className='w-full h-auto md:max-w-xs lg:max-w-sm' src="/contact.png" alt="Cheers" />
                </div>
            </div>
        </section>
        <section className='bg-black text-white pt-28'>
            <div className='siteContainer'>
                <h2 className='text-3xl text-center mb-8'>
                    Still have questions? Drop us a line.
                </h2>
                <form className='md:w-3/4' action="">
                    <div className='flex flex-col mb-4'>
                        <span className='text-[#ddd]'>Name*</span>
                        <input className='bg-black border-b-2 border-b-[#c1c1c1] placeholder-[#c1c1c1] placeholder-text-2xl h-12' id='name' type="text" placeholder='Name' />
                    </div>

                    <div className='flex flex-col mb-4'>
                        <span className='text-[#ddd]'>Email*</span>
                        <input className='bg-black border-b-2 border-b-[#c1c1c1] placeholder-[#c1c1c1] placeholder-text-2xl h-12' id='name' type="text" placeholder='Email' />
                    </div>

                    <div className='flex flex-col'>
                        <span className='text-[#ddd]'>Message*</span>
                        <textarea className='bg-black placeholder-[#c1c1c1]' name="message" id="message" placeholder='Type here.. '></textarea>
                        {/* <input className='bg-black border-b-2 border-[#c1c1c1] placeholder-[#c1c1c1] placeholder-text-2xl h-24' id='name' type="text" placeholder='Type here..' /> */}
                    </div>
                    <button className='bg-white text-black rounded-lg p-1.5 mb-8 mt-8' type='submit'>Send message</button>
                </form>
            </div>
        </section>
    </>
  )
}

export default Contact
