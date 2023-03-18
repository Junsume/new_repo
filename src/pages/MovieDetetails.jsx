import React from 'react'
import {useParams} from 'react-router-dom'
const MovieDetetails = () => {

    const params = useParams()
    console.log(params);
  return (
    <div>MovieDetetails : {params.id} </div>
  )
}

export default MovieDetetails