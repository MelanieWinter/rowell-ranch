import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';
import Splash from '../Splash/Splash';
import AdminPortal from '../AdminPortal/AdminPortal';
import TicketStore from '../TicketStore/TicketStore';
import * as eventsAPI from '../../utilities/events-api'

import './App.css';

function App() {
  const [user, setUser] = useState(getUser())
  const [scheduledEvents, setScheduledEvents] = useState([]);

  useEffect(function () {
      async function getScheduledEvents() {
          const events = await eventsAPI.getAllEvents();
          setScheduledEvents(events);
      }
      getScheduledEvents();
  }, []);

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/ticket-store" element={<TicketStore scheduledEvents={scheduledEvents} />} />
            <Route path="/" element={<Splash user={user} setUser={setUser} scheduledEvents={scheduledEvents} />} />
          </Routes>
      <Footer />
    </main>
  );
}

export default App;
