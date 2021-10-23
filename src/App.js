import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Adopt from "./components/Adopt/Adopt";
import DogDetails from "./components/Dog/DogDetails";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/adopt" exact component={Adopt}></Route>
        <Route path="/adopt/:id"  component={DogDetails}></Route>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="*" component={()=>"404 NOT FOUND"}></Route>
        <Home />
        {/* <MyPets /> */}
        <Adopt />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
