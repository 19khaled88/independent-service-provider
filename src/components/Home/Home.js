import React from 'react';

export const Home = () => {
  
  const images = [
    '/images/tourism-1.png',
    '/images/tourism-2.png',
    '/images/tourism-3.png',
    '/images/tourism-4.png'
  ];

  let imgIndex = 0;
 
  setInterval(() => {
    if(imgIndex >= images.length){
      imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    document.getElementById('slider-img').setAttribute('src',imgUrl)
    imgIndex++;
    
  }, 3000);
  return <div>
    <img id="slider-img" className="h-100 w-full" src="/images/tourism-1.png" alt="" />
  </div>
}
