import { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.svg';

import axios from 'axios';


function App() {

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);

  const getUsersList = async () => {
    setLoading(true);
    try {
      const url= process.env.REACT_APP_BACKEND_URL;
      console.log(url);
      console.log(process.env)
      const {data} = await axios.get(url);
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      
    }
  }

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <div className="App">
      {loading && <img className="App-logo" src={logo} alt="loading" />}
      {users && users.length > 0 && (
        <table className="users-table">
          <thead>
            <tr>
              <th>first name</th>
              <th>last name</th>
              <th>email name</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => {
                return (
                  <tr>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                  </tr>  
                )
              })
            }
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
