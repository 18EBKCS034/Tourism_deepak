import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { baseURL } from "./config";


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
    <Router>
    <div className="App">
      <Home />
    </div>
    </Router>
  );
}

export default App;
