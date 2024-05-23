import { useContext} from 'react';
import ContentContext from 'context/content/Context';

import { ListGroup } from "react-bootstrap";

import './styles.css';

const Component = () => {
    const { changeContentRight, changeIsClosedRight } = useContext(ContentContext);
    const GMT = 'GMT-0300';
    const posts = [
        {
            name: '2024/05/22 - Orígenes del tango',
            href: 'Origins',
            date: new Date(`2024/05/22 ${GMT}`),
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
                const label = post.name;
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