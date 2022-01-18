import React from 'react'

const AddComponent = () => {
    return (
        <div>
            <h1 className="display-3 text-center pt-5">Add Student Here</h1>
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
                    <div className="form-group text-center">
                        <input className="btn btn-block btn-dark form-control" type="submit" value="Add Student"/>
                    </div>
                </div>
               </div>
            </div>
        </div>
    )
}

export default AddComponent
