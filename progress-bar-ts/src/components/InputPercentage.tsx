const InputPercentage = (): JSX.Element => {
    return (
        <input
            type="number"
            min={0}
            max={100}
            className="border border-solid border-black rounded-md w-2/12 xl:w-1/12 lg:w-2/12 md:w-2/12 sm:w-2/12"
        />
    );
};

export default InputPercentage;
