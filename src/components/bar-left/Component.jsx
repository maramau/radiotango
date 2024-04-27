import {  useContext,
          useRef }    from 'react';

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

import { Tooltip }    from 'react-tooltip';

import './styles.css';

const BarLeft = () => {
  const { changeContentLeft } = useContext(ContentContext);

  const ref = useRef(null);

  return (
    <div className="stack-container">
        <Stack gap={2} className="col-md-5 mx-auto stack-left" style={{justifyContent: "space-between"}}>
            <div className="stack-section text-center">
                <Button 
                  variant="secondary"
                  data-tooltip-id="tt-home"
                  data-tooltip-content="Home"
                  data-tooltip-place="right"
                  onClick={() => {changeContentLeft('Home');}}
                >
                  <FaHome/>
                </Button>
                <Tooltip id="tt-home" />

                <Button 
                  variant="secondary"
                  data-tooltip-id="tt-genres"
                  data-tooltip-content="Genres"
                  data-tooltip-place="right"
                  onClick={() => {changeContentLeft('Genres');}}
                >
                  <FaMusic/>
                </Button>
                <Tooltip id="tt-genres" />

                <Button 
                  variant="secondary"
                  data-tooltip-id="tt-shop"
                  data-tooltip-content="Shop"
                  data-tooltip-place="right"
                  onClick={() => {changeContentLeft('Shop');}}
                >
                  <FaShoppingCart/>
                </Button>
                <Tooltip id="tt-shop" />
                <hr/>
            </div>
            <div className="stack-section text-center" ref={ref}>
              <Button 
                variant="primary"
                data-tooltip-id="tt-star"
                data-tooltip-content="Week's artist"
                data-tooltip-place="right"
                onClick={() => {changeContentLeft('Week');}}
              >
                <FaStar/>
              </Button>
              <Tooltip id="tt-star" />
            </div>
            <div className="stack-section text-center">
                <hr/>
                <Button 
                  variant="secondary"
                  data-tooltip-id="tt-atlas"
                  data-tooltip-content="Atlas"
                  data-tooltip-place="right"
                  onClick={() => {changeContentLeft('Atlas');}}
                >
                  <FaAtlas/>
                </Button>
                <Tooltip id="tt-atlas" />
                
                <Button
                  variant="secondary"
                  data-tooltip-id="tt-info"
                  data-tooltip-content="Info"
                  data-tooltip-place="right"
                  onClick={() => {changeContentLeft('Info');}}
                >
                  <FaInfo/>
                </Button>
                <Tooltip id="tt-info" />

                <Button 
                  variant="secondary"
                  data-tooltip-id="tt-mode"
                  data-tooltip-content="Change mode"
                  data-tooltip-place="right"
                  onClick={() => {changeContentLeft('Mode');}}>
                  <FaExchangeAlt/>
                </Button>
                <Tooltip id="tt-mode" />
            </div>
            
        </Stack>
    </div>
  );
}

export default BarLeft;