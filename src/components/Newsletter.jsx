import React, { useRef, useEffect } from 'react';

const Footer = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svgElement = svgRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            svgElement.classList.add('animate');
          } else {
            svgElement.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (svgElement) {
      observer.observe(svgElement);
    }

    return () => {
      if (svgElement) {
        observer.unobserve(svgElement);
      }
    };
  }, []);

  return (
    <section className="bg-black pb-28 pt-28">
      <div className="siteContainer">
        <div className="text-white text-6xl text-center md:text-left">
          The beer news you can't miss. <br /> In your inbox every Friday!
        </div>

        <div id='svgDiv'>
          <svg
            ref={svgRef}
            width="117"
            height="94"
            viewBox="0 0 117 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="yellow_underline"
              className="path"
              d="M116.697 93.0578L114.061 75.9391L100.554 86.7816L116.697 93.0578ZM1 1.48889C0.283647 2.80678 0.283748 2.80683 0.284114 2.80703C0.284589 2.80729 0.285219 2.80763 0.286166 2.80815C0.288061 2.80918 0.291008 2.81078 0.295002 2.81296C0.30299 2.81731 0.315165 2.82395 0.331479 2.83286C0.364107 2.85068 0.41329 2.87758 0.478642 2.91345C0.609347 2.98518 0.804728 3.09276 1.0617 3.23519C1.57566 3.52007 2.33597 3.94439 3.31798 4.5003C5.28204 5.61213 8.13269 7.25018 11.6727 9.35164C18.7535 13.5549 28.5889 19.6101 39.6027 27.0148C61.6532 41.8396 88.335 62.013 107.116 83.5162L109.375 81.5427C90.3343 59.7415 63.3933 39.3945 41.2765 24.5252C30.2066 17.0828 20.3222 10.9974 13.2041 6.77193C9.64473 4.659 6.77616 3.0106 4.79587 1.88958C3.80571 1.32906 3.03755 0.900353 2.51609 0.611312C2.25536 0.466791 2.05629 0.357183 1.92198 0.283471C1.85482 0.246614 1.80385 0.218732 1.76945 0.199945C1.75225 0.190552 1.73919 0.183433 1.73033 0.178603C1.7259 0.176188 1.72251 0.174345 1.72018 0.173077C1.71902 0.172443 1.71806 0.171922 1.71748 0.171605C1.71678 0.171229 1.71636 0.170996 1 1.48889Z"
              fill="#FFE818"
            />
          </svg>
        </div>

        <div className='flex flex-row justify-between border-b-2 border-white pb-1 md:justify-end md:border-none mt-8'>
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
  );
};

export default Footer;
