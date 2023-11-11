import React, { useEffect, useState } from 'react';
import banner1 from '../../assets/Home/banner1.jpg';
import banner2 from '../../assets/Home/banner2.jpg';
import banner3 from '../../assets/Home/banner3.jpg';
import { Carousel } from 'flowbite-react';

function Home() {
  const carouselItems = [
    {
      imgSrc: banner3,
    },
    {
      imgSrc: banner2,
    },
    {
      imgSrc: banner1,
    },
  ];

  const [imageHeight, setImageHeight] = useState('70%'); // Default height
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 640) {
      setIsSmallMobile(true);
      setImageHeight('40%'); // Adjust the height for small mobile screens
    } else {
      setIsSmallMobile(false);
      setImageHeight('70%'); // Default height for larger screens
    }

    const handleResize = () => {
      const newScreenWidth = window.innerWidth;

      if (newScreenWidth < 640) {
        setIsSmallMobile(true);
        setImageHeight('40%');
      } else {
        setIsSmallMobile(false);
        setImageHeight('70%');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bg-neutralSilver min-h-screen flex items-center' id='home'>
      <div className='w-full'>
        {isSmallMobile ? (
          <div className='text-center'>
            <img src={carouselItems[0].imgSrc} alt='' style={{ height: imageHeight, width: '100%' }} />
            <p>Your sentence goes here</p>
          </div>
        ) : (
          <Carousel className='w-full h-screen lg:max-h-screen'>
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className='my-8 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-center gap-12'
                style={{ height: imageHeight }}
              >
                <div>
                  <img src={item.imgSrc} alt='' style={{ height: '100%', width: '100%' }} />
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default Home;
