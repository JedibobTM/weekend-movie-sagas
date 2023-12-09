import './Details.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';

export default function Details() {

    const dispatch = useDispatch();

    const movie = useSelector(store => store.selectedMovie);
    const displayGenre = useSelector(store => store.genres)
    console.log(movie, 'is the selected movie')
    return (
        <>
            <h1 data-testid="movieDetails">Details Page</h1>
            <Link to="/">
                <h3 data-testid="toList">Back to movie list</h3>
            </Link>
            <div data-testid='movieDetail'>
                <h1>{movie.title}</h1>
                <img src={movie.poster}></img>
                <p>{movie.description}</p>
                <p>{displayGenre}</p>
            </div>

            
        </>
    );
}