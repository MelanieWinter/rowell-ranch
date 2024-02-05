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
import * as ordersAPI from '../../utilities/orders-api';

import './App.css';

function App() {
  const [cart, setCart] = useState(null);
  const [user, setUser] = useState(getUser())
  const [scheduledEvents, setScheduledEvents] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const navigate = useNavigate();
  
  async function handleAddToOrder(eventId) {
    const updatedCart = await ordersAPI.addItemToCart(eventId);
    setCart(updatedCart);
  }
      
  useEffect(function() {
    async function getCart() {
        const cart = await ordersAPI.getCart();
        setCart(cart);
    }
    getCart();
}, [setCart]);

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

  async function handleChangeQty(eventId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(eventId, newQty);
    setCart(updatedCart);
}

async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
}

  return (
    <main className="App">
      <ResponsiveNavBar 
        user={user} 
        setUser={setUser} 
        scheduledEvents={scheduledEvents} 
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
        handleAddToOrder={handleAddToOrder}
        cart={cart}
        setCart={setCart}
      />

      <Routes>
      <Route
          path="/admin-portal"
          element={isAdmin() ? <AdminPortal scheduledEvents={scheduledEvents} setScheduledEvents={setScheduledEvents} /> : <Navigate to="/" />}
        />
        <Route
          path="/user-portal"
          element={user && !isAdmin() ? <UserPortal user={user} scheduledEvents={scheduledEvents} setScheduledEvents={setScheduledEvents} /> : <Navigate to="/" />}
        />
        <Route
          path="/ticket-store"
          element={user && !isAdmin() ? 
          <TicketStore  
          scheduledEvents={scheduledEvents} 
          handleChangeQty={handleChangeQty}
          handleCheckout={handleCheckout}
          handleAddToOrder={handleAddToOrder}
          cart={cart}
          setCart={setCart}
          /> : <Navigate to="/" />}
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
