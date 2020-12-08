import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Signup from './Componants/Signup';
import Signin from './Componants/Signin';
import Profile from './Componants/Profile';
import Welcom from './Componants/Welcom';
import Logout from './Componants/Logout';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Welcom} />
        <Route path='/register' component={Signup} />
        <Route path='/login' component={Signin} />
        <Route path='/profile' component={Profile} />
        <Route path='/logout' component={Logout} />




      </Switch>

    </BrowserRouter>

  )

}

export default App;
