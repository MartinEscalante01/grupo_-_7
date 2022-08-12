import React from "react";
import { useState, useEffect } from "react"


function UsersList () {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/sportix/users")
        .then(response => response.json())
        .then(data => {
            setUsers(data)
            console.log(data);
        })
        .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        console.log("Funciona");
    }, [users]) 
    
    
    const user = users.data
 console.log(user);
    return(
        
                    <div >
                       
                        <h1>Users List</h1> 
                                
                        <table className="productList">                              

                            {user?.map((user, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{user.fullName}</td>
                                            <td>{user.birthday}</td>
                                            <td>{user.email}</td>
                                            <td>{user.idRoles}</td>
                                        </tr>
                                    )
                                })}
                                
                                {/* // <tr>
                                //     <td></td>
                                //     <td>Admin</td>
                                //     <td>14-10-1998</td>
                                //     <td>Argentina</td>
                                // </tr>
                                // <tr>
                                //     <td></td>
                                //     <td>Admin</td>
                                //     <td>14-10-1998</td>
                                //     <td>Argentina</td>
                                // </tr> */}

                        </table>
                    </div>
                )
            }
   


export default UsersList