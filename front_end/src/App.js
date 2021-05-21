
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Loginform from './component/Loginform';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './component/Navbar';

function App() {
  return (
      <div>
  
     
           <Router>
           <Navbar/>
            </Router>


  
      </div>
  );
}

export default App;
