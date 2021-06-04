const supertest = require('supertest');
require('dotenv').config();

const api = supertest('https://jsonplaceholder.typicode.com/');

const getTypicode = () => api.get('posts');

module.exports = {
	getTypicode
};
