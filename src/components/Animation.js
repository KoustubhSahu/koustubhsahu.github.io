import React from 'react';
import './Animation.css';
import Lottie from 'react-lottie';
import animationData from './Animation.json';

const Animation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="animation">
      <Lottie 
        options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  );
};

export default Animation;
