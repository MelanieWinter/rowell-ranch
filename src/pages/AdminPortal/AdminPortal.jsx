// import Schedule from '../../components/Schedule/Schedule';
import Hero from '../../components/Hero/Hero';
import './AdminPortal.css'
import EventTable from '../../components/EventTable/EventTable';

export default function AdminPortal({ scheduledEvents, setScheduledEvents }) {
    return (
        <section className='AdminPortal'>
            <Hero
                title='Admin Portal'
                orange='Rowell Ranch Rodeo'
                white='9725 Dublin Canyon Rd, Castro Valley, CA 94552'
                backgroundImage={'./assets/splash-hero.jpeg'}
            />
            <div className='event-table'>
                <EventTable scheduledEvents={scheduledEvents} setScheduledEvents={setScheduledEvents} />
            </div>
        </section>
    )
}

// TODO: Create events
// TODO: Update events
// TODO: Delete events