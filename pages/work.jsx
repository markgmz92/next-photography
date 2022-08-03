import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';

const work = () => {
  return (
    <div>
      <Hero
        heading='My Work'
        message='This is some of my recent work while travelling the world.'
      />
      <Portfolio />
    </div>
  );
};

export default work;
