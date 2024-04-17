import { useState } from 'react';
import Form from 'react-bootstrap/Form';

import './styles.css';

const Component = () => {
    const [checkedFull, setCheckedFull] = useState(false);

    const toggleFullscreen = (e) => {
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