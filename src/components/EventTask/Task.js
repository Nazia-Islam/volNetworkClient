import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Task = ({tsk}) => {
    const handleDelete = () => {
        
    } 
    return (
        <>
            <Col md={6}>
                <Row>
                    <Col md={6} style={{padding:" 30px"}}>
                    <img style={{height:"250px"}} src={require('../../images/extraVolunteer.png')} alt=""/>
                    </Col>
                    <Col md={6} style={{padding:" 50px"}}>
                    <h4>{tsk.addVolunter.title}</h4>
                    <h5>{tsk.eventDate}</h5>
                    <button className="delete btn btn-danger" onClick={handleDelete}></button>
                    </Col>
                </Row>
            </Col>
            
        </>
    );
};

export default Task;