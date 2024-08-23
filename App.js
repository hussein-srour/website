import React, { useEffect, useState } from 'react';
import UserList from './UserList';
import './App.css'; 

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="App">
      <h1>User List</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
