import axios from 'axios';

// import _ from 'lodash';
// import config from './config';

const instance = axios.create({
    baseURL: 'http://localhost:8060',
    withCredentials: true
});



// export const isSuccessStatusCode = (s) => {
//     // May be string or number
//     const statusType = typeof s;
//     return (statusType === 'number' && s === 0) || (statusType === 'string' && s.toUpperCase() === 'OK');
// };

// instance.interceptors.response.use(
//     (response) => {
//         return response.data;
//     }
// );

export default instance;
