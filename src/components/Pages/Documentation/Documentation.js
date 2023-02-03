import React from 'react';
import Description from './Description';
import MenuBar from './MenuBar';

const Documentation = () => {
  return (
    <div className='grid md:grid-cols-4 container'>
      <MenuBar></MenuBar>
      <Description></Description>
    </div>
  );
};

export default Documentation;