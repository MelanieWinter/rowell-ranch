import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar'
import Splash from '../Splash/Splash';
import AuthPage from '../AuthPage/AuthPage';

import './App.css';

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {user ? (
        <Splash user={user} setUser={setUser} />
        ) : (
        <Splash user={user} setUser={setUser} />
      )}
    </main>
  );
}

export default App;
