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
    const handleClick = (event) => {
        const target = event.currentTarget;
        const idxContentRight = target.dataset.href;
    
        changeContentRight(idxContentRight);
        changeIsClosedRight(false);
    };

    return (
        <>
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
        </>
    );
};

const data = {
    title: 'Genres',
    body: <Component/>
};

export default data;