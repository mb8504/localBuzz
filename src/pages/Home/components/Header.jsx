import React, { useEffect, useState } from 'react';

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // Duration in milliseconds for the counter to reach the target

  useEffect(() => {
    const start = performance.now();
    const updateCount = (currentTime) => {
      const progress = currentTime - start;
      const increment = Math.min(progress / duration, 1) * target;
      setCount(Math.ceil(increment));
      if (progress < duration) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [target, duration]);

  return <div>{count.toLocaleString()}</div>;
};

function Header() {
  return (
    <>
      <img className='w-full' src="/hero.png" alt="Hero" />
      <div className='bg-black pt-8 pb-8'>
        <section className="siteContainer">
          <div className="text-white grid grid-cols-3 stats justify-between text-center">
            <div className="result p-4 col-start-1 col-end-6">
              <div className="number text-4xl font-bold">
                <Counter target={7} />
              </div>
              <div className="text">Years</div>
            </div>
            
            <div className="result p-4 col-start-1 col-end-6">
              <div className="number text-4xl font-bold">
                <Counter target={295000} />
              </div>
              <div className="text">Thirsts Quenched</div>
            </div>

            <div className="result p-4 col-start-1 col-end-6">
              <div className="number text-4xl font-bold">
                <Counter target={55000} />
              </div>
              <div className="text">Charity</div>
            </div>

            <div className="beer result p-4 col-start-1 col-end-6">
              <div className="number text-4xl font-bold">
                <Counter target={1085000} />
              </div>
              <div className="text">Gallons of Beer</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Header;
