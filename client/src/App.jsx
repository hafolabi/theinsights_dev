import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      
      <Switch>
        <Route exact path="/">
         {user ? <Home /> : <Register />}
        </Route>
        
        <Route exact path="/login">
         {user ? <Redirect to='/' /> : <Login />}
        </Route>

        <Route exact path="/register">
        {user ? <Redirect to='/' /> : <Register />}
        </Route>

        <Route exact path="/profile/:username">
        {user ? <Profile /> : <Register />}
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
