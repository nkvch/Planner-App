import React from 'react';
import { Redirect } from 'react-router';
import UserService from '../services/UserService';

class UserCreate extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        redirect: false,
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
        UserService.postUser({firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, dob: this.state.dob})
        .then(() => this.setState({ redirect: true }));

    }

    isValid() {
        return this.state.firstName != '' && this.state.lastName != '' && this.state.email != '' && this.state.dob != '';
    }

    render() {
        const {redirect} = this.state;
        if (redirect) {
            return <Redirect to="/usercreate/login-password" />;
        }
        return (
            <div className="create-user-page">
            <h1>create user</h1>
            <form onSubmit={this.handleSubmit} className="user-create" >
            <table>
            <tbody>
            <tr>
                <td><label htmlFor="firstName">First name</label></td>
                <td><input id="firstName" name="firstName" type="text" value={this.state.firstName} onChange={this.handleInputChange}/></td>
            </tr>
            <tr>
                <td><label htmlFor="lastName">Last name</label></td>
                <td><input id="lastName" name="lastName" type="text" value={this.state.lastName} onChange={this.handleInputChange}/></td>
            </tr>
            <tr>
                <td><label htmlFor="email">Email</label></td>
                <td><input id="email" name="email" type="email" value={this.state.email} onChange={this.handleInputChange}/></td>
            </tr>
            <tr>
                <td><label htmlFor="dob">Date of birth</label></td>
                <td><input id="dob" name="dob" type="date" value={this.state.dob} onChange={this.handleInputChange}/></td>
            </tr>
            {/* <tr>
                <td><label>User Name</label></td>
                <td><input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/></td>
            </tr>
            <tr>
                <td><label>Password</label></td>
                <td><input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}></input></td>
            </tr> */}
            </tbody>
            </table>
            <input id="create" type="submit" value="create" disabled={!this.isValid()}/>
            </form>
            </div>
        )
    }
}

export default UserCreate;