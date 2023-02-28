import React from 'react'
import { useLoaderData } from 'react-router-dom'

function CoursesDetails() {
  const coursesDetails= useLoaderData()
  const {coursesName,fullderscription,heading,img,participant,price,_id} = coursesDetails;
  console.log(_id);


  
  return (
    <div>
      <p>{}</p>
    </div>
  )
}

export default CoursesDetails