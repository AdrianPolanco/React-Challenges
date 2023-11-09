import { useContext } from "react";
import { MainContext } from "../contexts/MyContext";
import { animated, useSpring } from "@react-spring/web";
const ProgressBarComponent = (): JSX.Element => {
    const [state, dispatch] = useContext(MainContext);
    const { percentage, previousPercentage } = state;

    const props = useSpring({
        value: previousPercentage,
        from: { value: previousPercentage },
        to: { value: percentage },
    });

    return (
        <div className="bg-gray-300 dark:bg-white rounded-full w-10/12 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 h-5">
            <animated.div
                style={{
                    width: props.value.to((v) => `${v}%`),
                    transition: "1.5s ease 0.3s",
                }}
                className={`flex flex-row justify-center bg-gradient-to-r from-blue-800 via-blue-500 to-blue-400 rounded-full h-5 shadow-[0_0_3px_blue]`}
            >
                {percentage > 3 && (
                    <p className="text-white dark:text-slate-900">{`${percentage}%`}</p>
                )}
            </animated.div>
        </div>
    );
};

export default ProgressBarComponent;
