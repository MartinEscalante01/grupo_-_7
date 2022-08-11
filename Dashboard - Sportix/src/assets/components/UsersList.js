import React from "react";

function UsersList() {
    return(
        <div >
            <h1>Users List</h1>
            <table className="productList">
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Birthday</th>
                        <th>Country</th>
                        
                    </tr>
                    <tr>
                        <td>Joaquin</td>
                        <td>Admin</td>
                        <td>14-10-1998</td>
                        <td>Argentina</td>
                    </tr>
                    <tr>
                        <td>Joaquin</td>
                        <td>Admin</td>
                        <td>14-10-1998</td>
                        <td>Argentina</td>
                    </tr>
                    <tr>
                        <td>Joaquin</td>
                        <td>Admin</td>
                        <td>14-10-1998</td>
                        <td>Argentina</td>
                    </tr>
            </table>
        </div>
    )

}

export default UsersList