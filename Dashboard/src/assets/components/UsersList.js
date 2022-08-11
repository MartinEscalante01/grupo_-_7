import React, { Component } from "react";

class UsersList extends Component {
    constructor() {
        super();
        this.state = {
            name: "Joaquin Braconi",
            class: "Admin",
            birthday: "14-10-1998",
            country: "Argentina",
        }
    }
    componentDidMount(){
        fetch()
        .then(response => (response.json))
        .then(data => (this.setState({¿?})))
        .catch(e => {console.log(e);})
    }
    render() { 
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
                                    <td>{this.state.name}</td>
                                    <td>Admin</td>
                                    <td>14-10-1998</td>
                                    <td>Argentina</td>
                                </tr>
                                <tr>
                                    <td>{this.state.name}</td>
                                    <td>Admin</td>
                                    <td>14-10-1998</td>
                                    <td>Argentina</td>
                                </tr>
                                <tr>
                                    <td>{this.state.name}</td>
                                    <td>Admin</td>
                                    <td>14-10-1998</td>
                                    <td>Argentina</td>
                                </tr>
                        </table>
                    </div>
                )
            }
   
}

export default UsersList