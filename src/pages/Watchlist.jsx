import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MoviesCard from '../components/MoviesCard'


const Watchlist = () => {
    const [watchlist, setwatchlist] = useState([])

    useEffect(() => {
        let watchList = JSON.parse(localStorage.getItem("Watchlist"));
        setwatchlist(watchList);
      }, [])
  return (
    <div className='bg-danger p-2 text-dark bg-opacity-10'>
        <div className='row'> <Navbar/> </div>
        <div className='row mt-5 p-4'>
            {watchlist.map((mov) => {
              return (
                <div className="col">
                  <MoviesCard
                    id={mov.id}
                    name={mov.name}
                    img={mov.image}
                    summary={mov.summary}
                  />
                </div>
              );
            })}
        </div>
    </div>
  )
}

export default Watchlist
