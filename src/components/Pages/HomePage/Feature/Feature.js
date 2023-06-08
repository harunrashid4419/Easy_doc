import React from 'react';

const Feature = () => {
    return (
       
        <div className="container px-6 mx-auto ">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <div className='text-center'>
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Got a problem? <br /> 
                <span className='text-2xl text-gray-600 dark:text-white lg:text-3xl'> Find answers to all your questions</span>
                </h1>
                </div>
                <div className='grid grid-cols-2 my-8 mx-6'>
                    <div className='text-center'>
                        <img className='mx-auto' src="https://dtkbase.wpengine.com/wp-content/uploads/2016/11/user-guide.gif" alt="" />
                        <p className='mt-6'> By reading the documention, You can solve your problem.</p>
                    </div>
                    <div className='text-center'>
                        <img className='mx-auto' src="https://dtkbase.wpengine.com/wp-content/uploads/2016/11/contact-icon.gif" alt="" />
                        <p className='mt-6'>By chatting with us, You can solve your problem.</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img className="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg" />
            </div>
          </div>
        </div>
    
    );
};

export default Feature;