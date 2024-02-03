import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';
import Splash from '../Splash/Splash';
import AdminPortal from '../AdminPortal/AdminPortal';
import TicketStore from '../TicketStore/TicketStore';
import UserPortal from '../UserPortal/UserPortal';
import AboutUs from '../AboutUs/AboutUs';
import GetInvolved from '../GetInvolved/GetInvolved';
import Events from '../Events/Events';
import Sponsors from '../Sponsors/Sponsors'
import ResponsiveNavBar from '../../components/ResponsiveNavBar/ResponsiveNavBar';
import * as eventsAPI from '../../utilities/events-api'

import './App.css';

function App() {
  const [user, setUser] = useState(getUser())
  const [scheduledEvents, setScheduledEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(function() {
      async function getScheduledEvents() {
          const events = await eventsAPI.getAllEvents();
          setScheduledEvents(events);
      }
      getScheduledEvents();
  }, []);

  const isAdmin = () => {
    return user && user.admin;
  };

  return (
    <main className="App">
      {window.innerWidth < 600 ? (
        <ResponsiveNavBar user={user} setUser={setUser} />
      ) : (
        <NavBar user={user} setUser={setUser} />
      )}
      <Routes>
      <Route
          path="/admin-portal"
          element={isAdmin() ? <AdminPortal scheduledEvents={scheduledEvents} setScheduledEvents={setScheduledEvents} /> : <Navigate to="/" />}
        />
        <Route
          path="/user-portal"
          element={!isAdmin() ? <UserPortal user={user} scheduledEvents={scheduledEvents} setScheduledEvents={setScheduledEvents} /> : <Navigate to="/" />}
        />
        <Route
          path="/ticket-store"
          element={!isAdmin() ? <TicketStore scheduledEvents={scheduledEvents} /> : <Navigate to="/" />}
        />
        <Route
          path="/about-us"
          element={<AboutUs />}
        />
        <Route
          path="/get-involved"
          element={<GetInvolved />}
        />
        <Route
          path="/events"
          element={<Events />}
        />
        <Route
          path="/sponsors"
          element={<Sponsors />}
        />
        <Route 
          path="/" 
          element={<Splash user={user} setUser={setUser} scheduledEvents={scheduledEvents} />} />
      </Routes>
      <Footer user={user} />
    </main>
  );
}

export default App;
