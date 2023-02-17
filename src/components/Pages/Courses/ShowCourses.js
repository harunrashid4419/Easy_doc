import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

function ShowCourses({courses}) {
     const {coursesName,fullderscription,heading,img,participant,price,_id} = courses
  return (
    <div>
         <div>
          <div className="card w-full h-5/6 border-5px bg-base-100 shadow-xl mt-0">
                  <PhotoProvider>
                 <PhotoView src={img}>
                 <figure><img className='w-full h-full' src={img} alt="loading" /></figure>
                  </PhotoView>
                  </PhotoProvider>         
          <div className="card-body">
          <h2 className="card-title">{coursesName}</h2>
          <p>{heading}</p>
          <div className="card-actions mt-4">
            <p className='font-semibold'>price: ${price}</p>
              <Link to={`/servicesDetails/${_id}`}><button className="btn btn-primary">See details</button></Link> 
          </div>
          </div>
          </div>
    </div>
    </div>
  )
}

export default ShowCourses