import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Header from '../Header1';

// Localizer for calendar (using moment.js)
const localizer = momentLocalizer(moment);

const UniversityCalendar = () => {
  // Sample upcoming events data
  const [events, setEvents] = useState([
    {
      title: 'Annual Convocation',
      start: new Date('2024-10-15T10:00:00'),
      end: new Date('2024-10-15T12:00:00')
    },
    {
      title: 'SIH internal Hackathon',
      start: new Date('2024-09-09T10:00:00'),
      end: new Date('2024-09-09T12:00:00')
    },
    {
      title: 'Faculty Workshop',
      start: new Date('2024-10-20T09:00:00'),
      end: new Date('2024-10-20T11:00:00')
    },
    {
      title: 'University Sports Day',
      start: new Date('2024-11-05T08:00:00'),
      end: new Date('2024-11-05T17:00:00')
    }
  ]);
  const navigation = [
    { name: 'Home', href: '/', current: true },
 
  

  ]

  return (
    <div>
      <div>
        <Header navigation={navigation}></Header>
      </div>

    <div className="my-28">
      <h1 className="text-2xl font-bold mb-4">University Events Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={['month', 'week', 'day']}
      />
    </div>
          
    </div>
  );
};

export default UniversityCalendar;
