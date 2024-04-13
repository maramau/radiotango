import { useContext } from 'react';
import ContentContext from 'context/content/Context';

import {Button, Card, ListGroup} from 'react-bootstrap';
import YouTube from 'react-youtube';

import './styles.css';

const PanelRight = (props) => {
  const { contentRight, player, changePlayer } = useContext(ContentContext);

  const variant = 'Info';
  const opts = {
    height: "240",
    width: "480"
  };

  const togglePanel = () => {
    const panel = document.querySelector('#panel-right');
    
    if (panel.classList.contains('open')) {
      panel.classList.remove('open');
      panel.classList.add('close');
    } else {
      panel.classList.remove('close');
      panel.classList.add('open');
    }
  };

  const toggleButton = () => {
    const butClose = document.querySelector('#but-slide-panel');
    const panel = document.querySelector('#panel-right');

    if (panel.classList.contains('open')) {
      butClose.textContent = '>';
    } else {
      butClose.textContent = '<';
    }
  };

  const toggleCard = () => {
    const cardFirst = document.querySelector('#panel-right .card-first .card-body');
    const cardSecond = document.querySelector('#panel-right .card-second');

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
    <>
    <Button 
      id="but-slide-panel"
      bg="primary"
      className="m-0"
      onClick={() => {togglePanel(); toggleButton();}}
    >
      &lt;
    </Button>
    <div id="panel-right" className='close'>
        <div className="but-close" onClick={togglePanel}>X</div>
        {props.content}
        
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          className="mb-0 card-first"
        >
          <Card.Header>{contentRight.title}</Card.Header>
          <Card.Body className='open'>
            <Card.Title>{variant} Card Title 1 </Card.Title>
              {contentRight.body}
          </Card.Body>
        </Card>

        <Button 
          id="but-playlist"
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
            <ListGroup as="ol" numbered variant="primary" className="mb-2">
              {contentRight.playlist.map((song, idx) => {
                const label = `${song.artist} - ${song.song}`;

                return (
                  <ListGroup.Item action variant="primary" key={label} onClick={() => {changePlayer(song)}}>
                    {label}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
            <YouTube
              className="text-center"
              videoId={player.yt}
              title={`${player.artist} - ${player.song}`}
              opts={opts}
            />
          </Card.Body>
        </Card>
    </div>
    </>
    
  );
}

export default PanelRight;