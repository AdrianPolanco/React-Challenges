import ErrorAlert from "../../src/components/ErrorAlert.tsx";
import "../../src/index.css";

describe("Error Alert Component Testing", (): void => {
    it("Error component render", (): void => {
        cy.mount(<ErrorAlert message="Error rendered" />);
    });
});
