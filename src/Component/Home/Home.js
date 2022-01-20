import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {
    const contacts = useSelector((state) => state);
    return (
        
        <div className="container">
            <div className="row">
                <div className="col-md-10 my-4">
                    <h1 className="text-center">Student List</h1>
                    <table className="table table-hover text-center">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {contacts.map(contact => (
                                (
                            <tr key={contact.id}>
                                <td>{contact.id +1}</td>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.number}</td>
                                <td>
                                    <Link to={`/edit/${contact.id}`} className="btn btn-primary me-2">Edit</Link>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            )
                            ))}
                            
                        </tbody>
                    </table>
                </div>
                <div className="col-md-2 d-flex flex-column">
                    <Link to='/add' className="btn btn-outline-dark my-5">Add To List</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
