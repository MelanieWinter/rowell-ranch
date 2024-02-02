import React, { useState } from 'react';
import EventForm from '../../components/EventForm/EventForm';
import AdminCalendar from '../AdminCalendar/AdminCalendar';
import AdminGrid from '../AdminGrid/AdminGrid';
import './EventTable.css';

export default function EventTable({ scheduledEvents, setScheduledEvents }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editedEvent, setEditedEvent] = useState(null);
    const [newEvent, setNewEvent] = useState(null);
    const [newFormData, setNewFormData] = useState({
        date: '',
        title: '',
        description: '',
        price: '',
        recurring: false,
    });
    const [formData, setFormData] = useState({
        date: '',
        title: '',
        description: '',
        price: '',
        recurring: false,
    });
    const [isGridView, setGridView] = useState(true);
    const filteredEvents = scheduledEvents.filter((event) => {
        const formattedDate = new Date(event.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });
        return (
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            formattedDate.includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div className='EventTable'>
            <aside className='et-aside'>
                <label className='et-search'>
                    Search 
                    <span>(by title or date)</span>
                    <input
                        type="text"
                        placeholder="Search events..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </label>
                {editedEvent && !isGridView ? (
                    <>
                        <EventForm
                            scheduledEvents={scheduledEvents}
                            setScheduledEvents={setScheduledEvents}
                            editedEvent={editedEvent}
                            setEditedEvent={setEditedEvent}
                            onCancelEdit={() => setEditedEvent(null)}
                            formData={formData}
                            setFormData={setFormData}
                            editMode={editMode}
                            setEditMode={setEditMode}
                            newEvent={newEvent}
                            setNewEvent={setNewEvent}
                            isGridView={isGridView}
                        />
                    </>
                ) : (
                    <EventForm
                        scheduledEvents={scheduledEvents}
                        setScheduledEvents={setScheduledEvents}
                        newFormData={newFormData}
                        setNewFormData={setNewFormData}
                    />
                )}
                <button onClick={() => setGridView(!isGridView)}>
                    {isGridView ? 'Switch to Calendar View' : 'Switch to Grid View'}
                </button>
            </aside>
            <div className='et-main'>
                {isGridView ? (
                    <AdminGrid
                        filteredEvents={filteredEvents}
                        editMode={editMode}
                        setEditMode={setEditMode}
                        editedEvent={editedEvent}
                        setEditedEvent={setEditedEvent}
                        scheduledEvents={scheduledEvents}
                        setScheduledEvents={setScheduledEvents}
                        formData={formData}
                        setFormData={setFormData}
                        // handleDeleteEvent={handleDeleteEvent}
                    />
                ) : (
                    <AdminCalendar
                        filteredEvents={filteredEvents}
                        editMode={editMode}
                        setEditMode={setEditMode}
                        editedEvent={editedEvent}
                        setEditedEvent={setEditedEvent}
                        scheduledEvents={scheduledEvents}
                        setScheduledEvents={setScheduledEvents}
                        formData={formData}
                        setFormData={setFormData}
                        setNewFormData={setNewFormData}
                        newEvent={newEvent}
                        setNewEvent={setNewEvent}
                    />
                )}
            </div>
        </div>
    );
}
