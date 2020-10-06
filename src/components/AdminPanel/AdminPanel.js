import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AddEvent from '../AddEvent/AddEvent';
import VolList from '../VolList/VolList';

const AdminPanel = () => {
    const list = () => {
        document.getElementById("VolunteerList").style.display = "block";
        document.getElementById("AddEvent").style.display = "none";
        document.getElementById("li").style.color = "#0084FF";
        document.getElementById("ad").style.color = "black";
    }

    const add = () => {
        document.getElementById("AddEvent").style.display = "block";
        document.getElementById("VolunteerList").style.display = "none";
        document.getElementById("ad").style.color = "#0084FF";
        document.getElementById("li").style.color = "black";
    }

    return (
        <Row className="mt-5 ml-5">
            <Col style={{ width: "30%", float: "left"}} md={3}>
                <img style={{ width: "202px", height:"60px", marginBottom: "50px"}} src={require("../../logos/Group 1329.png")} alt="logo"/>
                <p id="li" onClick={list}><span><img className="icon" src={require("../../logos/users-alt 1.png")} alt=""/></span> Volunteer Register List</p>
                <p style={{color: "#0084FF"}} id="ad" onClick={add}><span><img className="icon" src={require("../../logos/plus 1.png")} alt=""/>Add event</span></p>
            </Col>
            <Col md={8} id="AddEvent">
                <AddEvent/>
            </Col>
            <Col style={{display:"none"}} md={9} id="VolunteerList">
                <VolList/>
            </Col>
        </Row>
    );
};

export default AdminPanel;