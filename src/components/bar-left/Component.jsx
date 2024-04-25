import {  useContext,
          useState,
          useRef } from 'react';

import {  FaHome, 
          FaStar,
          FaMusic, 
          FaShoppingCart, 
          FaAtlas, 
          FaExchangeAlt, 
          FaInfo }    from "react-icons/fa";

import ContentContext from 'context/content/Context';

import {  Button,
          Stack }     from 'react-bootstrap';

import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

import './styles.css';

const BarLeft = () => {
  const { changeContentLeft } = useContext(ContentContext);

  const [overlay, setOverlay] = useState({});
  const ref = useRef(null);

  const handleClick = (e) => {
    const oldOverlay = {
      ...overlay
    };
    const newOverlay = {
      show: oldOverlay.target !== e.target || !overlay.show,
      target: e.currentTarget,
      text: e.currentTarget.dataset.tooltip,
    };

    setOverlay(newOverlay)
  };

  const renderTooltip = (props) => 
  {console.log(props)
    return (
    <Tooltip id="button-tooltip" {...props}>
      {props.text}
    </Tooltip>
  )};

  return (
    <div className="stack-container">
        <Stack gap={2} className="col-md-5 mx-auto stack-left" style={{justifyContent: "space-between"}}>
            <div className="stack-section text-center">
                <Button variant="secondary" onClick={() => {changeContentLeft('Home');}}>
                  <FaHome/>
                </Button>
                <Button variant="secondary" onClick={() => {changeContentLeft('Genres');}}>
                  <FaMusic/>
                </Button>
                <Button variant="secondary">
                  <FaShoppingCart/>
                </Button>
                <hr/>
            </div>
            <div className="stack-section text-center" ref={ref}>
              <Button variant="primary" onClick={handleClick} data-tooltip="Week's Star">
                <FaStar/>
              </Button>
              <Button variant="primary" onClick={handleClick} data-tooltip="Atlas">
                <FaAtlas/>
              </Button>

              <Overlay
                placement="right"
                container={ref}
                show={overlay.show}
                target={overlay.target}
                trigger="hover"
              >
                <Tooltip id="button-tooltip">
                  {overlay.text}
                </Tooltip>
              </Overlay>
            </div>
            <div className="stack-section text-center">
                <hr/>
                <Button variant="secondary">
                  <FaAtlas/>
                </Button>
                <Button variant="secondary">
                  <FaInfo/>
                </Button>
                <Button variant="secondary" onClick={() => {changeContentLeft('Mode');}}>
                  <FaExchangeAlt/>
                </Button>
            </div>
            
        </Stack>
    </div>
  );
}

export default BarLeft;