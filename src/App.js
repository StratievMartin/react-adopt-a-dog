import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile";
import Adopt from "./pages/Adopt/Adopt";
import DogDetails from "./pages/DogDetails/DogDetails";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { useState } from "react";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./utils/firebase"
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (user) => {
    setUser(user);
    console.log();
  });
  return (
    <div className="App">
      <Nav props={user} />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route props={user} path="/profile" component={Profile}></Route>
        <Route path="/adopt" exact component={Adopt}></Route>
        <Route path="/adopt/:id"  component={DogDetails}></Route>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="*" component={()=>"404 NOT FOUND"}></Route>
        <Home />
        {/* <Profile /> */}
        <Adopt />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
