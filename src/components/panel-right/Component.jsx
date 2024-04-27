import { useContext }       from 'react';

import {  Button, 
          Card, 
          ListGroup}        from 'react-bootstrap';
import {  FaRegWindowClose,
          FaChevronLeft, 
          FaChevronRight }  from 'react-icons/fa';
import    YouTube           from 'react-youtube';

import    ContentContext    from 'context/content/Context';

import './styles.css';

const PanelRight = (props) => {
  const { isClosedRight, contentRight, player, changeIsClosedRight, changePlayer } = useContext(ContentContext);

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
      butClose.classList.remove('close');
      butClose.classList.add('open');
    } else {
      butClose.textContent = '<';
      butClose.classList.remove('open');
      butClose.classList.add('close');
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
      className={`m-0${isClosedRight? '' : ' open'}`}
      onClick={() => {changeIsClosedRight(true); togglePanel(); toggleButton();}}
    >
      &lt;
    </Button>
    <div id="panel-right" className={isClosedRight? "close" : "open"}>
        <div className="but-close" onClick={() => {changeIsClosedRight(true); togglePanel(); toggleButton();}}>
          <FaRegWindowClose/>
        </div>
        {props.content}
        
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          className="mb-0 card-first"
        >
          <Card.Header>{contentRight.title}</Card.Header>
          <Card.Body className='open'>
              {contentRight.body}
          </Card.Body>
        </Card>

        <Button 
          id="but-playlist"
          className='m-0'
          onClick={toggleCard}
        >
          Playlist
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
            

          </Card.Body>
        </Card>
    </div>
    </>
    
  );
}

/*<YouTube
              className="text-center"
              videoId={player.yt}
              title={`${player.artist} - ${player.song}`}
              opts={opts}
            />*/

export default PanelRight;