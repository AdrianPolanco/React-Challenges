import { useContext } from "react";
import { MainContext } from "../contexts/MyContext";
const ProgressBar = (): JSX.Element => {
    const [state, dispatch] = useContext(MainContext);
    const { percentage } = state;

    return (
        <div className="bg-gray-300 rounded-full w-10/12 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 h-5">
            <div
                style={{ width: `${percentage}%` }}
                className={`bg-gradient-to-r from-blue-800 via-blue-500 to-blue-400 rounded-full h-5 shadow-[0_0_3px_blue]`}
            ></div>
        </div>
    );
};

export default ProgressBar;
