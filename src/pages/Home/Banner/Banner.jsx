import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full mt-5 rounded-xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://lsmedia.linker-cdn.net/267697/2023/7946660.jpeg?d=1920x663" className="w-full h-[400px] object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.pinimg.com/originals/2e/af/93/2eaf936fea642bb0fbc307980289aba6.jpg" className="w-full h-[400px] object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://lsmedia.linker-cdn.net/267697/2023/7946664.jpeg?d=1920x663" className="w-full h-[400px] object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://jblpro.com/resource/jbl-3-series-mkii-category-banner.jpg" className="w-full h-[400px] object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

    );
};

export default Banner;