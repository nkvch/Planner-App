import axios from 'axios';

const USERS_REST_API_URL = 'http://localhost:8080/api/user';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }

    postUser = async(user) => {
        let res = await axios.post(USERS_REST_API_URL, JSON.stringify(user));
        console.log(res);
    }

}

export default new UserService();