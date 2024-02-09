import url from "../../fixtures/urls.json";
import { testUser } from "../../fixtures/user.json";


const USERS = url.usersAPI;
let responseBody;

describe('API Tests for User endpoints', () => {
    it('Send GET request and verify response', () => {
        cy.request(USERS)
        .then((response) => {
            const STATUS_CODE = response.status;
            responseBody = response.body;
            expect(STATUS_CODE).to.eq(200);
            expect(responseBody).to.have.length.greaterThan(0);
            expect(responseBody[0]).to.deep.eq
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

        });
    });


    it('Send PUT request and verify response', () => {
        cy.editUser(testUser).then((response) => {
            const STATUS_CODE = response.status;
            responseBody = response.body;
            expect(STATUS_CODE).to.eq(200);
            expect(responseBody.email).to.eq(testUser.email);
            expect(responseBody.name).to.eq(testUser.name);
            expect(responseBody.username).to.eq(testUser.username);
        });
    });


    it('Send DELETE request and verify response', () => {
       cy.deleteUser().then((response) => {
        const STATUS_CODE = response.status;
        responseBody = response.body;
        expect(STATUS_CODE).to.eq(200);
        expect(responseBody).to.have.be.empty;

        });
    });
});
