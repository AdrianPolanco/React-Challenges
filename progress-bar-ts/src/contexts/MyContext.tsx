import { createContext, useReducer } from "react";
import IContext from "../interfaces/IContext";
import IProps from "../interfaces/IProps";
import contextReducer from "../reducers/Reducer";
import { IReducer } from "../interfaces/IReducer";

const context: IContext = {
    percentage: 0,
    theme: "system",
    color: "Red",
    isError: false
};

let MainContext: React.Context<IReducer>;

const Context = ({ children }: IProps) => {
    const [state, dispatch] = useReducer(contextReducer, context);
    MainContext = createContext<IReducer>([state, dispatch]);

    return (
        <MainContext.Provider value={[state, dispatch]}>
            {children}
        </MainContext.Provider>
    );
};
export { MainContext };
export default Context;
