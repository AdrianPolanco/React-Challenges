const ProgressBar = (): JSX.Element => {
    return (
        <div className="bg-gray-300 rounded-full w-10/12 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 h-5">
            <div
                className={`bg-gradient-to-r from-blue-700 to-blue-400 rounded-full w-[55%] sm:w-[55%] md:w-[55%] lg:w-[55%] xl:w-[55%] h-5 shadow-[0_0_3px_blue]`}
            ></div>
        </div>
    );
};

export default ProgressBar;
