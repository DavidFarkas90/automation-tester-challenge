/// <reference types="cypress" />

export {};

declare global {
    namespace Cypress {
         interface Chainable {
            
            // Send a POST request to USERS endpoint and create a user with a random ID
            createUser(): Chainable<Response<Body>>;

            // Edit a random user
            /**
             * @param {object} user - user object for editing
             */
            editUser(user): Chainable;

            // Delete a random user
            deleteUser(): Chainable;
        }
    }
}
