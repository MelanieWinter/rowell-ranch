import { useEffect, useState } from 'react'
import * as eventsAPI from '../../utilities/events-api'
import NavLink from '../NavLink/NavLink';
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
                    <NavLink key={event._id} to="#" content={
                        <li key={event._id} className='event-item'>
                            <div className='ei-date'>{new Date(event.date).toLocaleDateString('en-US', { day: 'numeric', month: 'numeric' })}</div>
                            <div className='ei-title'>{event.title}</div>
                            <div className='ei-description'>{event.description}</div>
                        </li>
                    } />
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

            <div>
                <form action="">
                    <label htmlFor="">Title</label>
                    <input type="text" />
                    <label htmlFor="">Date</label>
                    <input type="text" />
                    <label htmlFor="">Price</label>
                    <input type="text" />
                    <label htmlFor="">Description</label>
                    <input type="text" />
                    <label htmlFor="">Is this a recurring event?</label>
                    <input type="checkbox" />
                </form>
            </div>

        </section>
    );
}

// TODO: Change event schedule view to more of a table so easily see all information on first glance. Like an excel form. with delete button and a form to add new events.