import React from 'react';
import UserService from '../services/UserService';

class UserCreate extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        // login: "",
        // password: "",
    }
    constructor(props) {

        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        UserService.postUser(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <table>
            <tbody>
            <tr>
                <td><label>First name</label></td>
                <td><input name="firstName" type="text" value={this.state.firstName} onChange={this.handleInputChange}/></td>
            </tr>
            <tr>
                <td><label>Last name</label></td>
                <td><input name="lastName" type="text" value={this.state.lastName} onChange={this.handleInputChange}/></td>
            </tr>
            <tr>
                <td><label>Email</label></td>
                <td><input name="email" type="email" value={this.state.email} onChange={this.handleInputChange}/></td>
            </tr>
            <tr>
                <td><label>Date of birth</label></td>
                <td><input name="dob" type="date" value={this.state.dob} onChange={this.handleInputChange}/></td>
            </tr>
            {/* <tr>
                <td><label>User Name</label></td>
                <td><input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/></td>
            </tr>
            <tr>
                <td><label>Password</label></td>
                <td><input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}></input></td>
            </tr> */}
            <tr>
                <td></td>
                <td><input type="submit" value="Log in" /></td>
            </tr>
            </tbody>
            </table>
            </form>
        )
    }
}

export default UserCreate;