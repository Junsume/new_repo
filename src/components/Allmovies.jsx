import React, { useEffect, useState } from 'react'
import MoviesCard from './MoviesCard';

function Allmovies() {

    const [Movie, setMovie] = useState([
        {id:"",
          name: "",
          summary: "",
          image: "",
        },
    ]);

    async function fetchData() {
        const response = await fetch(`https://api.tvmaze.com/shows`);
        const data = await response.json();
        data.map((show) => {
            console.log(show);
            setMovie([
              ...Movie,
              {
                id:show.id,
                name: show.name,
                summary: show.summary,
                image: show.image.medium,
              },
            ]);
          });
    }

    useEffect(() => {
      fetchData()
    }, [])
  
  return (
    <div>
      <div className="row">
            {Movie.map((mov) => {
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

export default Allmovies
