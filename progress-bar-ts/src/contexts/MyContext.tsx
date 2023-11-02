import { createContext, useReducer } from "react";
import IContext from "../interfaces/IContext";
import IProps from "../interfaces/IProps";
import contextReducer from "../reducers/Reducer";
import { IReducer } from "../interfaces/IReducer";

const Context = ({ children }: IProps) => {
    const context: IContext = {
        percentage: 0,
        theme: "system",
        color: "Red",
    };

    const [state, dispatch] = useReducer(contextReducer, context);
    const MainContext = createContext<IReducer>([state, dispatch]);
    return (
        <MainContext.Provider value={[state, dispatch]}>
            {children}
        </MainContext.Provider>
    );
};

export default Context;
