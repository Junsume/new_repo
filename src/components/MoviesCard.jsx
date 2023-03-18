import React from "react";
import { Link } from "react-router-dom";
import poster from "../assets/poster.jpg"
const MoviesCard = ( {name, type, summary}) => {
  return (
    <div>
      <div className="card" style={{width: '200px'}}>
        <img
          src={poster}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        <Link to={'/about/15'}>  <a href="#" className="btn btn-primary">
            Go somewhere
          </a></Link>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
