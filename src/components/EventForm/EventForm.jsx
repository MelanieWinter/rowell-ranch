import { useState, useEffect } from 'react';
import * as eventsAPI from '../../utilities/events-api';
import './EventForm.css';

export default function EventForm({ scheduledEvents, setScheduledEvents, editedEvent, setEditedEvent, onCancelEdit, formData, setFormData, newFormData, setNewFormData, editMode, setEditMode, newEvent, setNewEvent, isGridView }) {

    useEffect(() => {
        if (editedEvent) {
            setFormData({
                date: new Date(editedEvent.date).toISOString().split('T')[0],
                title: editedEvent.title,
                description: editedEvent.description,
                price: editedEvent.price,
                recurring: editedEvent.recurring,
            });
        }
    }, [editedEvent]);

    const handleChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const formDataToUpdate = editedEvent ? setFormData : setNewFormData;
        formDataToUpdate((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const formDataPayload = editedEvent ? { ...formData } : { ...newFormData };
            delete formDataPayload.confirm;
            delete formDataPayload.error;
            if (editedEvent) {
                await eventsAPI.updateEvent(editedEvent._id, formDataPayload);
            } else {
                await eventsAPI.addEvent(formDataPayload);
            }
            const updatedEvents = await eventsAPI.getAllEvents();
            setScheduledEvents(updatedEvents);
            if (editedEvent) {
                setFormData({
                    date: '',
                    title: '',
                    description: '',
                    price: '',
                    recurring: false,
                });
                setEditedEvent(null);
            } else {
                setNewFormData({
                    date: '',
                    title: '',
                    description: '',
                    price: '',
                    recurring: false,
                });
            }
        } catch (error) {
            console.log(error);
            const errorFormData = editedEvent ? setFormData : setNewFormData;
            errorFormData({
                ...(editedEvent ? formData : newFormData),
                error: 'Add event failed - Try again',
            });
        }
    };

    const handleDeleteEvent = async (eventId) => {
        try {
            await eventsAPI.deleteEvent(eventId);
            const updatedEvents = await eventsAPI.getAllEvents();
            setScheduledEvents(updatedEvents);
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    return (
        <div className='EventForm'>
            <h3>{editedEvent ? 'Edit Event' : 'Add An Event'}</h3>
            <form onSubmit={handleSubmit} className='ef-form'>
            <label>
                    Date
                    <input type="date" name='date' value={editedEvent ? formData.date : newFormData.date} onChange={handleChange} />
                </label>
                <label>
                    Title
                    <input type="text" name='title' value={editedEvent ? formData.title : newFormData.title} onChange={handleChange} />
                </label>
                <label>
                    Description
                    <textarea name="description" value={editedEvent ? formData.description : newFormData.description} onChange={handleChange} />
                </label>
                <label>
                    Price <span>(in pennies)</span>
                    <input type="number" name='price' value={editedEvent ? formData.price : newFormData.price} onChange={handleChange} />
                </label>
                <label>
                    Recurring?
                    <input type="checkbox" name='recurring' checked={editedEvent ? formData.recurring : newFormData.recurring} onChange={handleChange} />
                </label>
                <button type='submit'>{editedEvent ? 'Update' : 'Submit'}</button>
                {editedEvent && <button onClick={() => handleDeleteEvent(editedEvent._id)}>Delete</button>}
                {editedEvent && <button type='button' onClick={onCancelEdit}>Cancel</button>}
            </form>
        </div>
    );
}
