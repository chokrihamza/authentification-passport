import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Signup from './Componants/Signup';
import Signin from './Componants/Signin';
import Profile from './Componants/Profile';
import Welcom from './Componants/Welcom';
import NavbarPage from './Componants/Layout/Navbar';
import Sidebare from './Componants/Layout/Sidebar';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={NavbarPage} />
        <Route exact path='/' component={Welcom} />
        <Route path='/register' component={Signup} />
        <Route path='/login' component={Signin} />
        <Route path='/profile' component={Profile} />





      </Switch>

    </BrowserRouter>

  )

}

export default App;
