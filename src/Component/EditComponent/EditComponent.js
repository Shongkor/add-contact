import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const EditComponent = () => {
    const id = useParams();
    const contacts = useSelector(state => state) ;
    const selectForUpdate = contacts.filter(contact => contact.id === parseInt(id.id))
    console.log(selectForUpdate)
    return (
        <div>
            <h1 className="display-3 text-center pt-5">Edit Student {id.id}</h1>
            <div className="row p-5">
               <div className="col-md-6 shadow mx-auto rounded">
               <div className="form p-5">
                    <div className="form-group mb-4">
                        <input type="text" placeholder="Enter Student Name" className="form-control" />
                    </div>
                    <div className="form-group mb-4">
                        <input type="text" placeholder="Enter Student Email" className="form-control" />
                    </div>
                    <div className="form-group mb-4">
                        <input type="text" placeholder="Enter Phone Number" className="form-control" />
                    </div>
                    <div className="form-group d-flex">
                        <div>
                        <input className="btn btn-block btn-dark" type="submit" value="Update Student"/>
                        </div>
                       <div className="ms-auto">
                        <Link to="/" className="btn btn-block btn-danger">Cancel</Link>
                       </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
    )
}

export default EditComponent
