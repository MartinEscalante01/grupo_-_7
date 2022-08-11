import React, { Component } from "react";

class UsersList extends Component {
    constructor() {
        super();
        this.state = {
             user: ""
        }
    }
   apiCall(){
        fetch("localhost:3030/sportix")
        .then(response => (response.json))
        .then(data => (this.setState({user: data})))
        .catch(e => {console.log(e);})
    }
   
    componentDidMount(){
        console.log(this.state.user)
    }
    render() { 
                let content = this.state.user
                console.log(content)
                return(
                    <div >
                        <h1>Users List</h1>
                        <table className="productList">
                                <tr>
                                    {<th>{content.fullName}</th>}
                                    <th>Class</th>
                                    <th>Birthday</th>
                                    <th>Country</th>
                                    
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Admin</td>
                                    <td>14-10-1998</td>
                                    <td>Argentina</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Admin</td>
                                    <td>14-10-1998</td>
                                    <td>Argentina</td>
                                </tr>
                                <tr>
                                    <td></td>
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