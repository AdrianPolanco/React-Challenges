export default interface IAction {
    name: "percentage" | "theme" | "color" | "isError";
    value: string | number | boolean;
}
