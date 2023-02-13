import React from 'react';
import LeftSideBer from './LeftSideBer';
import RightSideBer from './RightSideBer';


const Documentation = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-8 lg:grid-cols-4 gap-y-4 m-2'>
      <LeftSideBer></LeftSideBer>
      <RightSideBer></RightSideBer>
    </div>
  );
};

export default Documentation;