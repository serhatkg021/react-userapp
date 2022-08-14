import React, { useState, useEffect } from "react";
import User from "./User";

function Users(params) {
    const { users, error, isLoaded, getUsers, deleteUser } = params;

    useEffect(() => {
        getUsers()
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(users) ?
                        users.map(user => {
                            const { id, name, email } = user;
                            return <User
                                key={id}
                                id={id}
                                name={name}
                                email={email}
                                deleteUser={deleteUser}
                            />
                        }) : null
                    }
                </tbody>
            </table>);
    }
}

export default Users;