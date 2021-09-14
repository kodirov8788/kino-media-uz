import "./App.css";
import HomePages from "./pages/HomePages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loginscreen from "./pages/Loginscreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from "./pages/profile/Profile";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        console.log(userAuth);
      } else {
      dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      {!user ? (
        <Loginscreen />
      ) : (
        <Router>
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/test">
              <h1>salommmmmm</h1>
            </Route>
            <Route path="/">
              <HomePages />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
