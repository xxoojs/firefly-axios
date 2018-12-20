// axios的简单用法
const axios = require('./axios');

axios.defaults.baseURL = 'www.baidu.com'; 

axios.interceptor.request.use(() => {
    console.log('before request...');
});

axios.interceptor.response.use(() => {
    console.log('response!');
});

axios({});