import { useContext } from 'react';

import {  FaHome, 
          FaMusic, 
          FaShoppingCart, 
          FaAtlas, 
          FaExchangeAlt, 
          FaInfo }    from "react-icons/fa";

import ContentContext from 'context/content/Context';

import Button         from 'react-bootstrap/Button';
import Stack          from 'react-bootstrap/Stack';

import './styles.css';

const BarLeft = () => {
  const { changeContentLeft } = useContext(ContentContext);

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