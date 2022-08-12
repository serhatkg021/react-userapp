// import React, { useState } from 'react';

function AddUser(params) {
    return (
        <div className="card">
            <h4 className="card-header">Add New User</h4>
            <div className="card-body">
                <form>
                    <div className="from-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className="form-control" placeholder="Enter Name" />
                    </div>
                    <div className="from-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" className="form-control" placeholder="Enter Email" />
                    </div>

                    <button type="submit" className="btn btn-danger btn-block">Add New User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser;
