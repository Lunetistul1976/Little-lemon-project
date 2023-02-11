import React from 'react';

const BookingSlot = ({ time, isAvailable, book }) => {
  return (
    <div className="booking-slot">
      <div className="booking-slot__time">{time}</div>
      <div
        className={`booking-slot__status ${isAvailable ? 'available' : 'unavailable'}`}
        onClick={isAvailable ? book : null}
      >
        {isAvailable ? 'Available' : 'Booked'}
      </div>
    </div>
  );
};


export default BookingSlot;
