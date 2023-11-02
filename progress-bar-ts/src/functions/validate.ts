export const validateInputValue = (value: number): boolean => {
    return !(value > 100 || value < 0);
};
