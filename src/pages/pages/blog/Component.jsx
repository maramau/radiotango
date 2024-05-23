import { useContext} from 'react';
import ContentContext from 'context/content/Context';

import { ListGroup } from "react-bootstrap";

import './styles.css';

const Component = () => {
    const { changeContentRight, changeIsClosedRight } = useContext(ContentContext);
    //const GMT = 'GMT-0300';
    const posts = [
        {
            date: '2024/05/22',
            name: 'Orígenes del tango',
            time: 7,
            href: 'Origins',
        },
    ];
    const ordered = posts.sort((a,b) => {return a.date > b.date;});

    const handleClick = (event) => {
        const target = event.currentTarget;
        const idxContentRight = target.dataset.href;

        changeContentRight(idxContentRight);
        changeIsClosedRight(false);
    };

    return (
        <>
        <ListGroup as="ul" variant="secondary">
            {ordered.map((post) => {
                const label = `${post.date} - ${post.name} (${post.time}min)`;
                const href = post.href;

                return (
                    <ListGroup.Item action variant="secondary" key={label} as="li" onClick={handleClick} data-href={href}>
                        {label}
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
        </>
    );
};

const data = {
    title: 'Blog',
    body: <Component/>
};

export default data;