import React, { useContext } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { myUserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(myUserContext);

    return (
        <Nav className="app-nav">
            <Link className="logo" to="/home"><img src={require("../../logos/Group 1329.png")} alt="logo"/></Link>
            <div className="nav-item">
                <Link className="item" to="/">Home</Link>
                <Link className="item" to="/">Donation</Link>
                <Link className="item" to="/eventTask">Events</Link> 
                <Link className="item" to="/home">{loggedInUser.name}</Link>
                <Link to="/login"><Button onClick={() => setLoggedInUser({})}>{loggedInUser.name?"Logout":"Login"}</Button></Link>
                <Link className="item" to="/register"><Button className="btn register">Register</Button></Link>
                <Link className="item" to="/admin"><Button className="btn admin">Admin</Button></Link>
            </div>
        </Nav>       
    );
};

export default Header;