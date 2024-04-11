import {Row, Col, Container} from 'react-bootstrap';

import './styles.css';

const About = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col className="p-0 m-0" xs={12} sm={12} md={9} lg={8}>
                        <div id="container-video">
                            <div id="overlay-shape">
                                <div id="overlay-text">
                                    <video 
                                        autoPlay={false}
                                        loop
                                        poster="./img/poster.webp"
                                        src="./videos/presentation.mp4" 
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="p-0 m-0" xs={12} sm={12} md={3} lg={4}>
                        <div className="text-white p-2">
                            <p>
                                Creado hacia fines de 1950 en la ciudad de Bahía Blanca por el maestro José Luis Ramírez Urtasun, a quien sucediera en 1969 - tras su fallecimiento - su esposa, Juliana Blasoni. Desde abril de 1988 es su director titular el maestro Carmelo C. Fioriti. Desde su primer concierto en septiembre de 1951, ha desarrollado una intensa labor artística difundiendo la música coral universal, ofreciendo nunmerosos conciertos en casi todas las provincias del país y representando a la Argentina en el exterior, bajo el lema "FRATRES IN CANTU" - Hermanos en el Canto.
                            </p>
                            <p>
                                Merecen destacarse las actuaciones en el Teatro Colón de Buenos Aires (2004) así como en España y Chile. Ha compartido escenario con prestigiosos coros nacionales y extranjeros e intervenido en numerosos festivales corales, organizando en 1963 el IVº Festival Argentino de Coros Universitarios y en 1973 el Encuentro Nacional de Coros "Fratres in Cantu".
                            </p>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        
        </>
    );
};

export default About;