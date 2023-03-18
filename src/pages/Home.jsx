import { useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import MoviesCard from "../components/MoviesCard";
import Navbar from "../components/Navbar";
import { MyContext } from "../context/contextProvider";

function Home() {
  const [search, setsearch] = useContext(MyContext);
  const [movies, setmovies] = useState([]);
  console.log(search);

  useEffect(() => {
    async function searchMovie() {
      const result = await fetch(
        `https://api.tvmaze.com/search/shows?q=${search}`
      )
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          setmovies(response), console.log(response);
        });
    }
    searchMovie();
  }, [search]);

  return (
    <div className="row">
      <div className="col">
        <div className="col">
          <Navbar />
        </div>
        <div className="container " style={{ margin: "10px" }}>
          <div className="row">
          {movies.map(mov => {return (
            <div className="col">
              {/* {}
              {mov.show.type} */}

              <MoviesCard name={mov.show.name} />
            </div>
          );
            })}  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
