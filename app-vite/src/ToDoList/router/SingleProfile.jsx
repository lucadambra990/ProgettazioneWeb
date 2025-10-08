import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProfiles = () => {
  const params=useParams();
  console.log(params)
  return (
    <div>SingleProfiles con id {params.div}</div>
  )
}

export default SingleProfiles