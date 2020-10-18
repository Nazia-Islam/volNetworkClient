import React, { useState, useEffect } from 'react';
import SingleVol from '../SingleVol/SingleVol';
import { Row, Col } from 'react-bootstrap';

const VolList = () => {
    const [volunteerList, setVolunteerList] = useState([]);
    
    useEffect(() => {
        fetch('https://still-tor-92463.herokuapp.com/showVolunteerList',)
        .then(res => res.json())
        .then(data => setVolunteerList(data));
    }, [])

    return (
        <div>
            <h3>Volunteer Register List {volunteerList.length}</h3>
            <Row>
                <Col md={2}>Name</Col>
                <Col md={3}>Email ID</Col>
                <Col md={3}>Registrating Date</Col>
                <Col md={2}>Volunteer list</Col>
                <Col md={2}>Action</Col>
            </Row>
            {
                volunteerList.map(vol => <SingleVol key={vol._id} vol={vol}></SingleVol>)
            } 
        </div>
    );
};

export default VolList;