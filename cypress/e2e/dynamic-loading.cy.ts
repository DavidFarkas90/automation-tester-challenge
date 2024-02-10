import url from "../fixtures/urls.json";
import selectors from "../support/selectors/dynamic-loading.json";

const DYNAMIC_LOADING_URL = url.dynamicLoading;

describe("Dynamic loading of elements", () => {

    before(() => {
        cy.visit(`${DYNAMIC_LOADING_URL}/1`);
        cy.url().should("eq", `${DYNAMIC_LOADING_URL}/1`);
    });

    it("Click on Start button and verify the welcome header", () => {

        cy.get(selectors.startButton).should("be.visible").click();
        cy.get(selectors.loadingBar).should("be.visible");
        cy.get(selectors.greetingHeader, { timeout: 6000 }).should("be.visible");
    });

});
