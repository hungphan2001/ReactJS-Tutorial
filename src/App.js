import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Thumbnail from './Thumbnail';
import Tiltle from './Tiltle';
import Description from './Description';
function App() {

  const [show, setShow] = useState(true);
  const handleClick = (show) => {
    setShow(show);
  }
  return (
    <>
      <div id="main">
        <div className="content-item">
          <Thumbnail></Thumbnail>
          <Tiltle
            show={show}
            handleClick={handleClick}
          ></Tiltle>
          <Description 
          show={show}
          handleClick={handleClick}></Description>
        </div>
      </div>
    </>
  )
}

export default App;
