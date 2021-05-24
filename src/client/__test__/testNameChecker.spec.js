// Import the js file to test
import { checkForName } from "../js/nameChecker"
describe("Testing the url validity functionality", () => {
    test("Testing the url validation function declaration", () => {
        expect(checkForName).toBeDefined();
    })
    test("Testing the handleSubmit() function", () => {
        expect(checkForName).toBeDefined();
    })
    test('check valid url should return true', () => {
        expect(checkForName('http://example.com')).toBeTruthy()
    })

    test('check invalid url should return false', () => {
        expect(checkForName('invalid url')).toBeFalsy()
    })
});

// Import the url to test with nodemocks
var httpMocks = require('node-mocks-http');
describe('Test, the function "checkforname()" throw error if user inputs is incorrect' , () => {
    test('checkforname should throw error if incorrect user inputs', () => {
        const next = jest.fn();
        const req = httpMocks.createRequest({
            body: {
            url: "https://www.datasciencecentra.com/profiles/blogs/11-great-articles-about-natural-language-processing-nlp"
            }
        })
    })
})