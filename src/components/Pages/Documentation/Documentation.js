import React from 'react';
import Description from './Description';
import Menu from './Menu';

const Documentation = () => {
  return (
    <div className='md:w-11/12 mx-auto grid md:grid-cols-4 h-screen gap-x-10 my-[40px]'>
      <Menu></Menu>
      <Description></Description>
    </div>
  );
};

export default Documentation;