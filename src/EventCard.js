import moment from 'moment'
import React from 'react'

import farmersmarket from './images/farmersmarket.jpg'; 
import farmersmarketRollover from './images/farmersmarket-rollover.jpg'; 
import button from './images/btn.png';

const day = {
  MON: 1,
  TUE: 2,
  WED: 3,
  THU: 4,
  FRI: 5,
  SAT: 6,
  SUN: 7,
}

const getEventDay = (eventDay) => {
  // if we haven't yet passed the day of the week that I need:
  if (moment().isoWeekday() <= eventDay) { 
    // then just give me this week's instance of that day
    return moment().isoWeekday(eventDay);
  } else {
    // otherwise, give me next week's instance of that day
    return moment().add(1, 'weeks').isoWeekday(eventDay);
  }
}

const dateFormatFactory = (date) => {
  return function (dateFormat) {
    if (date.format) {
      return date.format(dateFormat);
    }
    return date;
  }
}

/**
 * Could get all random images by putting the image request on ComponentDidMount
 */
const EventCard = ({ event }) => {
  // <div className='event-card'>
  //   <div className='title'>{event.attributes.Program_Title}</div>
  //   <div className='description'>{event.attributes.Program_Description}</div>
  //   <div className='day'>{event.attributes.Day}</div>
  //   <div className='time'>{event.attributes.Time}</div>
  //   <div className='cost'>{event.attributes.Cost}</div>
  // </div>
  const eventDay = day[event.attributes.Day.substr(0, 3).toUpperCase()]
  const date = getEventDay(eventDay)
  const dateFormatter = dateFormatFactory(date)
  
  return (
    <div className="container">
      <div className="event-container">
        <div className="row event-instance">
          <div className="col-lg-6">
            <div className="date-box">{ dateFormatter('MMM D') }</div>
            <div className="cf clearfix">
              <img className="top" src={ farmersmarket } alt='' />
              <img className="bottom" src={ farmersmarketRollover } alt='' />
            </div>
            <div className="event-details">
              <div className="event-title">
                <p className="event-text">{ event.attributes.Program_Title }</p>
              </div>
              <div className="event-description-container">
                <p className="event-description">{ event.attributes.Program_Description }</p>
                <p className ="see-more">...see more</p>
              </div>
            </div>
            <div className="event-specs">
              <p className="event-specs-detail">Date & Time <br /><b>{ dateFormatter('MMMM D') }</b><br /><b>{ event.attributes.Time }</b><br /><br /> Location <br/><b>{ event.attributes.Name }</b><br /><br /> Cost<br /><b>Free!</b><br /><br /><i className="fa fa-heart fa-3x" aria-hidden="true"></i><br /><br /><br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
