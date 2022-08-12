// import React, { useState } from "react";
import User from "./User";

function Users(params) {
    const { users, deleteUser } = params;

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
                {
                    console.log(users)
                }
                {

                    users.map(user => {
                        const { id, name, email } = user;

                        return <User
                            key={id}
                            id={id}
                            name={name}
                            email={email}
                            deleteUser={deleteUser}
                        />
                    })
                }
            </tbody>
        </table>
    )
}

export default Users;