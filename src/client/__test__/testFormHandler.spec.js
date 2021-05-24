// Import the js file to test with Jest the handlesubmit function
import { handleSubmit } from "../js/formHandler"
describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    })
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeTruthy();
    })
});
