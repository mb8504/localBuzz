import React, { useState, useRef, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resources, setResources] = useState([]);
  const carousel = useRef(null);
  const maxScrollWidth = useRef(0);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setResources(data.resources))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current &&
      (currentIndex + 1) * carousel.current.offsetWidth <= maxScrollWidth.current
    ) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (carousel.current) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    if (carousel.current) {
      maxScrollWidth.current = carousel.current.scrollWidth - carousel.current.offsetWidth;
    }
  }, [resources]);

  return (
    <div className="bg-black pb-28 pt-28">
      <div className="siteContainer carousel my-12 mx-auto">
        <div className="text-[#F0840A] text-4xl pb-12">
          Featured Beers
        </div>
        <div className="relative overflow-hidden">
          <div className="flex justify-between absolute top-0 left-0 w-full h-full">
            <button
              onClick={movePrev}
              className="hover:bg-slate-700/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={currentIndex <= 0}
            >
              <BsChevronCompactLeft className="h-12 w-20 -ml-5" />
              <span className="sr-only">Prev</span>
            </button>
            <button
              onClick={moveNext}
              className="hover:bg-slate-700/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={currentIndex >= resources.length - 1}
            >
              <BsChevronCompactRight className="h-12 w-20 -ml-5" />
              <span className="sr-only">Next</span>
            </button>
          </div>
          <div
            ref={carousel}
            className="carousel-container relative flex gap-0 md:gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
          >
            {resources.map((resource, index) => (
              <div
                key={index}
                className="carousel-item flex-shrink-0 w-full md:w-1/2 lg:w-1/4 text-center h-94 snap-start relative"
              >
                <a
                  href={resource.link}
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.imageUrl})` }}
                >
                  <img
                    src={resource.imageUrl}
                    alt={resource.title}
                    className="w-full aspect-square hidden"
                  />
                </a>
                <a
                  href={resource.link}
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100 hover:bg-slate-700/75 z-10 flex items-center justify-center"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.title}
                  </h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
