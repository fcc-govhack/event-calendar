import moment from 'moment'
import React from 'react'

// import farmersmarket from './images/farmersmarket.jpg'; 
// import farmersmarketRollover from './images/farmersmarket-rollover.jpg'; 
import button from './images/btn.png';

import image1 from './images/PHOTOS/1.jpg'
import image2 from './images/PHOTOS/2.jpg'
import image3 from './images/PHOTOS/3.jpg'
import image4 from './images/PHOTOS/4.jpg'
import image5 from './images/PHOTOS/5.jpg'
import image6 from './images/PHOTOS/6.jpg'
import image7 from './images/PHOTOS/7.jpg'
import image8 from './images/PHOTOS/8.jpg'
import image9 from './images/PHOTOS/9.jpg'
import image10 from './images/PHOTOS/10.jpg'
import image11 from './images/PHOTOS/11.jpg'
import image12 from './images/PHOTOS/12.jpg'
import image13 from './images/PHOTOS/13.jpg'
import image14 from './images/PHOTOS/14.jpg'
import image15 from './images/PHOTOS/15.jpg'
import image16 from './images/PHOTOS/16.jpg'
import image17 from './images/PHOTOS/17.jpg'
import image18 from './images/PHOTOS/18.jpg'
import image19 from './images/PHOTOS/19.jpg'
import image20 from './images/PHOTOS/20.jpg'
import image21 from './images/PHOTOS/21.jpg'
import image23 from './images/PHOTOS/23.jpg'
import image24 from './images/PHOTOS/24.jpg'
import image25 from './images/PHOTOS/25.jpg'
import image26 from './images/PHOTOS/26.jpg'

const listOfImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image23,
  image24,
  image25,
  image26,
]

const API_KEY = "f5449d38cf868aa4137d3523f8c760a7";

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

  const randomNum = Math.floor(Math.random() * listOfImages.length) + 1
  
  return (
    <div className="container">
      <div className="event-container">
        <div className="row event-instance">
          <div className="col-lg-6">
            <div className="date-box">{ dateFormatter('MMM D') }</div>
            <div className="cf clearfix">
              <img className="top" src={ listOfImages[randomNum] } alt='' />
               <img className="bottom" src={ listOfImages[randomNum] } alt='' /> 
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
