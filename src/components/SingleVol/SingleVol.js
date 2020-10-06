import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './SingleVol.css';


const SingleVol = ({vol}) => {

    const handleDelete = () =>{
        console.log("clicked");
    }

    return (
        <Row>
            <Col md={2}>{vol.addVolunter.name}</Col>
            <Col md={3}>{vol.addVolunter.email}</Col>
            <Col md={3}>{vol.eventDate}</Col>
            <Col md={2}>{vol.addVolunter.title}</Col>
            <Col md={2}><button className="delete btn btn-danger" onClick={handleDelete}></button></Col>
        </Row>
    );
};

export default SingleVol;