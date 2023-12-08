import './Details.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Details() {

    return (
        <>
            <h1 data-testid="movieDetails">Details Page</h1>
            <Link to="/">
                <h3 data-testid="toList">Back to movie list</h3>
            </Link>
        </>
    );
}