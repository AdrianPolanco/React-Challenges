import "./index.css";
import InputPercentage from "./components/InputPercentage";
import { MainContext } from "./contexts/MyContext";
import ErrorAlert from "./components/ErrorAlert";
import { useContext, useEffect, useState } from "react";
import ProgressBarComponent from "./components/ProgressBar";
import Toggler from "./components/Toggler";
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

function App() {
    const [theme, setTheme] = useState(() =>{
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            return "dark"
        }

        return "light"
    })

    const [state, dispatch] = useContext(MainContext);

    useEffect(() => {
        const theme: string|null = GetTheme();

        if(theme !== null){
            theme === "dark" && document.querySelector("html")?.classList.add("dark")
        }
    },[])

    const SaveTheme = (): void =>{       
        const isDarkMode = document.documentElement.classList.contains('dark');
       localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }

    const GetTheme = (): string|null => {
        const theme: string | null = localStorage.getItem("theme");
        return theme;
    }
    return (
        <div className="flex flex-col h-screen">
            <div className="flex w-full justify-end pr-7 pt-5">
                <div className="w-10 border border-hidden justify-end" onClick={() =>{ SaveTheme()}}>
                    <Flowbite >
                        <DarkThemeToggle/>
                    </Flowbite> 
                </div>
        </div>
        <div className="flex flex-col justify-center h-full">
                
                <div className="flex flex-row justify-center">
                    <h1 className="p-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-400 font-sans xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl">
                        Progress Bar
                    </h1>
                </div>

                <div className="flex flex-row justify-center mt-48 xl:mt-32 lg:mt-44 md:mt-44 sm:mt-44">
                    <ProgressBarComponent />
                </div>
                <div className="flex flex-row justify-center gap-4 mt-10 xl:mt-12 lg:mt-14 md:mt-14 sm:mt-14 h-8">
                    <label className="xl:text-xl dark:text-white">Input percentage:</label>
                    <InputPercentage />
                </div>

                {state.isError && (
                    <div className="flex flex-row justify-center gap-4 mt-10 xl:mt-12 lg:mt-14 md:mt-14 sm:mt-14">
                        <ErrorAlert message="Invalid value error: Please, enter a number between 0 and 100" />
                    </div>
                )}
                </div>
        </div>    
    );
}

export default App;
