import url from "../fixtures/urls.json";

const USERS = url.usersAPI;

Cypress.Commands.add("createUser", () => {
    cy.request({method: "POST", url: USERS});

});

Cypress.Commands.add("editUser", (user) => {
    cy.request(USERS)
    .then((response) => {
        const BODY = response.body;
        const USER_IDS = BODY.map((user) => user.id);
        const RANDOM_USER_ID = Cypress._.random(1, USER_IDS.length);

        cy.request({
            method: "PUT", 
            url: `${USERS}/${RANDOM_USER_ID}`,
            body: user
        });
    });
});

Cypress.Commands.add("deleteUser", () => {
    cy.request(USERS)
    .then((response) => {
        const BODY = response.body;
        const USER_IDS = BODY.map((user) => user.id);
        const RANDOM_USER_ID = Cypress._.random(1, USER_IDS.length);

        cy.request({
            method: "DELETE", 
            url: `${USERS}/${RANDOM_USER_ID}`
        });
    });
});
