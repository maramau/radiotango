import { ListGroup } from "react-bootstrap";

import './styles.css';

const Component = () => {
    return (
        <>
        <h2 className="welcome-title">Welcome to Jazzville!</h2>
        <p className="welcome-text">Your one-stop shop for free, high-quality jazz music. Explore a wide range of artists, styles, and eras, all at your fingertips. Let the smooth sounds of improvisation take you away.</p>
        </>
    );
};

const data = {
    title: 'Home',
    body: <Component/>
};

export default data;