import React from "react";
import MovieItem from "./MovieItem";

function MovieCont(props) {
  //console.log(props);
  const Movieresults = `${props.videos}`;

  return (
    <ul>
      {Movieresults === "" ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        props.videos.map((list, index) => (
          <MovieItem key={index} results={list} />
        ))
      )}
    </ul>
  );
}

export default MovieCont;
