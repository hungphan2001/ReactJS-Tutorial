import axios from 'axios';
import Header from './shared/layout/Header';
import User from './pages/User';
function App() {

  return (
    <>
      <div id="wrapper" className="container">
        <Header />
        <User/>
      </div>


    </>
  );
}

export default App;
