import {    useState, 
            useContext }    from 'react';

import Form                 from 'react-bootstrap/Form';

import ContentContext       from 'context/content/Context';

import './styles.css';

const Component = () => {
    const [checkedFull, setCheckedFull] = useState(false);

    const { showCanvas, changeShowCanvas } = useContext(ContentContext);

    const toggleFullscreen = () => {
        const elem = document.documentElement;

        if (checkedFull) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            
        } else {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
        }
        setCheckedFull(checkedFull => !checkedFull);
    };
    const toggleAnimation = () => {
        changeShowCanvas(!showCanvas);
    };

    return (
        <>
        <Form>
            <Form.Check
                type="switch"
                label="Fullscreen"
                onChange={toggleFullscreen}
            />
            <Form.Check
                type="switch"
                label="Background animation"
                onChange={toggleAnimation}
            />
        </Form>
        </>
    );
};

const data = {
    title: 'Mode',
    body: <Component/>
};

export default data;