import React from 'react';
import UserService from '../services/UserService';

class CreateLoginPassword extends React.Component {

    state = {
        login: "",
        password: "",
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
        console.log(this.state);
        UserService.postLoginPassword(this.state);
        this.props.history.push("/");
    }

    isValid() {
        return this.state.login != '' && this.state.password != '';
    }

    render() {
        return (
            <div className="create-user-page">
            <h1>create login and password</h1>
            <form onSubmit={this.handleSubmit} className="user-create">
            <table>
            <tbody>
            <tr>
                <td><label htmlFor="login">Login</label></td>
                <td><input id="login" name="login" type="text" value={this.state.login} onChange={this.handleInputChange}/></td>
            </tr>
            <tr>
                <td><label htmlFor="password">Password</label></td>
                <td><input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/></td>
            </tr>
            </tbody>
            </table>
            <input type="submit" value="submit" disabled={!this.isValid()}/>
            </form>
            </div>
        )
    }
}

export default CreateLoginPassword;