import IAction from "../interfaces/IAction";
import IContext from "../interfaces/IContext";

const contextReducer = (state: IContext, action: IAction): IContext => {
    switch (action.name) {
        case "percentage": {
            const previousPercentageValue: number = state.percentage;

            return {
                ...state,
                previousPercentage: previousPercentageValue,
                [action.name]: Number(action.value),
            };
        }
        default:
            return {
                ...state,
                [action.name]: action.value,
            };
    }
};

export default contextReducer;
