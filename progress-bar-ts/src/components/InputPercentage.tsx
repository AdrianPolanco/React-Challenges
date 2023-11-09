import { useContext } from "react";
import { MainContext } from "../contexts/MyContext";
import { validateInputValue } from "../functions/validate";

const InputPercentage = (): JSX.Element => {
    const [state, dispatch] = useContext(MainContext);
    //const [inputValue, setInputValue] = useState<string>("");

    return (
        <input
            id="InputPercentageComponent"
            type="number"
            min={0}
            max={100}
            data-is-error={state.isError}
            className="border border-solid dark:border-white border-black rounded-md w-2/12 xl:w-1/12 lg:w-2/12 md:w-2/12 sm:w-2/12"
            onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                const percentageValue: number = Number(e.target.value);

                const isValidNumber: boolean =
                    validateInputValue(percentageValue);

                if (isValidNumber) {
                    dispatch({ name: "percentage", value: percentageValue });
                    dispatch({ name: "isError", value: false });
                } else {
                    dispatch({ name: "isError", value: true });
                }
            }}
        />
    );
};

export default InputPercentage;
