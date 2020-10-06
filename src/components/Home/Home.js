import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './Home.css';
import EventCard from '../EventCard/EventCard';

const Home = () => {
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h3>I GROW BY HELPING PEOPLE IN NEED.</h3>
                <Form>
                    <Form.Row className="align-items-center">
                        <input id="input-search" placeholder="Search"/>
                        <Button className="btn-search">Search</Button>
                    </Form.Row>
                </Form>
            </div>
            <Container>
                <EventCard/>
            </Container>
            
        </div>
    );
};

export default Home;