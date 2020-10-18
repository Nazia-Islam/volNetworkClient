import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleCard = ({card}) => {
    
    console.log(card._id)
    return (
        
        <Link to={card._id} className="col-md-3">
            <Card >
                <Card.Img style={{height:"300px"}} variant="top" src={`https://still-tor-92463.herokuapp.com/${card.filename}`} />
                <Card.Body>
                    <Card.Title style={{textAlign:"center"}}>{card.title}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default SingleCard;