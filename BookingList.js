import React, { useState } from 'react';
import BookingSlot from './BookingSlot';
import './BookingList.css'

const BookingList = ({ slots }) => {
  const [availableSlots, setAvailableSlots] = useState(slots);

  const book = (index) => {
    const updatedSlots = [...availableSlots];
    updatedSlots[index].isAvailable = false;
    setAvailableSlots(updatedSlots);
  };

  return (
    <div className="booking-list">
      {availableSlots.map((slot, index) => (
        <BookingSlot
          key={slot.time}
          time={slot.time}
          isAvailable={slot.isAvailable}
          book={() => book(index)}
        />
      ))}
    </div>
  );
};


export default BookingList;
