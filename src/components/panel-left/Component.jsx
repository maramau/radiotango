import { useContext }       from 'react';
import ContentContext       from 'context/content/Context';

import {Button, Card}       from 'react-bootstrap';

import { FaRegWindowClose } from "react-icons/fa";

import './styles.css';

const PanelLeft = (props) => {
  const { contentLeft, isClosedLeft, changeIsClosedLeft } = useContext(ContentContext);

  const togglePanel = () => {
    const panel = document.querySelector('#panel-left');
    
    if (panel.classList.contains('open')) {
      panel.classList.remove('open');
      panel.classList.add('close');
    } else {
      panel.classList.remove('close');
      panel.classList.add('open');
    }
  };
  
  const toggleCard = () => {
    const cardFirst = document.querySelector('#panel-left .card-first .card-body');
    const cardSecond = document.querySelector('#panel-left .card-second');

    if (cardFirst.classList.contains('open')) {
      cardFirst.classList.remove('open');
      cardFirst.classList.add('close');

      cardSecond.classList.remove('close');
      cardSecond.classList.add('open');
    } else {
      cardFirst.classList.remove('close');
      cardFirst.classList.add('open');

      cardSecond.classList.remove('open');
      cardSecond.classList.add('close');
    }
  };
  
  return (
    <div id="panel-left" className={isClosedLeft? "close" : "open"}>
        <div className="but-close" onClick={() => {changeIsClosedLeft(true); togglePanel();}}>
          <FaRegWindowClose/>
        </div>
        {props.content}
        
        <Card className="mb-0 card-first">
          <Card.Header>{contentLeft.title}</Card.Header>
          <Card.Body className='open'>
            {contentLeft.body}
          </Card.Body>
        </Card>

        <Button 
          id="but-genres"
          className='m-0'
          onClick={toggleCard}
        >
          Buton
        </Button>

        <Card className="m-0 card-second close">
          <Card.Body>
            <Card.Text>

            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
}

export default PanelLeft;