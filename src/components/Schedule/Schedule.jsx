import { useEffect, useState } from 'react'
import * as eventsAPI from '../../utilities/events-api'
import './Schedule.css'

export default function Schedule() {
    const [scheduledEvents, setScheduledEvents] = useState([]);
    const [showAllEvents, setShowAllEvents] = useState(false);

    useEffect(function () {
        async function getScheduledEvents() {
            const events = await eventsAPI.getAllEvents();
            setScheduledEvents(events);
        }
        getScheduledEvents();
    }, []);

    const visibleEvents = showAllEvents ? scheduledEvents : scheduledEvents.slice(0, 6);

    return (
        <section className='Schedule'>
            <h2 className='sched-h2'>Event Schedule</h2>
            <div className='sched-h2-line'></div>
            <ul className='event-list'>
                {visibleEvents.map((event) => (
                    <a key={event._id} href="#" className='ei-a'>
                        <li key={event._id} className='event-item'>
                            <div className='ei-date'>{new Date(event.date).toLocaleDateString('en-US', { day: 'numeric', month: 'numeric' })}</div>
                            <div className='ei-title'>{event.title}</div>
                            <div className='ei-description'>{event.description}</div>
                            {/* <div>Price: {event.price === 0 ? 'Free Admission' : `${event.price}`} </div> */}
                        </li>
                    </a>
                ))}
            </ul>
            {showAllEvents ? (
                <button className='toggle-events-button read-more-light' onClick={() => setShowAllEvents(false)}>
                    View Less
                </button>
            ) : (
                scheduledEvents.length > 6 && (
                    <button className='toggle-events-button read-more-light' onClick={() => setShowAllEvents(true)}>
                        View More
                    </button>
                )
            )}
        </section>
    );
}
