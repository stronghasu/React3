import React from "react";
import imgfile from "../../assets/img/basic.jpg";

function MovieItem(props) {
  const MovieImg = `${props.results.poster_path}`;
  // const changeImg = { imgfile };

  // if (MovieImg === "") {
  //   <img src={changeImg} alt="" />;
  // } else {
  //   <img src={`https://image.tmdb.org/t/p/w500/${MovieImg}`} alt="name" />;
  // }

  return (
    <li>
      <a
        href={`https://www.themoviedb.org/movie/${props.results.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {MovieImg === "null" ? (
          <img src={imgfile} alt="" />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500/${MovieImg}`}
            alt={props.results.title}
          />
        )}
        <p>{props.results.title}</p>
      </a>
    </li>
  );
}

export default MovieItem;
