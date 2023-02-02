import { useQuery } from '@tanstack/react-query';
import React from 'react';




const Users = () => { 
  const {data:allusers=[]}=useQuery({
          queryKey:'allusers',
          queryFn:async()=>{
            const res=await fetch('https://easy-doc-server.vercel.app/allUser');
            const data=await res.json();
            return data;

          }
  })
  

        return (
<div>
  <h1 className='text-4xl my-12 text-center'>All Users</h1>

  <div className="overflow-x-auto ">
  <table className="table table-zebra w-full ">
  
    <thead>
      <tr className='bg-violet-200'>
        <th className='text-xl'>Avatar</th>
        <th className='text-xl'>Name</th>
        <th className='text-xl'>Email</th>
        <th className='text-xl'>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        allusers?.map(user=>
        <tr key={user._id}>
        <th>
        <div className="avatar">
  <div className="w-16 rounded-full">
    <img src={user.photoURL} alt=""/>
  </div>
</div>
        </th>
        <td>{user.name}</td>
        <td>{user.email}</td>
         <td>
          <button className='btn bg-yellow-400 hover:bg-yellow-500 text-black border-none'>Delete</button>
         </td>
    </tr> 
    )
      }
    </tbody>
  </table>
</div>

</div>
        );
      }
          
       


export default Users;