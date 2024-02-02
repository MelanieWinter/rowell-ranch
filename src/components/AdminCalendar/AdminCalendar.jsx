import { useState } from 'react'
import './AdminCalendar.css'

export default function AdminCalendar({ filteredEvents, editMode, setEditMode, editedEvent, setEditedEvent, scheduledEvents, setScheduledEvents, formData, setFormData, setNewFormData, newEvent, setNewEvent}) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [clickedDate, setClickedDate] = useState(null);

    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

    const getMonthData = (year, month) => {
        const firstDay = new Date(year, month, 1);
        const startDay = firstDay.getDay();
        const totalDays = daysInMonth(year, month);
        const monthData = [];
    
        let dayCounter = 1;
    
        for (let i = 0; i < 6; i++) {
            const week = [];
            for (let j = 0; j < 7; j++) {
                if ((i === 0 && j < startDay) || dayCounter > totalDays) {
                    week.push(null);
                } else {
                    week.push(dayCounter);
                    dayCounter++;
                }
            }
            monthData.push(week);
        }
        return monthData;
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const handleClickEvent = (event) => {
        setSelectedEvent(event);
    
        if (event) {
            console.log(event);
            setEditedEvent(event);
            setFormData({
                date: new Date(event.date).toISOString().split('T')[0],
                title: event.title,
                description: event.description,
                price: event.price,
                recurring: event.recurring,
            });
            setEditMode(true);
        } else {
            console.log('DATE', clickedDate)
            handleNewEvent(clickedDate);
        }
    };
    

    const monthData = getMonthData(currentDate.getFullYear(), currentDate.getMonth());

    const handleNewEvent = (selectedDate) => {
        setEditedEvent(null);
        setNewEvent(selectedDate);
        setNewFormData({
            date: selectedDate.toISOString().split('T')[0],
            title: '',
            description: '',
            price: '',
            recurring: false,
        });
        setEditMode(false);
    };

    return (
        <section className='AdminCalendar'>
            <div className='cal-topdiv'>
                <h2>{currentDate.toLocaleDateString('en-us', { month: 'long', year: 'numeric', timeZone: 'UTC' })}</h2>
                <div className='cal-buttonsdiv'>
                    <button onClick={handlePrevMonth} className='cal-button'>Previous Month</button>
                    <button onClick={handleNextMonth} className='cal-button'>Next Month</button>
                </div>
            </div>
            <div className="calendar-container">
                {monthData.map((week, weekIndex) => (
                <div key={weekIndex} className="week">
                    {week.map((day, dayIndex) => (
                    <div 
                        key={dayIndex} 
                        className={`day ${clickedDate && clickedDate.getDate() === day ? 'selected' : ''}`}
                        id={`date-${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`}
                        onClick={() => {
                            const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                            setClickedDate(clickedDate)
                            const existingEvent = scheduledEvents.find(event => {
                                const eventDate = new Date(event.date).getUTCDate();
                                const eventMonth = new Date(event.date).getUTCMonth();
                                const eventYear = new Date(event.date).getUTCFullYear();
                                return (
                                    eventDate === day &&
                                    eventMonth === currentDate.getUTCMonth() &&
                                    eventYear === currentDate.getUTCFullYear()
                                );
                            });
                        
                            if (existingEvent) {
                                handleClickEvent(existingEvent);
                            } else {
                                handleNewEvent(clickedDate);
                            }
                        }}
                    >
                        {day !== null ? (
                        <>
                            <span className="date">{day}</span>
                            <div className="ac-events">
                                {scheduledEvents
                                    .filter((event) => {
                                        const eventDate = new Date(event.date).getUTCDate();
                                        const eventMonth = new Date(event.date).getUTCMonth();
                                        const eventYear = new Date(event.date).getUTCFullYear();
                                        return (
                                            eventDate === day &&
                                            eventMonth === currentDate.getUTCMonth() &&
                                            eventYear === currentDate.getUTCFullYear()
                                        );
                                    })
                                    .map((filteredEvent) => (
                                        <div
                                            key={filteredEvent._id}
                                            className={`ac-calevent ${selectedEvent && selectedEvent._id === filteredEvent._id ? 'selected-event' : ''}`}
                                            onClick={() => {
                                            }}
                                        >
                                            {filteredEvent.title}
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                        ) : null}
                    </div>
                    ))}
                </div>
                ))}
            </div>
        </section>
    )
}