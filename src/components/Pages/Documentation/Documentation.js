import React from 'react';
import Description from './Description';
import MenuBar from './MenuBar';

const Documentation = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-4 m-2'>
      <MenuBar></MenuBar>
      <Description></Description>
    </div>
  );
};

export default Documentation;