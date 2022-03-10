import './App.css';
import WelcomeStep from './components/WelcomeStep';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import RegisterStep from './components/RegisterStep';
import LoginStep from './components/LoginStep';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={WelcomeStep} exact/>
          <Route path='/register' component={RegisterStep}/>
          <Route path='/login' component={LoginStep}/>
          <Route path='/dashboard' component={Dashboard}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
