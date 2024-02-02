import { useState, useEffect } from 'react';
import * as eventsAPI from '../../utilities/events-api';
import './EventForm.css';

export default function EventForm({ scheduledEvents, setScheduledEvents, editedEvent, setEditedEvent, onCancelEdit, formData, setFormData, newFormData, setNewFormData }) {

    useEffect(() => {
        console.log("editedEvent in EventForm:", editedEvent);
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
        // Check if the form is for a new event or an edited event
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
            // Clear the appropriate form data state after submission
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
                    Price
                    <input type="number" name='price' value={editedEvent ? formData.price : newFormData.price} onChange={handleChange} />
                </label>
                <label>
                    Recurring?
                    <input type="checkbox" name='recurring' checked={editedEvent ? formData.recurring : newFormData.recurring} onChange={handleChange} />
                </label>
                <button type='submit'>{editedEvent ? 'Update' : 'Submit'}</button>
                {editedEvent && <button type='button' onClick={onCancelEdit}>Cancel</button>}
            </form>
        </div>
    );
}
