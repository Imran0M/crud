import './App.css';
import UserPage from './Components/UserPage';
import { Switch, Route } from 'react-router-dom';
import { Data } from './Components/Data/Data';
import { useState } from 'react';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';


function App() {
  const [user, setUser] = useState(Data)
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <UserPage
            user={user}
            setUser={setUser}
          />
        </Route>

        <Route path='/add/user'>
          <AddUser
            user={user}
            setUser={setUser} />
        </Route>
        <Route path='/edit/:id'>
          <EditUser 
           user={user}
           setUser={setUser} 
          />
        </Route>



      </Switch>

    </div>
  );
}

export default App;
