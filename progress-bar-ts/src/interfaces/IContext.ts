export default interface IContext {
    percentage: number;
    previousPercentage: number;
    theme: "dark" | "light" | "system";
    color: "Red" | "Blue" | "Green" | "Purple" | "Orange" | "Yellow";
    isError: boolean;
}
