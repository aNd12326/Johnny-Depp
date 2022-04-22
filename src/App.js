import './App.css';
import Navbar from './components/navbar/Navbar';
import {  Route } from "react-router-dom";
import Testimony from './components/character/Testimony';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Movies from './components/movies/Movies';

function App() {
  return (
    <div className="App">
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={Testimony} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/movies:id' component={Movies} />
    </div>
  );
}

export default App;
