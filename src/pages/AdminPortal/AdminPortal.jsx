import Schedule from '../../components/Schedule/Schedule';
import Hero from '../../components/Hero/Hero';
import './AdminPortal.css'

export default function AdminPortal() {
    return (
        <section className='AdminPortal'>
            <div className='hero-div'>
                <Hero />
            </div>
            <div className='event-schedule'>
                <Schedule />
            </div>
            
            
        </section>
    )
}

// TODO: Create events
// TODO: Update events
// TODO: Delete events