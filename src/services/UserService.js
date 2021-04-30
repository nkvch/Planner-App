import axios from 'axios';

const USERS_POST_REST_API_URL = 'http://localhost:8080/api/user';
const USERS_GET_REST_API_URL = 'http://localhost:8080/api/userprofile';

class UserService {

    userInfo = {
    };

    getInfo(info){
        Object.assign(this.userInfo, info);
        delete this.userInfo.redirect;
    }

    getUsers(){
        return axios.get(USERS_GET_REST_API_URL);
    }

    postUser = async() => {
        let res = await axios.post(USERS_POST_REST_API_URL, this.userInfo);
        console.log(res);
    }

}

export default new UserService();