import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './AddEvent.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddEvent = () => {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const[selectedDate, setSelectedDate] = useState();

    //file upload related
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    // const [upLoadedFile, setUploadedFile] = useState({});
    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const eventDate = new Date(selectedDate).toString();
    const inputEvent = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        const name = e.target.name;
        const value = e.target.value;
        if(name === "title"){
            setTitle(value);
        }
        if(name === "eventDescription"){
            setDescription(value);
        }
    }

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('file', file);
        const newVEvent = {title, description, eventDate, filename};
        console.log(newVEvent);
        fetch('https://still-tor-92463.herokuapp.com/addVolunteerEvent', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newVEvent)
        })
        fetch('/upload', {
            method: 'POST',
            body: formData
          })
        
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>
            <form>
                <Row style={{marginRight: "10%"}}>
                    <Col>
                        <label htmlFor="title">Event Title</label>
                        <input className="simple-field" type="text" placeholder="Enter Event title" name="title" onBlur={inputEvent}/>
                        <label htmlFor="eventDescription">Description</label>
                        <textarea className="simple-field" type="text" placeholder="Enter event description"  name="eventDescription" onBlur={inputEvent}/>
                    </Col>
                    <Col>
                        <label className="p" htmlFor="datePicker">Event Date</label>
                        <DatePicker name="datePicker" className="simple-field datepicker" placeholderText="MM/dd/yyyy" minDate={new Date()} selected={selectedDate} onChange={date => setSelectedDate(date)} />                       
                        <input onChange={onChange} type="file" name="customFile" id="upload"/>
                        <label htmlFor="customFile">{filename}</label>               
                    </Col>
                </Row>
                <button className="mt-5 btn btn-primary" onClick={handleSubmit} type="submit">Add Event</button>
            </form>
        </div>
    );
};

export default AddEvent;