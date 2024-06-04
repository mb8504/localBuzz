import React, { useState } from 'react';
// import Fade from 'react-reveal/Fade'

const GreenHop = () => <img src="src/assets/Home/greenhops.png" alt="Green Hop" className="h-40 w-28" />;
const WhiteHop = () => <img src="src/assets/Home/whitehops.png" alt="White Hop" className="h-40 w-28 animate-bounce" />;
const GreenHop2 = () => <img src="src/assets/Home/greenhops.png" alt="Green Hop" className="h-40 w-28" />;
const WhiteHop2 = () => <img src="src/assets/Home/whitehops.png" alt="White Hop" className="h-40 w-28 animate-bounce" />;
const GreenHop3 = () => <img src="src/assets/Home/greenhops.png" alt="Green Hop" className="h-40 w-28" />;
const WhiteHop3 = () => <img src="src/assets/Home/whitehops.png" alt="White Hop" className="h-40 w-28 animate-bounce" />;

const Hops = () => {
  const [color, setColor] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  // const [text, setText] = useState(false);

  const handleClick = () => {
    setColor(!color);
    // setText(!text);
  };

  const handleClick2 = () => {
    setColor2(!color2);
    // setText(!text);
  };

  const handleClick3 = () => {
    setColor3(!color3);
    // setText(!text);
  };

  const renderHopImage = () => {
    return (
      <div className="w-40 flex flex-col items-center">
        <div className="flex items-center justify-center h-40">
          {color ? <GreenHop /> : <WhiteHop />}
        </div>
        <div className="mt-2 text-center">
          {color && (
            <>
              {/* <Fade> */}
                <h2 className="text-white text-2xl underline pb-1 duration-700" >Citra</h2>
                <p className="text-white duration-700">
                  A dual-purpose hop with a floral, citrusy, tropical fruit aroma and flavor that's often used in IPAs and pale ales.
                </p>
                <br />
                <h2 className="text-white text-2xl underline pb-1 duration-700" >Beers</h2>
                <p className="text-white duration-700">
                  Try "The Hoppy Farmer" for a burst of Citra. On tap and in cans.
                </p>
              {/* </Fade> */}
            </>
          )}
        </div>
      </div>
    );
  };


  const renderHopImage2 = () => {
    return (
      <div className="w-40 flex flex-col items-center">
        <div className="flex items-center justify-center h-40">
          {color2 ? <GreenHop2 /> : <WhiteHop2 />}
        </div>
        <div className="mt-2 text-center">
          {color2 && (
            <>
              {/* <Fade> */}
                <h2 className="text-white text-2xl underline pb-1 duration-700" >Simcoe</h2>
                <p className="text-white duration-700">
                  Simcoe hops can add flavors and aromas of grapefruit, pine, and citrus to IPAs, double IPAs, American pale ales, wheat beers, and amber ales.
                </p>
                <br />
                <h2 className="text-white text-2xl underline pb-1 duration-700" >Beers</h2>
                <p className="text-white duration-700">
                  "Hazy With A Chance of Hops" is sure to leave your taste buds hopping for more! On tap and in cans.
                </p>
              {/* </Fade> */}
            </>
          )}
        </div>
      </div>
    );
  };

  const renderHopImage3 = () => {
    return (
      <div className="w-40 flex flex-col items-center">
        <div className="flex items-center justify-center h-40">
          {color3 ? <GreenHop3 /> : <WhiteHop3 />}
        </div>
        <div className="mt-2 text-center">
          {color3 && (
            <>
              {/* <Fade> */}
                <h2 className="text-white text-2xl underline pb-1 duration-700" >Mosaic</h2>
                <p className="text-white duration-700">
                  A nice blend of tropical, fruity, and earthy flavors. Also known for it's cutrus, grassy, blueberry aromas. 
                </p>
                <br />
                <h2 className="text-white text-2xl underline pb-1 duration-700" >Beers</h2>
                <p className="text-white duration-700">
                  Our double dry hopped juicy hazy NE IPA "Hazed and Confused" will quench your thirst with a blast of Citra and Mosaic hops. Draft only.
                </p>
              {/* </Fade> */}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-black pt-14">
      <div className="siteContainer text-white flex flex-col items-center">
        <p className="text-3xl text-center pb-28">
          Looking for something with a little extra hop?
          <br />
          Click the hop drops to explore some of the local hops featured in our upcoming releases.
        </p>
        <div className="hop1 max-w-40 pb-28 hover:cursor-pointer" onClick={handleClick}>
          {renderHopImage()}
        </div>
        <div className="hop1 max-w-40 pb-28 hover:cursor-pointer" onClick={handleClick2}>
          {renderHopImage2()}
        </div>
        <div className="hop1 max-w-40 pb-28 hover:cursor-pointer" onClick={handleClick3}>
          {renderHopImage3()}
        </div>
      </div>
    </section>
  );
};

export default Hops;
