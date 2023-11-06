const ErrorAlert = ({ message }: { message: string }): JSX.Element => {
    return (
        <div
            id="ErrorAlertComponent"
            className="bg-red-400 text-white font-normal p-2 border rounded-md"
        >
            {message}
        </div>
    );
};

export default ErrorAlert;
