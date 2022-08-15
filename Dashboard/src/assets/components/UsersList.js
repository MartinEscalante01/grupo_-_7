import React from "react";
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser} from "@fortawesome/free-solid-svg-icons"



function UsersList () {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3040/sportix/users")
        .then(response => response.json())
        .then(data => {
            setUsers(data)
            ;
        })
        .catch(error => console.log(error))
    }, [])
  
    const user = users.data
    console.log(user);

    
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
                                            <td> <FontAwesomeIcon icon= {faUser}/> </td>
                                        </tr>
                                    )
                                })}
                                
                        </table>
                    </div>
                )
            }
   


export default UsersList