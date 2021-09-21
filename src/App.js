import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile';
import Adopt from './components/Adopt/Adopt'
import Footer from "./components/Footer/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/adopt" component={Adopt}></Route>
        <Home />
        {/* <MyPets /> */}
        <Adopt />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
