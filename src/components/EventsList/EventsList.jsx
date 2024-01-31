import EventsListItem from '../EventsListItem/EventsListItem';
import './EventsList.css'

export default function EventsList({ scheduledEvents, handleAddToOrder}) {
    const events = scheduledEvents.map(event =>
        <EventsListItem
            key={event._id}
            eventItem={event}
            handleAddToOrder={handleAddToOrder}
        />
    );

    return (
        <section className='EventsList'>
            {events}
        </section>
    )

}