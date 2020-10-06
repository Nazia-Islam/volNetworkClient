import React, { useState } from 'react';
import './Register.css';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Register = () => {
    const [addVolunter, setAddVolunteer] = useState({
        name:'',
        title:'',
        email:'',
    })
    const[selectedDate, setSelectedDate] = useState();
    const eventDate = new Date(selectedDate).toLocaleDateString();
    
    const inputEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        if(name === "email"){
            const oo ={...addVolunter};
            oo.email = value;
            setAddVolunteer(oo);
        }
        if(name === "title"){
            const oo ={...addVolunter};
            oo.title = value;
            setAddVolunteer(oo);
        }
        if(name === "name"){
            const oo ={...addVolunter};
            oo.name = value;
            setAddVolunteer({name:value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVolunteer = {addVolunter, eventDate};
        console.log(eventDate);
        fetch('http://localhost:4000/addVolunteer', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newVolunteer)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        }) 
    }

    return (
        <div>
            <div>
                <div className="register-box">
                <p>Register as a Volunteer</p>
                    <Form>
                        <input onBlur={inputEvent} name="name" type="text" placeholder="Enter Full name" />
                        <input onBlur={inputEvent} name="email" type="email" placeholder="Username or Email" />
                        <DatePicker name="datePicker" className="simple-field datepicker" placeholderText="dd-MM-yyyy" minDate={new Date()} selected={selectedDate} dateFormat='dd-MM-yyyy' onChange={date => setSelectedDate(date)} /> 
                        <input name="description" type="text" placeholder="Description" />
                        <input onBlur={inputEvent} type="text" name="title" id="" placeholder="Enter Event title"/>
                        <input onClick={handleSubmit} type="submit" className="register-btn" value="Registration"/> 
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;