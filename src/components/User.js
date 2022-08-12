// import React, { useState } from "react";


function User(props) {
    const { id, name, email, deleteUser } = props;
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td><button onClick={() => deleteUser(id)} className="btn btn-danger btn-block">Delete</button></td>
        </tr>
    )
}

export default User;