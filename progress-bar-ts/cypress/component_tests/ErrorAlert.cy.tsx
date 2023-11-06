import ErrorAlert from "../../src/components/ErrorAlert.tsx";
import "../../src/index.css";
import { useContext } from "react";
import { MainContext } from "../../src/contexts/MyContext.tsx";
import Context from "../../src/contexts/MyContext.tsx";

type MockStateError = {
    mockState: boolean;
};
const TestAppError = ({ mockState }: MockStateError) => {
    const [state, dispatch] = useContext(MainContext);
    dispatch({ name: "isError", value: mockState });
    return state.isError && <ErrorAlert message="Error Alert rendered" />;
};

const TestMainError = ({ mockState }: MockStateError) => {
    return (
        <Context>
            <TestAppError mockState={mockState} />
        </Context>
    );
};

describe("Error Alert Component Testing", (): void => {
    it("Error Alert component render when the isError state is FALSE", (): void => {
        cy.mount(<TestMainError mockState={false} />);
    });

    it("Error Alert component render when the isError state is TRUE", (): void => {
        cy.mount(<TestMainError mockState={true} />);
        cy.get("#ErrorAlertComponent")
            .should("be.visible")
            .should("have.text", "Error Alert rendered");
    });
});
