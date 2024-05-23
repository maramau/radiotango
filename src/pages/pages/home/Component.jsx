import { ListGroup } from "react-bootstrap";

import './styles.css';

const Component = () => {
    return (
        <>
        <h2>¡Bienvenido al apasionante mundo del tango!</h2>
        <br/>
        <h5>
            Siente el ritmo, explora la historia y descubre la magia
        </h5>
        <p>
            En este espacio virtual te invitamos a sumergirte en el universo del tango, un baile y una música que han cautivado al mundo entero con su pasión, elegancia y profunda expresión.
        </p>
        
        <h5>
            Navega por nuestra amplia colección de playlists
        </h5>
        <p>
            Te ofrecemos una experiencia musical única, donde podrás disfrutar de una selección cuidadosamente curada de tangos clásicos y modernos.
        </p>

        <h5>
            Explora por artistas, épocas y subgéneros
        </h5>
        <p>
            Adéntrate en la rica historia del tango y descubre a los grandes maestros que han dado forma a este arte.
        </p>

        <h5>
            Aprende sobre los diferentes estilos y expresiones del tango
        </h5>
        <p>
            Desde el tango tradicional hasta las vanguardistas fusiones contemporáneas, aquí encontrarás una amplia variedad de estilos para deleitarte.
        </p>

        <h5>
            Prepárate para ser cautivado
        </h5>
        <p>
            Deja que el ritmo te envuelva, siente la emoción en cada paso y descubre la magia que ha hecho del tango un ícono cultural a nivel mundial.
        </p>

        <h5>
            ¡Empieza tu viaje musical ahora mismo!
        </h5>
        </>
    );
};

const data = {
    title: 'Inicio',
    body: <Component/>
};

export default data;