import React from 'react';
import useTitle from '../../../Hook/useTitle';
import DocLeftSideBer from './DocLeftSideBar';
import DocRightSideBer from './DocRightSideBer';

const Documentation = () => {
  useTitle('Documentation');
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-y-4 m-2'>
      <DocLeftSideBer></DocLeftSideBer>
      <DocRightSideBer></DocRightSideBer>
    </div>
  );
};

export default Documentation;