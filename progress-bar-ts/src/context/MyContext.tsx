import { createContext } from "react";
import IContext from "../interfaces/IContext";
import IProps from "../interfaces/IProps";

const Context = ({ children }: IProps) => {
    const context: IContext = {
        percentage: 0,
        theme: "system",
        color: "Red",
    };

    const MainContext = createContext<IContext>(context);
    return (
        <MainContext.Provider value={context}>{children}</MainContext.Provider>
    );
};
