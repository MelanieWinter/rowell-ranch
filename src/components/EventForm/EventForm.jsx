import { useState, useEffect } from 'react';
import * as eventsAPI from '../../utilities/events-api';
import './EventForm.css';

export default function EventForm({ scheduledEvents, setScheduledEvents, editedEvent, setEditedEvent, onCancelEdit, formData, setFormData, isGridView }) {

    // useEffect(() => {
    //     console.log("editedEvent in EventForm:", editedEvent);
    //     if (editedEvent) {
    //         setFormData({
    //             date: new Date(editedEvent.date).toISOString().split('T')[0],
    //             title: editedEvent.title,
    //             description: editedEvent.description,
    //             price: editedEvent.price,
    //             recurring: editedEvent.recurring,
    //         });
    //     }
    // }, [editedEvent]);

    const handleChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const formDataPayload = { ...formData };
            delete formDataPayload.confirm;
            delete formDataPayload.error;
            if (editedEvent) {
                await eventsAPI.updateEvent(editedEvent._id, formDataPayload);
            } else {
                await eventsAPI.addEvent(formDataPayload);
            }
            const updatedEvents = await eventsAPI.getAllEvents();
            setScheduledEvents(updatedEvents);
            setFormData({
                date: '',
                title: '',
                description: '',
                price: '',
                recurring: false,
            });
            setEditedEvent(null);
        } catch (error) {
            console.log(error);
            setFormData({
                ...formData,
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
                    <input type="date" name='date' value={formData.date} onChange={handleChange} />
                </label>
                <label>
                    Title
                    <input type="text" name='title' value={formData.title} onChange={handleChange} />
                </label>
                <label>
                    Description
                    <textarea name="description" value={formData.description} onChange={handleChange} />
                </label>
                <label>
                    Price
                    <input type="number" name='price' value={formData.price} onChange={handleChange} />
                </label>
                <label>
                    Recurring?
                    <input type="checkbox" name='recurring' checked={formData.recurring} onChange={handleChange} />
                </label>
                <button type='submit'>{editedEvent ? 'Update' : 'Submit'}</button>
                {editedEvent && <button type='button' onClick={onCancelEdit}>Cancel</button>}
            </form>
        </div>
    );
}
