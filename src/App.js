import { Provider } from 'react-redux';
import './App.css';
import Down from './components/Down';
import Up from './components/Up';
import store from './redux/store'
function App() {

  return (
    <>
       <Provider store={store}>
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-3 col-md-3 col-sm-8 col-8">
             <Up></Up>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-8 col-8">
            <Down></Down>
            </div>
        </div>
    </div>
    </Provider>
    </>
  );
}

export default App;
