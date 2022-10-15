import React from 'react'
import {
    Link
  } from "react-router-dom";
function About(props) {
    return (
       <>
            <div className="card">
              
                    <div className="card-body">
                        <h5 className="card-title">About To DO</h5>
                        <p className="card-text">Create and manage you toDO list</p>
                        <Link to="/" className="btn btn-primary">Go Home</Link>
                    </div>
            </div>
        </>
    )
}

About.propTypes = {

}

export default About

