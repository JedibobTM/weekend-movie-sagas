import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './MovieList.css'

function MovieList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  const genres = useSelector(store => store.genres)

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const handleSubmit = (movie) => {
    console.log('Handling Submit');
    dispatch({
      type: 'SELECT_MOVIE',
      payload: movie
    })
    dispatch({
        type: 'GET_GENRES',
        payload: movie.id
    })
    console.log('Payload:', movie);
    history.push('/details');
  }

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img onClick={() => handleSubmit(movie)} data-testid="toDetails" src={movie.poster} alt={movie.title}/>
            </div>
          );
        })}
      </section>
    </main>

  );
}


export default MovieList;
