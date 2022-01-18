import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
       
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
            <Link to="/" className="navbar-brand ml-4">Contact App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/add" className="nav-link">Add</Link>
                </li>
                <li className="nav-item">
                    <Link to="/edit" className="nav-link">Edit</Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
        
        
    )
}

export default Navigation
