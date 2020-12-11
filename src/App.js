import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chats from './Chat.js';
import Login from "./Login.js"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useStateValue } from './StateProvider';


function App() {
  const [{user}, dispatch] = useStateValue();
  
  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
      <div className="app_body">
      <Router>
      <Sidebar />
        <Switch> 
         <Route path="/rooms/:roomId">
         <Chats />
         </Route>
          <Route path="/">
            <Chats />
          </Route>
        </Switch>
      </Router>
      </div>
      )}
    </div>
  );
}

export default App;
