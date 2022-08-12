// import React, { useState } from "react";

function Users(params) {
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
                {/* <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td><button className="btn btn-danger btn-block">Delete</button></td>
                </tr> */}
            </tbody>
        </table>
    )
}

export default Users;