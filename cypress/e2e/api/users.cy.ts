import url from "../../fixtures/urls.json";
import { testUser } from "../../fixtures/user.json";
import schema from "../../fixtures/schemas/user-schema.json";

const USERS = url.usersAPI;
const userSchema = schema.user;
const getUsersSchema = schema.getUsers;
const createUserSchema = schema.createUser;
let responseBody;

describe('API Tests for User endpoints', () => {
    it('Send GET request and verify response', () => {
        cy.request(USERS)
        .then((response) => {
            const STATUS_CODE = response.status;
            responseBody = response.body;
            expect(STATUS_CODE).to.eq(200);
            expect(responseBody).to.have.length.greaterThan(0);
            cy.validateJsonSchema(getUsersSchema, responseBody);

        });
    });

    it('Send POST request and verify response', () => {
        
        cy.createUser().then((response) => {
            const STATUS_CODE = response.status;
            responseBody = response.body;
            expect(STATUS_CODE).to.eq(201);
            expect(responseBody).to.have.property("id");
            const USER_ID = responseBody.id;
            expect(USER_ID).to.not.be.null;
            cy.validateJsonSchema(createUserSchema, responseBody);

        });
    });


    it('Send PUT request and verify response', () => {
        cy.editUser(testUser).then((response) => {
            const STATUS_CODE = response.status;
            responseBody = response.body;
            expect(STATUS_CODE).to.eq(200);
            cy.validateJsonSchema(userSchema, responseBody);

        });
    });


    it('Send DELETE request and verify response', () => {
       cy.deleteUser().then((response) => {
        const STATUS_CODE = response.status;
        responseBody = response.body;
        expect(STATUS_CODE).to.eq(200);
        expect(responseBody).to.be.empty;

        });
    });
});
