import { useContext } from 'react';
import ContentContext from 'context/content/Context';

import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import './styles.css';

const BarLeft = () => {
  const { changeContentLeft } = useContext(ContentContext);

  return (
    <div className="stack-container">
        <Stack gap={2} className="col-md-5 mx-auto stack-left" style={{justifyContent: "space-between"}}>
            <div className="stack-section text-center">
                <Button variant="secondary">Home</Button>
                <Button variant="secondary" onClick={() => {changeContentLeft('Genres')}}>Genres</Button>
                <Button variant="secondary">Shop</Button>
                <hr/>
            </div>
            <div className="stack-section text-center">
                <hr/>
                <Button variant="secondary">Glo</Button>
                <Button variant="secondary">Abou</Button>
                <Button variant="secondary">Mode</Button>
            </div>
            
        </Stack>
    </div>
  );
}

export default BarLeft;