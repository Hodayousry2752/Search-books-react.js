import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Route,Routes} from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Search from './Search/Search';
import Book from './Book/Book';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <>
      <div>
        <div className="App">
          <Navbar/>
          <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='book' element={<Book/>}>
               <Route path=':id' element={<Book/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>

          </Routes>
          </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
