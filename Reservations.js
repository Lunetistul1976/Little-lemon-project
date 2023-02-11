import React, { useState, useReducer, useEffect } from 'react';
import './Reservations.css';
import BookingForm from './BookingForm';

const TimeSlot = ({ time }) => (
  <li className="app__reservations-times-item">
    {time.hour}
  </li>
);
const Reservations = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableTimes, dispatch] = useReducer(updateTimes,  {
    availableTimes: []
  });

  function updateTimes(state, action) {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return {
          ...state,
          availableTimes: action.payload
        };
      default:
        return state;
    }
  }
  
async function fetchData() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js');
      const data = await response.json();
      initializeTimes(data, selectedDate);
    } catch (error) {
      console.error(error);
    }
  }

useEffect(() => {
    fetchData();
  }, [selectedDate, dispatch]);

  const times = [
    { hour: '17:00', date: selectedDate, isAvailable: true },
    { hour: '18:00', date: selectedDate, isAvailable: true },
    { hour: '19:00', date: selectedDate, isAvailable: false },
    { hour: '20:00', date: selectedDate, isAvailable: true },
    { hour: '21:00', date: selectedDate, isAvailable: false },
    { hour: '22:00', date: selectedDate, isAvailable: true },
  ];
  function initializeTimes(selectedDate) {
    const availableTimes = times.filter(time => time.date === selectedDate && time.isAvailable);
    dispatch({ type: 'UPDATE_TIMES', payload: availableTimes });
  }

  return (
    <div className="app__reservations" id="reservations">
      <h1 className="app__reservations-h1">Reserve a Table</h1>
      <p className="app__reservations-p">Reserve now and get instant confirmation</p>
      <ul className="app__reservations-times">
      {availableTimes.availableTimes.map(time => (
   time.isAvailable ? <TimeSlot key={time.hour} time={time} /> : null
   ))}
 </ul>
      <BookingForm
        selectedDate={selectedDate}
        availableTimes={availableTimes}
        setSelectedDate={setSelectedDate}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Reservations;
