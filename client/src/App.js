import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Dashboard from './Pages/Dashboard';
import Welcom from './Pages/Welcom';
import NavbarPage from './Components/Layout/Navbar';
import Sidebare from './Components/Layout/Sidebar';




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={NavbarPage} />
        <Route exact path='/Dashboard' component={Dashboard} />
        <Route path='/register' component={Signup} />
        <Route path='/login' component={Signin} />
        {/* <Route path='/profile' component={Profile} /> */}
      </Switch>
    </BrowserRouter>

  )

}

export default App;
