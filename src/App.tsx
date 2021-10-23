import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import { userName } from './slices/user/userSlice';

function App() {
  const username = useAppSelector(userName);  

  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route exact path='/profile'>
        {!username ? <Redirect to='/' /> : <Profile />}
      </Route>
    </Switch>
  );
}

export default App;
