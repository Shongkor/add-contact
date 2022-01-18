import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-10 my-4">
                    <h1 className="text-center">Wellcome to Ract Redux App</h1>
                </div>
                <div className="col-md-2 d-flex flex-column">
                    <Link to='/add' className="btn btn-outline-dark my-5">Add To List</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
