import React, { useState, useEffect } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if(!response.ok){
        throw new Error('Data critical failure!');
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  let content = <p>Welcome To Our Page!</p>;
  if(movies.length > 0){ 
    content = <MoviesList movies={movies} />
  };
  if(error){
    content = <p>Found no Movies... So sorry</p>
  };
  if(isLoading){
    content = <p>loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;