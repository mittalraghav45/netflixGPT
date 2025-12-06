import Header from "./Header";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

import MainContainer from './MainContainer';
// import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  
const dispatch=useDispatch();

const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results); 
    dispatch(addNowPlayingMovies(json.results));

  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);


   return (
    <div>
      <Header />
      <MainContainer/>
      {/* <SecondaryContainer/> */}

    </div>
  );
};

export default Browse;
