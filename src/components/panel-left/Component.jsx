import {Button, Card} from 'react-bootstrap';

import './styles.css';

const PanelLeft = (props) => {
  const variant = 'Danger';

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
    const cardFirst = document.querySelector('.card-first .card-body');
    const cardSecond = document.querySelector('.card-second');

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
    <div id="panel-left">
        <div className="but-close" onClick={togglePanel}>X</div>
        {props.content}
        
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          className="mb-0 card-first"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body className='open'>
            <Card.Title>{variant} Card Title 1 </Card.Title>
            <Card.Text>

            </Card.Text>
          </Card.Body>
        </Card>

        <Button 
          id="but-genres"
          className='m-0'
          onClick={toggleCard}
        >
          Buton
        </Button>

        <Card
          bg={variant.toLowerCase()}
          key={variant + '2'}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          className="m-0 card-second close"
        >
          <Card.Body>
            <Card.Title>{variant} Card Title 2 </Card.Title>
            <Card.Text>

            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
}

export default PanelLeft;