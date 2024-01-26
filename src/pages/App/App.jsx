import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'
import NumberCarousel from '../../components/NumberCarousel/NumberCarousel';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Hero />
      <section className='foreground-1'>
        <NumberCarousel />
      </section>
      <section className='foreground-2'>
        <VideoPlayer />
      </section>
    </main>
  );
}

export default App;
{/* <AuthPage setUser={setUser}/> */}