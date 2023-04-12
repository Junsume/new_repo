import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Navbar from "../components/Navbar";
import fev from "../assets/heart.svg"


const MovieDetetails = () => {
  const params = useParams()
  const [users, setUsers] = useState([])
  const [Movie, setMovie] = useState({
        id:"",
        name: "",
        summary: "",
        image: "",
        genres:[],
        ratings:0,
        language:""
  })

  const fetchData = async () => {
    const response = await fetch(`https://api.tvmaze.com/shows/${params.id}`)
    const data = await response.json();
    setMovie({
      id:data.id,
      name: data.name,
      summary: data.summary,
      image: data.image.medium,
      genres:data.genres,
      ratings:data.rating.average,
      language:data.language,
    },
    );
    console.log(data)
    let WatchList = JSON.parse(localStorage.getItem("Watchlist"));
    setwatchlist(WatchList);
  }

  const [watchlist, setwatchlist] = useState([]);

  async function savetoLocal() {
    localStorage.setItem("Watchlist", JSON.stringify([...watchlist, Movie]));
    setwatchlist([...watchlist, Movie]);
  }

  useEffect(() => {
    fetchData()
  }, [])

    // console.log(Watchlist)
    console.log(params);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='row p-5 m-4 bg-warning-subtle p-2 text-dark bg-opacity-18'> 
        <div className='col-7'>
          <div className='shadow-lg border border-success p-3 m-3 bg-body-tertiary'>
            <h1 className='m-3'><span class="badge rounded-pill text-bg-light mx-auto d-block bg-dark-subtle">{Movie.name}</span></h1>
            <img src={Movie.image} className="img-thumbnail mx-auto d-block p-2" style={{ width: "350px" }} alt="..."/>
          </div>
        </div>
        <div className='col-5'>
          <div className='row m-3'>
            <div className='col-8'> 
              <h5>Language <span className="badge bg-secondary">{Movie.language}</span></h5>
              <h5>Ratings <span className="badge bg-secondary">{Movie.ratings}</span></h5> 
            </div>
            <div className='col-4'>
            <button
              onClick={() => savetoLocal()}
              type="button"
              className="btn btn-outline-danger"
            >
              <img src={fev} className="card-img-top m-1" style={{ width: "30px" }} alt="icon" />
            </button>
            </div>
          </div>
          <div className='row'>
            <div className='row'>
              <h5 className='p-1 m-1'> <span className="badge text-bg-dark p-2"> Summary </span> </h5>
              <div class="container-fluid border border-success-subtle form-control border-3 m-2 p-2">
                {Movie.summary}
              </div>
            </div>
            <div className='row p-4 '>
              <h5>Genres {Movie.genres.map((genre) => {
                return (
                  <span className="badge bg-secondary m-1">
                    {
                      genre
                    }
                  </span>
                );
              })}
              </h5>
            </div>
           </div>
        </div>
      </div>
    </div>
   
  )
}

export default MovieDetetails