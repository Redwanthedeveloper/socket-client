import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import SignupScreen from './screens/SignupScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/signup' component={SignupScreen} />
        <Route path='*' component={NotFoundScreen} />
      </Switch>
    </Router>
  );
}

export default App;
