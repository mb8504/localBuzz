import React from 'react'

const Footer = () => {
  return (
    <section className="bg-black pb-28 pt-28">
        <div className="siteContainer">

            <div className="text-white text-6xl pb-12 text-center md:text-left mb-28">
            The beer news you can't miss. <br /> In your inbox every Friday!
            </div>

            {/* <div id='svgImage'>
                <svg className='' width="83" height="5" viewBox="0 0 83 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="yellow_underline" d="M0.5 4.50001C0.5 4.50001 51 -3 82.5 4.49999" stroke="#FFE818"/>
                </svg>
            </div> */}

            <div className='flex flex-row justify-between border-b-2 border-white pb-1 md:justify-end md:border-none'>
                <form className='md:border-b-2' action="#" method="POST">
                    <div className="text-2xl text-center">
                        <input className='bg-black text-white outline-none' type="email" name="email" placeholder="Drop your email here!" />
                    </div>
                </form>
                <button className="md:border-b-2 text-white">
                    Send
                </button>
            </div>

        </div>
    </section>
  )
}

export default Footer