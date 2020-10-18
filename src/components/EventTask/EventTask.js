import React, { useState,useContext,useEffect } from 'react';
import Task from './Task';
import { Row, Container } from 'react-bootstrap';
import { myUserContext } from '../../App';

const EventTask = () => {
    const [loggedInUser, setLoggedInUser] = useContext(myUserContext);
    console.log(loggedInUser);
    const [task, setTask] = useState([]);
    useEffect(() => {
        fetch('https://still-tor-92463.herokuapp.com/volunteerDetails?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setTask(data);
        })
    }, []);

    return (
        <Container style={{width:"90%", margin:"auto"}}>
            <Row>
            {
                task.map((tsk) => <Task key={tsk._id} tsk={tsk}></Task>)
            }
            </Row>
            
        </Container>
    );
};

export default EventTask;