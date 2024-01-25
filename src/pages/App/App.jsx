import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'
import './App.css';

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Hero />
    </main>
  );
}

export default App;
{/* <AuthPage setUser={setUser}/> */}