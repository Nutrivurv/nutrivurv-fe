import axios from 'axios';
import {signUp} from '../Slices/slices';

var jwt_decode = require('jwt-decode');

const createUser = (creds, disp) =>{
    
    axios
        .post(``,{})
        .then(res =>{
            console.log(res.data);
            let token = jwt_decode(res.data.token);
        })

}