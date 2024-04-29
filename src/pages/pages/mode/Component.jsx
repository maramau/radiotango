import {    useState,
            useRef,
            useEffect,
            useContext }    from 'react';

import Form                 from 'react-bootstrap/Form';

import ContentContext       from 'context/content/Context';

import './styles.css';

const Component = () => {
    const ref = useRef(null);
    const [checkedFull, setCheckedFull] = useState(false);

    const { showCanvas, changeShowCanvas } = useContext(ContentContext);

    const toggleFullscreen = () => {
        const elem = document.documentElement;

        if (checkedFull) {
            if (document.exitFullscreen) {
                // Catch error when entering with F11 and exiting with button
                document.exitFullscreen()
                .catch((e) => {
                    console.error(e);
                    setCheckedFull(true);
                    ref.current.checked = true;
                });
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
        ref.current.checked = !checkedFull;
        setCheckedFull(checkedFull => !checkedFull);
    };
    const toggleAnimation = () => {
        changeShowCanvas(!showCanvas);
    };


    useEffect( () => {
        const f = (e) => {
            const isFullscreen = window.fullScreen;
    
            if (e.key === 'F11' && ref && ref.current) {
                ref.current.checked = isFullscreen;
                setCheckedFull(isFullscreen);
            }
        };

        document.addEventListener('keyup', f);

        return () => {document.removeEventListener('keyup', f)};
    }, []);
    
   

    return (
        <>
        <Form>
            <Form.Check
                ref={ref}
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