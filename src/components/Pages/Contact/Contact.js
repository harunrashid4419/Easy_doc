import React, { useEffect, useState } from 'react';
import Member from './Member/Member';

const Contact = () => {
    const [members,setMembers]=useState([]);
    useEffect(()=>{
        fetch('members.json')
        .then(res=>res.json())
        .then(data=>{
            setMembers(data)
        })
    },[])
    return (
        <div>
            <div className='flex items-center justify-center bg-violet-400 h-60'>
            <div className='w-50 flex flex-col items-center'>
                <h1 className='text-5xl my-2 font-semibold'>Contact Us</h1>
                <h3 className='text-lg'>Contact The Help Team</h3>
            </div>
           
            </div>
            <section className=" py-16 bg-violet-100">
  <div className=" px-4 mx-auto max-w-screen-md border-2 border-violet-200 rounded py-12">
      <form action="https://formsubmit.co/munniakter00702@gmail.com" method="POST" className="space-y-8">
          <div>
              <label for="name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Your Name</label>
              <input type="text" name='name' className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder='Name' required/>
          </div>
          <div>
              <label for="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input type="email" name='email' className="block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-400 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder='username@gmail.com' required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" name='subject' className="block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-400 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" name='message' rows="6" className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-400 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Here"></textarea>
          </div>
          <div className='text-center'>
          <button type="submit" className=" py-3 px-5 text-lg btn btn-primary font-medium text-center text-black rounded-lg bg-yellow-500 sm:w-fit hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
          </div>
      </form>
  </div>
</section>
<div className='my-20'>
        <div className='text-center'>
        <h1 className='text-5xl font-bold my-4'>Meet Our Beautiful Team</h1>
        <p className='text-lg font-semibold my-8'>We are a small team of designers and developers, who help brand with big ideas</p>
        </div>
         <div className='mx-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 my-16'>
            {
            members.map(member=><Member
            key={member.id}
            member={member}
            ></Member>)
            }
         </div>
           
            </div>
</div>
    );
};

export default Contact;