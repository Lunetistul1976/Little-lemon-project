
import { fireEvent, render, screen} from "@testing-library/react";
import BookingForm from './BookingForm';
import React, {useReducer} from 'react';
import { fetchAPI } from "./api";
import {initializeTimes, updateTimes} from './Main';

test('Renders the BookingForm date field', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})



test('Renders the BookingForm time field', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Choose time");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes test', () => {
    const defaultTimes = (['17:00','18:00','19:00','20:00','21:00','22:00']).join('');
    render(<BookingForm availableTimes={initializeTimes()} dispatch={jest.fn()}/>);
    const timeElement = screen.getByLabelText('Choose time');
    expect(timeElement.textContent).not.toBeNull();
})

test('updateTimes test', async () => {
    const newTimes= fetchAPI(new Date(Date.parse('2023-02-11')));
    const availableTimes = initializeTimes();
    render(<BookingForm availableTimes={availableTimes} dispatch={(action)=>
        expect(updateTimes(null,action)).toStrictEqual(newTimes)
        }/>);
    const dateElement = screen.getByLabelText('Choose date');
    fireEvent.change(dateElement, { target: { value: '2023-02-11'} });
})

test('updateGuests test', () => {
    render(<BookingForm availableTimes={initializeTimes()} dispatch={jest.fn()}/>);
    const input = screen.getByLabelText("Number of guests");
    fireEvent.change(input, { target: { value: '5' } });
    expect(input).not.toBeNull();
})

test('missing date', () => {
    render(<BookingForm availableTimes={initializeTimes()} dispatch={jest.fn()} formSubmit={jest.fn()}/>);
    const input = screen.getByLabelText("Number of guests");
    fireEvent.change(input, { target: { value: '20' } });
    fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: 'Birthday' } });
    fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: '17:00' } });
    expect(screen.getByText(/Submit/i).closest('button')).toBeDisabled();
})
test('missing guests', () => {
    render(<BookingForm availableTimes={initializeTimes()} dispatch={jest.fn()} formSubmit={jest.fn()}/>);
    fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: 'Birthday' } });
    fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: '17:00' } });
    expect(screen.getByText(/Submit/i).closest('button')).toBeDisabled();
})
test('missing name', () => {
    render(<BookingForm availableTimes={initializeTimes()} dispatch={jest.fn()} formSubmit={jest.fn()}/>);
    const input = screen.getByLabelText("Number of guests");
    fireEvent.change(input, { target: { value: '20' } });
    fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: 'Birthday' } });
    fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: '2023-02-18' } });
    fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: '17:00' } });
    expect(screen.getByText(/Submit/i).closest('button')).toBeDisabled();
})
test('minimum enabled', () => {
    render(<BookingForm availableTimes={initializeTimes()} dispatch={jest.fn()} formSubmit={jest.fn()}/>);
    const input = screen.getByLabelText("Number of guests");
    fireEvent.change(input, { target: { value: '20' } });
    fireEvent.change(screen.getByLabelText("Name"), { target: { value: 'Joe' } });
    fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: '2023-02-18' } });
    expect(screen.getByText(/Submit/i).closest('button')).not.toBeDisabled();
})
