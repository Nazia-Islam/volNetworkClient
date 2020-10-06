import React, { useState, useEffect } from 'react';
import SingleCard from './SingleCard';
import { Row } from 'react-bootstrap';
import './Evet.css';

const EventCard = () => {
    const [eventcard, setEventCard] = useState([]);
    console.log(window.location.href);
    //homeUrl = window.location.href + ''
    useEffect( () => {
        fetch('http://localhost:4000/showAllEvents')
        .then(res => res.json())
       .then(data => setEventCard(data))
    }, [])

    return (
        <Row className="event-row">
            {
                eventcard.map(card => <SingleCard key={card._id} card={card}></SingleCard>)
            }
        </Row>
    );
};

export default EventCard;