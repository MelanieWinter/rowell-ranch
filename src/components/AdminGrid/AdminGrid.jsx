import EventForm from '../../components/EventForm/EventForm';
import formatCurrency from '../../utilities/formatCurrency'
import './AdminGrid.css'

export default function AdminGrid({ filteredEvents, editMode, setEditMode, editedEvent, setEditedEvent, scheduledEvents, setScheduledEvents, formData, setFormData }) {

    const handleEditEvent = (event) => {
        setEditedEvent(event);
        setEditMode(true);
    };

    return (
        <div className="grid-container">
            {filteredEvents.map((event) => (
                <div className="grid-item" key={event._id}>
                    {editMode && editedEvent?._id === event._id ? (
                    <EventForm
                        scheduledEvents={scheduledEvents}
                        setScheduledEvents={setScheduledEvents}
                        editedEvent={editedEvent}
                        setEditedEvent={setEditedEvent}
                        onCancelEdit={() => setEditMode(false)}
                        formData={formData}
                        setFormData={setFormData}
                    />
                    ) : (
                        <>
                            <div>Date: {new Date(event.date).toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', timeZone: 'UTC' })}</div>
                            <div>Title: {event.title}</div>
                            <div>Description: {event.description}</div>
                            <div>Price: {formatCurrency(event.price)}</div>
                            <div>Recurring: {event.recurring ? 'Yes' : 'No'}</div>
                            <button onClick={() => handleEditEvent(event)}>Edit</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}