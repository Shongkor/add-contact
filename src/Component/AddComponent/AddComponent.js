import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';

const AddComponent = () => {
    const [name,setName] =useState();
    const [number,setNumber] = useState();
    const [email,setEmail] = useState();
    const students=useSelector((state) => state);
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email || !name || !number){
            toast.warn("Warning Notification !", {
                position: toast.POSITION.BOTTOM_LEFT
              });
          }
        if(students.find(student=> student.email === email && email)){
            toast.error("Email Already Exist !", {
                position: toast.POSITION.TOP_LEFT
              });
        }
        if(students.find(student=> parseInt(student.contact) === parseInt(number) && number)){
            toast.error("Number Already Exist !", {
                position: toast.POSITION.TOP_LEFT
              });
        }
        
    }
    return (
        <div>
            <h1 className="display-3 text-center pt-5">Add Student Here</h1>
            <div className="row p-5">
               <div className="col-md-6 shadow mx-auto rounded">
               <form className="form p-5" onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter Student Name" className="form-control" />
                    </div>
                    <div className="form-group mb-4">
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter Student Email" className="form-control" />
                    </div>
                    <div className="form-group mb-4">
                        <input value={number} onChange={e => setNumber(e.target.value)} type="number" placeholder="Enter Phone Number" className="form-control" />
                    </div>
                    <div className="form-group text-center">
                        <input className="btn btn-block btn-dark form-control" type="submit" value="Add Student"/>
                    </div>
                </form>
               </div>
            </div>
        </div>
    )
}

export default AddComponent
