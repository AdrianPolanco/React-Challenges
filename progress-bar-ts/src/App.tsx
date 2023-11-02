import "./index.css";
import InputPercentage from "./components/InputPercentage";
import ProgressBar from "./components/ProgressBar";
import Context from "./contexts/MyContext";

function App() {
    return (
        <Context>
            <div className="flex flex-col mt-20">
                <div className="flex flex-row justify-center">
                    <h1 className="p-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-400 font-sans xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl">
                        Progress Bar
                    </h1>
                </div>

                <div className="flex flex-row justify-center mt-48 xl:mt-32 lg:mt-44 md:mt-44 sm:mt-44">
                    <ProgressBar />
                </div>
                <div className="flex flex-row justify-center gap-4 mt-10 xl:mt-12 lg:mt-14 md:mt-14 sm:mt-14">
                    <label className="xl:text-xl">Input percentage:</label>
                    <InputPercentage />
                </div>
            </div>
        </Context>
    );
}

export default App;
