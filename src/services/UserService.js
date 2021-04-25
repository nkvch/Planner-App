import axios from 'axios';

const USERS_REST_API_URL = 'http://localhost:8080/api/userprofile';
const URL_FOR_LOGIN_AND_PASSWORD_POST = 'http://localhost:8080/api/something';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }

    postUser = async(user) => {
        let res = await axios.post(USERS_REST_API_URL, user);
        console.log(res);
    }

    postLoginPassword = async(loginPassword) => {
        let res = await axios.post(URL_FOR_LOGIN_AND_PASSWORD_POST, loginPassword);
        console.log(res);
    }

}

export default new UserService();