import React, { useState } from 'react';
import EventForm from '../../components/EventForm/EventForm';
import AdminCalendar from '../AdminCalendar/AdminCalendar';
import AdminGrid from '../AdminGrid/AdminGrid';

import './EventTable.css';

export default function EventTable({ scheduledEvents, setScheduledEvents }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editedEvent, setEditedEvent] = useState(null);
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
            <aside>
                <label>
                    Search
                    <input
                        type="text"
                        placeholder="Search by title or date..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </label>
                {editMode ? (
                    <EventForm
                        scheduledEvents={scheduledEvents}
                        setScheduledEvents={setScheduledEvents}
                        editedEvent={editedEvent}
                        setEditedEvent={setEditedEvent}
                        onCancelEdit={() => setEditMode(false)}
                        formData={formData}
                        setFormData={setFormData}
                        isGridView={isGridView}
                    />
                ) : null}
                <button onClick={() => setGridView(!isGridView)}>
                    {isGridView ? 'Switch to Calendar View' : 'Switch to Grid View'}
                </button>
            </aside>
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
                />
            ) : (
                <AdminCalendar
                    scheduledEvents={scheduledEvents}
                    setEditedEvent={setEditedEvent}
                    setEditMode={setEditMode}
                    setFormData={setFormData}
                />
            )}
        </div>
    );
}
