import React from "react";

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="h-10 w-10 bg-pink-500 rounded-full animate-bounce"></div>
            <div className="w-10 border-4 border-h border-blue-500 border-b"></div>
        </div>
    );
};

export default Loader;
