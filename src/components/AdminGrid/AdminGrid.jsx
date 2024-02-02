import { useState, useEffect } from 'react';
import EventForm from '../../components/EventForm/EventForm';
import * as eventsAPI from '../../utilities/events-api';
import formatCurrency from '../../utilities/formatCurrency'
import './AdminGrid.css'

export default function AdminGrid({ filteredEvents, editMode, setEditMode, editedEvent, setEditedEvent, scheduledEvents, setScheduledEvents, formData, setFormData }) {
    const handleDeleteEvent = async (eventId) => {
        try {
            await eventsAPI.deleteEvent(eventId);
            const updatedEvents = await eventsAPI.getAllEvents();
            setScheduledEvents(updatedEvents);
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    const handleEditEvent = (event) => {
        setEditedEvent(event);
        console.log(event)
        console.log(new Date(event.date).toISOString().split('T')[0])
        console.log(event.title)
        console.log(event.description)
        console.log(event.price)
        console.log(event.recurring)
        setFormData({
            date: new Date(event.date).toISOString().split('T')[0],
            title: event.title,
            description: event.description,
            price: event.price,
            recurring: event.recurring,
        });
        setEditMode(true);
        console.log(formData)
    };

    const handleCancelEdit = () => {
        setEditMode(false);
        setEditedEvent(null);
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
                            onCancelEdit={handleCancelEdit}
                        />
                    ) : (
                        <>
                            <div>Date: {new Date(event.date).toLocaleDateString('en-US', { day: 'numeric', month: 'numeric' })}</div>
                            <div>Title: {event.title}</div>
                            <div>Description: {event.description}</div>
                            <div>Price: {formatCurrency(event.price)}</div>
                            <div>Recurring: {event.recurring ? 'Yes' : 'No'}</div>
                            <button onClick={() => handleEditEvent(event)}>Edit</button>
                            <button onClick={() => handleDeleteEvent(event._id)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}