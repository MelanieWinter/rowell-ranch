import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';
import Splash from '../Splash/Splash';
import AdminPortal from '../AdminPortal/AdminPortal';

import './App.css';

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
        {user ? (
          <Routes>
            <Route path="/*" element={<AdminPortal />} />
          </Routes>
        ) : (
          <Splash user={user} setUser={setUser} />
        )}
      <Footer />
    </main>
  );
}

export default App;
