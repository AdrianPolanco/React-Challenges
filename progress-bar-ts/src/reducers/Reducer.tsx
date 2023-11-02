import IAction from "../interfaces/IAction";
import IContext from "../interfaces/IContext";

const contextReducer = (state: IContext, action: IAction): IContext => {
    return {
        ...state,
        [action.name]: action.value,
    };
};

export default contextReducer;