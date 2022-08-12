import React, { useState } from 'react';

function AddUser(params) {
    const { addNewUser } = params;

    const [user, setUser] = useState(
        {
            name: '',
            email: ''
        }
    );

    const onNameChange = (name) => {
        setUser({
            name: name,
            email: user.email
        });
    }

    const onEmailChange = (email) => {
        setUser({
            name: user.name,
            email: email
        });
    }

    const onAddSubmit = (e) => {
        const newUser = {
            id: Math.random(),
            name: user.name,
            email: user.email
        }
        addNewUser(newUser);
        e.preventDefault();
    }

    return (
        <div className="card">
            <h4 className="card-header">Add New User</h4>
            <div className="card-body">
                <form onSubmit={onAddSubmit}>
                    <div className="from-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            placeholder="Enter Name"
                            value={user.name}
                            onChange={(e) => onNameChange(e.target.value)}
                        />
                    </div>
                    <div className="from-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter Email"
                            value={user.email}
                            onChange={(e) => onEmailChange(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-danger btn-block"
                    >Add New User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser;
