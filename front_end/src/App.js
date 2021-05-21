
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Loginform from './component/Loginform';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './component/Navbar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      if(localStorage.getItem("LOGIN_ID") == 'no'){
      }else{
        var id = localStorage.getItem("LOGIN_ID");
        dispatch({type: "LOGIN_TRUE"});
        dispatch({type: "LOGGEDIN",payload: id });
      }
  }, [])

  return (
      <div>
  
     
           <Router>
           <Navbar/>
            </Router>


  
      </div>
  );
}

export default App;
