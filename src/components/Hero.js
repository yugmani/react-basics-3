import React from 'react';

const Hero = ({ heroName }) => {
  if (heroName === 'Joker') {
    throw new Error('Not a hero!');
  }
  return (
    <div>
      <h1>{heroName} is a Hero.</h1>
    </div>
  );
};

export default Hero;
