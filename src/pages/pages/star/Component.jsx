import { FaWikipediaW } from 'react-icons/fa';

import './styles.css';

const Component = () => {
    return (
        <>
        <h2>Piazolla</h2>
        <p>
            Astor Pantaleón Piazolla fue un músico re copado mal.
        </p>
        <p>
            Sus obras revolucionaron el tango tradicional en un nuevo estilo denominado tango de vanguardia o nuevo tango, incorporando elementos de la música académica, el jazz y el rock. 
        </p>
        <div>
            <a href="https://es.wikipedia.org/wiki/Astor_Piazzolla" target='_blank'>
                <FaWikipediaW/>
            </a>
        </div>
        </>
    );
};

const data = {
    title: 'Artist of the week',
    body: <Component/>,
}

export default data;