const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const schema = require('../data/get_typicode_schema.json');
const page = require('../page/get_typicode_page.js');

const properties = {
    'method': 'GET',
    'path': 'https://jsonplaceholder.typicode.com/posts'
}

const cases = {
    'description': 'Get Typicode Data',
    'positive': 'As an user i can get data of typicodes'
}

describe(`@get @typicode ${cases.description} ${properties.method} ${properties.path}`, () => {

    it(`${cases.positive}`, async () => {
        const response = await page.getTypicode();
        assert(response.status).to.equal(200, response.body.message);
        assert(response.body).to.be.jsonSchema(schema);
    });
});
