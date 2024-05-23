//import { useContext }     from 'react';

import Social             from 'components/social/Component';

//import ContentContext     from 'context/content/Context';

//import {  FaPlusCircle,
//          FaMinusCircle } from 'react-icons/fa';

import { //Button,
        Stack }           from 'react-bootstrap';

//import { Tooltip }        from 'react-tooltip';

import './styles.css';

const BarRight = () => {
//  const { changeContentRight } = useContext(ContentContext);

  // Map zoom
  /*<div className="stack-section text-center">
                <hr/>
                <Button variant="primary">
                  <FaPlusCircle/>
                </Button>
                <Button variant="primary">
                  <FaMinusCircle/>
                </Button>
            </div>*/
  return (
    <div className="stack-container right">
        <Stack gap={2} className="col-md-5 mx-auto stack-right" style={{justifyContent: "space-between"}}>
            <div className="stack-section text-center">
              <Social/>
            </div>
            
        </Stack>
    </div>
  );
}

export default BarRight;