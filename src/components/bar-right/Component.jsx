import { useContext }     from 'react';

import ContentContext     from 'context/content/Context';

import {  FaShareAlt,
          FaPlusCircle,
          FaMinusCircle } from 'react-icons/fa';

import Button             from 'react-bootstrap/Button';
import Stack              from 'react-bootstrap/Stack';

import './styles.css';

const BarRight = () => {
  const { changeContentRight } = useContext(ContentContext);

  return (
    <div className="stack-container right">
        <Stack gap={2} className="col-md-5 mx-auto stack-right" style={{justifyContent: "space-between"}}>
            <div className="stack-section text-center">
                <Button variant="primary" onClick={() => {changeContentRight('Bebop')}}>
                  <FaShareAlt/>
                </Button>
                <hr/>
            </div>
            <div className="stack-section text-center">
                <hr/>
                <Button variant="primary">
                  <FaPlusCircle/>
                </Button>
                <Button variant="primary">
                  <FaMinusCircle/>
                </Button>
            </div>
            
        </Stack>
    </div>
  );
}

export default BarRight;