// import Schedule from '../../components/Schedule/Schedule';
import Hero from '../../components/Hero/Hero';
import './AdminPortal.css'
import EventTable from '../../components/EventTable/EventTable';

export default function AdminPortal({ scheduledEvents, setScheduledEvents }) {
    return (
        <>
            <Hero
                    title='Admin Portal'
                    orange='Rowell Ranch Rodeo'
                    white='9725 Dublin Canyon Rd, Castro Valley, CA 94552'
                    backgroundImage={'./assets/splash-hero.jpeg'}
                />
            <section className='AdminPortal'>
                <div className='event-table'>
                    <EventTable scheduledEvents={scheduledEvents} setScheduledEvents={setScheduledEvents} />
                </div>
            </section>
        </>
    )
}