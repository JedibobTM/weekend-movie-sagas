import './Details.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Details() {

    return (
        <>
            <h1>Details Page</h1>
            <Link to="/">
                Home
            </Link>
        </>
    );
}