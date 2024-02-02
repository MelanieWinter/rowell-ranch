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
        // setFormData({
        //     date: new Date(editedEvent.date).toISOString().split('T')[0],
        //     title: editedEvent.title,
        //     description: editedEvent.description,
        //     price: editedEvent.price,
        //     recurring: editedEvent.recurring,
        // });
        setEditMode(true);
    };
    
    // useEffect(() => {
    //     console.log('EDITED EVENT', editedEvent);
    //     if (editedEvent) {
    //         setFormData({
    //             date: new Date(editedEvent.date).toISOString().split('T')[0],
    //             title: editedEvent.title,
    //             description: editedEvent.description,
    //             price: editedEvent.price,
    //             recurring: editedEvent.recurring,
    //         });
    //     } else {
    //         setFormData({
    //             date: '',
    //             title: '',
    //             description: '',
    //             price: '',
    //             recurring: false,
    //         });
    //     }
    // }, [editedEvent]);

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
                        onCancelEdit={() => setEditMode(false)}
                        formData={formData}
                        setFormData={setFormData}
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