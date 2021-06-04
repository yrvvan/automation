const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const schema = require('../data/post_typicode_schema.json');
const data = require('../data/post_typicode_data.json');
const page = require('../page/post_typicode_page.js');

const properties = {
    'method': 'POST',
    'path': 'https://jsonplaceholder.typicode.com/posts'
}

const cases = {
    'description': 'Add Typicode Data',
    'positive': 'As an user i can add data of typicodes'
}

describe(`@post @typicode ${cases.description} ${properties.method} ${properties.path}`, () => {

    it(`${cases.positive}`, async () => {
        const response = await page.postTypicode(data);
        assert(response.status).to.equal(201, response.body.message);
        assert(response.body.title).to.equal(data.title, response.body.message)
        assert(response.body.body).to.equal(data.body, response.body.message)
        assert(response.body.userId).to.equal(data.userId, response.body.message)
        assert(response.body).to.be.jsonSchema(schema);
    });
});
