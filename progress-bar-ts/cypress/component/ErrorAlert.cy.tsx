import ErrorAlert from "../../src/components/ErrorAlert";
import "../../src/";
describe("ErrorAlert.cy.tsx", () => {
    it("ErrorAlert when user", () => {
        cy.mount(<ErrorAlert />);
    });
});
