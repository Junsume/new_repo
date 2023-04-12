import { useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import MoviesCard from "../components/MoviesCard";
import Navbar from "../components/Navbar";
import { MyContext } from "../context/contextProvider";
import Allmovies from "../components/Allmovies";

function Home() {
  const [search, setsearch] = useContext(MyContext);
  const [movies, setmovies] = useState([
    {id:"",
      name: "",
      summary: "",
      image: "",
    },
  ]);
  console.log(search);

  useEffect(() => {
    setmovies([]);
    async function searchMovie() {
      const result = await fetch(
        `https://api.tvmaze.com/search/shows?q=${search}`
      )
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          console.log(response);

          response.map((show) => {
            console.log(show);
            setmovies([
              ...movies,
              {
                id:show.show.id,
                name: show.show.name,
                summary: show.show.summary,
                image: show.show.image.medium,
              },
            ]);
          });
        });
    }
    searchMovie();
  }, [search]);

  return (
    <div className="bg-success p-2 text-dark bg-opacity-10">
        <div className="row">
          <Navbar />
        </div>
        <div className="row container " style={{ margin: "70px 20px 10px 20px" }}>
          <div className="row m-2 p-4">
            {movies.map((mov) => {
              return (
                <div className="col m-1 p-1">
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
          <div className="row" >
            <div className="col-12">
              <Allmovies/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
