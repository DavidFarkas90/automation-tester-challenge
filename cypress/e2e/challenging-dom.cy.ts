import url from "../fixtures/urls.json";
import selectors from "../support/selectors/challenging-dom.json";

const CHALLENGING_DOM = url.challengingDom;

describe("Challenging DOM locator selection", () => {
    beforeEach(() => {
        cy.visit(CHALLENGING_DOM);
        cy.url().should("eq", CHALLENGING_DOM);
        cy.intercept("GET", CHALLENGING_DOM).as("pageLoad");
    });

    it("Click on each of the colored buttons", () => {
        cy.get(selectors.blueButton).should("be.visible").click();
        cy.wait("@pageLoad").its("response.statusCode").should("eq", 200);

        cy.get(selectors.redButton).should("be.visible").click();
        cy.wait("@pageLoad").its("response.statusCode").should("eq", 200);

        cy.get(selectors.greenButton).should("be.visible").click();
        cy.wait("@pageLoad").its("response.statusCode").should("eq", 200);
    });

    it("Click on all edit and delete links", () => {

        cy.get(selectors.editLink).each((element) => {
            cy.wrap(element).click();
            cy.url().should("eq", `${CHALLENGING_DOM}#edit`);

        });

        cy.get(selectors.deleteLink).each((element) => {
            cy.wrap(element).click();
            cy.url().should("eq", `${CHALLENGING_DOM}#delete`);

        });
    });
    
});
