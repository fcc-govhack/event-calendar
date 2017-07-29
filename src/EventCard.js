import React from 'react'

const EventCard = ({ event }) => (
  <div className='event-card'>
    <div className='title'>{event.attributes.Program_Title}</div>
    <div className='description'>{event.attributes.Program_Description}</div>
    <div className='day'>{event.attributes.Day}</div>
    <div className='time'>{event.attributes.Time}</div>
    <div className='cost'>{event.attributes.Cost}</div>
  </div>
);

export default EventCard;
