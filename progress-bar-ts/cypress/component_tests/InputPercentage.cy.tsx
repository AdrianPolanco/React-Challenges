import { useContext } from "react";
import Context, { MainContext } from "../../src/contexts/MyContext";
import InputPercentage from "../../src/components/InputPercentage";
import "../../src/index.css";

const TestAppInput = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, dispatch] = useContext(MainContext);

    return (
        <InputPercentage
            value={state.percentage}
            data-is-error={state.isError}
        />
    );
};

const TestMainInput = () => {
    return (
        <Context>
            <TestAppInput />
        </Context>
    );
};

describe("Input Percentage Component Testing", (): void => {
    it("Percentage state when typing the minimal valid numeric value", (): void => {
        cy.mount(<TestMainInput />);
        //cy.get("#InputPercentageComponent").type("80").blur();

        cy.get("#InputPercentageComponent")
            .type("0")
            .should("have.value", 0)
            .should("have.attr", "data-is-error", "false");
    });

    it("Percentage state when typing a medium valid numeric value", (): void => {
        cy.mount(<TestMainInput />);
        cy.get("#InputPercentageComponent")
            .type("50")
            .should("have.value", 50)
            .should("have.attr", "data-is-error", "false");
    });

    it("Percentage state when typing the maximum valid value", (): void => {
        cy.mount(<TestMainInput />);
        cy.get("#InputPercentageComponent")
            .type("100")
            .should("have.value", 100)
            .should("have.attr", "data-is-error", "false");
    });

    it("Percentage state when typing a negative numeric value", async (): Promise<void> => {
        cy.mount(<TestMainInput />);

        cy.get("#InputPercentageComponent")
            .type("-5")
            .then(() => {
                cy.wait(1000);
                cy.get("#InputPercentageComponent").should(
                    "have.attr",
                    "data-is-error",
                    "true"
                );
            });
    });

    it("Percentage state when typing a too big numeric value", async (): Promise<void> => {
        cy.mount(<TestMainInput />);

        cy.get("#InputPercentageComponent")
            .type("105")
            .then(() => {
                cy.wait(1000);
                cy.get("#InputPercentageComponent").should(
                    "have.attr",
                    "data-is-error",
                    "true"
                );
            });
    });
});
