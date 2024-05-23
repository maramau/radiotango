import { useContext, useState, useRef } from 'react';
import ContentContext from 'context/content/Context';

import { Form, ListGroup } from "react-bootstrap";

import './styles.css';

const Component = () => {
    const [search, setSearch] = useState('');
    const ref = useRef(null);
    const { changeContentRight, changeIsClosedRight } = useContext(ContentContext);
    const artists = [
        {
            name: 'Sciammarella Tango',
            href: 'Sciammarella',
            genre: 'neo',
        },
        {
            name: 'Piazolla',
            href: 'Piazolla',
            genre: 'modern',
        },
        {
            name: 'Test',
            href: 'test',
            genre: 'classic',
        },
    ];
    //const neoArtists = artists.filter((x) => {return x.genre === 'neo'});
    //const modernArtists = artists.filter((x) => {return x.genre === 'modern'});
    //const classicArtists = artists.filter((x) => {return x.genre === 'classic'});
    const filtered = search === ''? artists : artists.filter((x) => {return x.name.toLowerCase().includes(search)});
    const ordered = filtered.sort((a,b) => {return a.name > b.name;});

    const handleClick = (event) => {
        const target = event.currentTarget;
        const idxContentRight = target.dataset.href;

        changeContentRight(idxContentRight);
        changeIsClosedRight(false);
    };

    return (
        <>
        <p>
            La siguiente es una lista no exhaustiva de los distintos artistas relacionados al tango.
        </p>
        <Form.Control
          autoFocus
          className="my-2"
          onChange={(e) => {setSearch(e.currentTarget.value.toLowerCase())}}
          ref={ref}
        />
        <ListGroup as="ul" variant="secondary">
            {ordered.map((artist) => {
                const label = artist.name;
                const href = artist.href;

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
    title: 'Artists',
    body: <Component/>
};

export default data;