import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/loginComponent/LoginComponent";
import SignUp from "./components/loginComponent/SignupComponent";
import IntrestComponent from './components/intrest/IntrestComponent';
import Nav1 from './components/navs/Nav1';
import Welcome from './components/welcome/Welcome';
import Error from './components/welcome/Error';
function App() {
  const [isLogin,setIsLogin]=useState(true);

  return (<Router>
    <div className="App">
      {!isLogin && <Nav1/>}
      
          <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/error" component={Error}/>
            <Route exact path='/chooseIntrest' component={IntrestComponent} />
            <Route exact path='/welcome' component={Welcome} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
       
    </div></Router>
  );
}

export default App;