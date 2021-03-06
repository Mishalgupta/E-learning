import Homepage from "./homepage"
import Login from "./login"
import './index.css';
import App1 from './Portal/App1';
import Register from "./register"
import Error from "./Pages/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import About from "./Pages/About";
import CoursePage from '../src/Portal/screens/course';

function App() {

  const [user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/portal">
            {
              user && user._id ? <App1 updateUser={updateUser} /> : <Login updateUser={updateUser} />
            }
          </Route>
          <Route exact path="/about" component={About}></Route>
          <Route path="/login">
            <Login updateUser={updateUser} />
          </Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/course/" component={CoursePage}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;