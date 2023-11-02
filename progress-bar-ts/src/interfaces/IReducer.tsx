import IAction from "./IAction";
import IContext from "./IContext";

export type IReducer = [state: IContext, dispatch: React.Dispatch<IAction>];
