import React from 'react'

import farmersmarket from './images/farmersmarket.jpg'; 
import farmersmarketRollover from './images/farmersmarket-rollover.jpg'; 
import button from './images/btn.png';

const EventCard = ({ event }) => (
  // <div className='event-card'>
  //   <div className='title'>{event.attributes.Program_Title}</div>
  //   <div className='description'>{event.attributes.Program_Description}</div>
  //   <div className='day'>{event.attributes.Day}</div>
  //   <div className='time'>{event.attributes.Time}</div>
  //   <div className='cost'>{event.attributes.Cost}</div>
  // </div>
  <div className="container">
    <div className="event-container">
      <div className="row event-instance">
        <div className="col-lg-6">
          <div className="date-box">AUG 6</div>
          <div className="cf clearfix">
            <img className="top" src={farmersmarket} alt='' />
            <img className="bottom" src={farmersmarketRollover} alt='' />
          </div>
          <div className="event-details">
            <div className="event-title">
              <p className="event-text">{event.attributes.Program_Title}</p>
            </div>
            <div className="event-description-container">
              <p className="event-description">{event.attributes.Program_Description}</p>
              <p className ="see-more">...see more</p>
            </div>
          </div>
          <div className="event-specs">
            <p className="event-specs-detail">Date & Time: <br /><b>August 6</b><br /><b>6am - 12pm</b><br /><br /> Location: <br/><b>Beenleigh Showgrounds</b><br /><br /> Cost:<br /><b>Free!</b><br /><br /><br />
              <img src={button} alt='' />
              <img src={button} alt='' />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EventCard;
