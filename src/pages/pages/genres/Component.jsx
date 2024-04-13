import { useContext } from 'react';
import ContentContext from 'context/content/Context';

import { ListGroup } from "react-bootstrap";

const Component = () => {
    const { changeContentRight, changeIsClosedRight } = useContext(ContentContext);
    const genres = [
        {
            name: 'Acid Jazz',
            href: 'Acid'
        },
        {
            name: 'Bebop',
            href: 'Bebop'
        },
    ];
    const otherGenres = [
        {
            name: 'Anime',
            href: 'Anime'
        },
        {
            name: 'Videogames',
            href: 'Videogames'
        },
    ];
    const handleClick = (event) => {
        const target = event.currentTarget;
        const idxContentRight = target.dataset.href;
    
        changeContentRight(idxContentRight);
        changeIsClosedRight(false);
    };

    return (
        <>
        <h1>Classic genres</h1>
        <p>
            The following are a non-complete list of the different jazz genres.
        </p>
        <ListGroup as="ol" numbered variant="primary">
            {genres.map((genre) => {
                const label = genre.name;
                const href = genre.href;

                return (
                    <ListGroup.Item action variant="primary" key={label} as="li" onClick={handleClick} data-href={href}>
                        {label}
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
        <hr/>
        <h1>Non classic genres</h1>
        <p>
            Nowadays, besides the traditional classification, we can find plenty of jazz on modern media. Like in the following list:
        </p>
        <ListGroup as="ol" numbered variant="primary">
            {otherGenres.map((genre) => {
                const label = genre.name;
                const href = genre.href;

                return (
                    <ListGroup.Item action variant="primary" key={label} as="li" onClick={handleClick} data-href={href}>
                        {label}
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
        </>
    );
};

const data = {
    title: 'Genres',
    body: <Component/>
};

export default data;