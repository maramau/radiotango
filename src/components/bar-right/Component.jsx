import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import './styles.css';

const BarRight = () => {
  return (
    <div className="stack-container right">
        <Stack gap={2} className="col-md-5 mx-auto stack-right" style={{justifyContent: "space-between"}}>
            <div className="stack-section text-center">
                <Button variant="primary">Home</Button>
                <Button variant="primary">Shop</Button>
                <hr/>
            </div>
            <div className="stack-section text-center">
                <hr/>
                <Button variant="primary">Abou</Button>
                <Button variant="primary">Mode</Button>
            </div>
            
        </Stack>
    </div>
  );
}

export default BarRight;