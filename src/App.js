import './App.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import About from './pages/About'
import Page404 from './pages/Page404'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Nav from './shared/layout/Nav';
import Footer from './shared/layout/Footer';
import Detail from './pages/Detail';
function App() {

  const data = [
    {
      id: 1,
      src: 'images/slide-1.jpg',
      title: 'Lorem ipsum dolor sit amet',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturultricies gravida nulla fermentum suscipit.'
    },
    {
      id: 2,
      src: 'images/slide-2.jpg',
      title: 'Lorem ipsum dolor sit amet',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturultricies gravida nulla fermentum suscipit.'
    },
    {
      id: 3,
      src: 'images/slide-3.jpg',
      title: 'Lorem ipsum dolor sit amet',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturultricies gravida nulla fermentum suscipit.'
    },
    {
      id: 4,
      src: 'images/slide-4.jpg',
      title: 'Lorem ipsum dolor sit amet',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturultricies gravida nulla fermentum suscipit.'
    },
  ] 

  return (
    <>
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home data={data} />}></Route>
          <Route path='blog' element={<Blog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='details' element={<Detail />}></Route>
          <Route path='*'  element={<Page404/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
