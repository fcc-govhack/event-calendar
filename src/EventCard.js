import React from 'react'
import './App.css'

const EventCard = ({ event }) => (
  // <div className='event-card'>
  //   <div className='title'>{event.attributes.Program_Title}</div>
  //   <div className='description'>{event.attributes.Program_Description}</div>
  //   <div className='day'>{event.attributes.Day}</div>
  //   <div className='time'>{event.attributes.Time}</div>
  //   <div className='cost'>{event.attributes.Cost}</div>
  // </div>
  <div className='row event-instance'>
        <div className='col-lg-6'>
            <img className='img-responsive' src='http://www.emeraldbank.net.au/wp-content/uploads/2016/10/farmers_market_board.jpg' alt='eventphoto'/>
            <div className='event-details'>
                <div className='event-title'>
                    <p className='event-text'>{event.attributes.Program_Title}</p>
                </div>
                <div className='event-date'>
                    <p className='event-description-container'>{event.attributes.Program_Description}</p>
                </div>
            </div>
        </div>
    </div>   
);

export default EventCard;
