import React from 'react'
import {useParams} from 'react-router-dom'
const MovieDetetails = () => {

    const params = useParams()
    console.log(params);

    // url: https://api.tvmaze.com/shows/4658
  return (
    <div>MovieDetetails : {params.id} </div>
  )
}

export default MovieDetetails