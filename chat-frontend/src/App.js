import React from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Chat from './components/chat/Chat';
import ProtectedRoute from './components/router/ProtectedRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <ProtectedRoute exact path='/' component={Chat}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>

          <Route render={() => <h1>404 page not found</h1>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
