const supertest = require('supertest');
require('dotenv').config();

const api = supertest('https://jsonplaceholder.typicode.com/');

const postTypicode = (params) => api.post('posts')
.send(params);

module.exports = {
	postTypicode
};
