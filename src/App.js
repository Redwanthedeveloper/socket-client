import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import SignupScreen from './screens/SignupScreen';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import InboxScreen from './screens/InboxScreen';

function App() {
  const { userInfo } = useSelector((state) => state.userLogin);
  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={HomeScreen}>
          {userInfo && userInfo.userId && <Redirect to='/inbox' />}
        </Route>
        <Route path='/signup' component={SignupScreen}>
          {userInfo && userInfo.userId && <Redirect to='/inbox' />}
        </Route>
        <Route path='/inbox' component={InboxScreen}>
          {!userInfo && <Redirect to='/' />}
        </Route>
        <Route path='*' component={NotFoundScreen} />
      </Switch>
    </Router>
  );
}

export default App;
