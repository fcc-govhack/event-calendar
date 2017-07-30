import moment from 'moment'
import React from 'react'

// import farmersmarket from './images/farmersmarket.jpg'; 
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

const getCostValue = (costValue) => {
  if (costValue.toUpperCase() === 'FREE') {
    return `${costValue}!`
  } else if (!isNaN(costValue)) {
    return `$${costValue}`
  }
  return `${costValue}`
}

/**
 * Could get all random images by putting the image request on ComponentDidMount
 */
const EventCard = ({ event }) => {

  if (!event || !event.attributes) {
    return null
  }

  const listOfEvents = event.attributes;
  const eventDay = day[listOfEvents.Day.substr(0, 3).toUpperCase()]
  const date = getEventDay(eventDay)
  const dateFormatter = dateFormatFactory(date)
  
  return (
    <div className="container">
      <div className="event-container">
        <div className="row event-instance">
          <div className="col-lg-6">
            <div className="date-box">{ dateFormatter('MMM D') }</div>
            <div className="cf clearfix">
              <img className="top" src={`http://loremflickr.com/1000/1000/${eventData.Program_Title}`} alt='' />
              <img className="bottom" src={ farmersmarketRollover } alt='' />
            </div>
            <div className="event-details">
              <div className="event-title">
                <p className="event-text">{ listOfEvents.Program_Title }</p>
              </div>
              <div className="event-description-container">
                <p className="event-description">{ listOfEvents.Program_Description }</p>
                <p className ="see-more">...see more</p>
              </div>
            </div>
            <div className="event-specs">
              <p className="event-specs-detail">Date & Time <br /><b>{ dateFormatter('MMMM D') }</b><br /><b>{ listOfEvents.Time }</b><br /><br /> Location <br/><b>{ listOfEvents.Name }</b><br /><br /> Cost<br /><b>{getCostValue(listOfEvents.Cost)}</b><br /><br /><i className="fa fa-heart fa-3x" aria-hidden="true"></i><br /><br /><br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
