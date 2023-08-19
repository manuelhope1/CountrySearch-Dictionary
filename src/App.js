
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Country from './components/Country';
import { useState } from 'react';
import Dictionary from './components/Dictionary';

function App() {
  const [showcoun, setshowcoun] = useState(true);
  const [showdic, setshowdic] = useState(false);
  const disabledButtonStyle = {
    outline: "2px solid black",
    outlineOffset: "2px",
  };
  function showDic() {
    setshowcoun(!showcoun);
    setshowdic(!showdic);
  }

  function showCoun() {
    setshowcoun(!showcoun);
    setshowdic(!showdic);
  };
  return (
    <Container className='body '>
      <Row className="bodyh">

        <Col md="4" className="box">
          <div className='sett'>
            <button className="c-but" onClick={showDic} disabled={showcoun} style={showcoun ? disabledButtonStyle : {}}>Country <i className='bx bx-flag'></i> </button> <button className='d-but' style={!showcoun ? disabledButtonStyle : {}} onClick={showCoun} disabled={!showcoun}>Dictonary <i className='bx bx-book-open'></i> </button>
          </div>
          <Country showcoun={showcoun} />

          <Dictionary showdic={showdic} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
