import React from 'react';
import Description from './Description';
import Menu from './Menu';

const Documentation = () => {
  return (
    <div className='grid md:grid-cols-4 container'>
      <Menu></Menu>
      <Description></Description>
    </div>
  );
};

export default Documentation;