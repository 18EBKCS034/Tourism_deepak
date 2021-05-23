import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import {BrowserRouter as Router} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

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
          <Header />
      </div>
    </Router>    
  );
}

export default App;
