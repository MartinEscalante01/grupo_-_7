import React from "react";
import { useState, useEffect } from "react"


function UsersList () {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/sportix/users")
        .then(response => response.json())
        .then(data => {
            setUsers(data)
            ;
        })
        .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        console.log("Funciona");
    }, [users]) 
    
    
    const user = users.data
    return(
        
                    <div >
                       
                        <h1>Users List</h1> 
                                
                        <table className="productList">                              
                        <tr>
                                <td>Name</td>
                                <td>Birthday</td>
                                <td>Email</td>
                                <td>Profile Photo</td>
                         </tr>
                            {user?.map((user, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{user.fullName}</td>
                                            <td>{user.birthday}</td>
                                            <td>{user.email}</td>
                                            <td><img src={user.file} alt="user"/></td>
                                        </tr>
                                    )
                                })}
                                
                        </table>
                    </div>
                )
            }
   


export default UsersList