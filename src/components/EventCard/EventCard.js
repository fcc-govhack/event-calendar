import React from 'react'
import data from '../../data/testData.json'

const EventCard = () => (
    <div className='row event-instance'>
        <div className='col-lg-6'>
            <img className='img-responsive' src='' />
            <div className='event-details'>
                <div className='event-title'>
                    <p className='event-text'>Beenleigh Craft and Farmers Market</p>
                </div>
                <div className='event-date'>
                    <p className='event-description-container'>A general variety market with farmers produce, fresh fish, pets, crafts and a wide variety of new and second hand goods. This market has a ban on dogs and smoking. Admission is free.</p>
                </div>
            </div>
        </div>
    </div>      
)

export default EventCard
