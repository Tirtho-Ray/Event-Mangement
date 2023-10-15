import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // featch my data i data.json
    fetch('/Data.json') 
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full">
      <div className="slider-container relative w-full h-96
       md:h-[600px]">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`slide absolute md:h-[600px]  w-full h-96 transition-transform duration-300 transform translate-x-${100 * (index - currentIndex)} ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image.image} alt={image.title} className="object-cover w-full h-full opacity-85" />
            <div className=' absolute bottom-40 md:left-4 '>
              <p className=' text-xl md:text-3xl lg:text-6xl w-[300px] lg:w-[400px] text-center font-extrabold text-blue-700'>Enjoy Your Social Events </p>
             
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={goToPrevious} className="btn btn-primary mr-4">
          Previous
        </button>
        <button onClick={goToNext} className=" btn btn-secondary ">
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
