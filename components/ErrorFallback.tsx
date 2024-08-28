"use client";

import axios from "axios";
import Link from "next/link";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  let errorTitle = "";

  if (!axios.isAxiosError(error)) {
    errorTitle = "Oops! Something went wrong.";
  } else {
    errorTitle = `${error.status && error.status} ${error.name ? error.name : "Oops! Something went wrong."}! ${
      error.message && error.message
    }`;
  }
  return (
    <div className="w-full h-screen">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex w-full mt-32 justify-center px-4">
          <h1 className="text-red-500 text-4xl font-semibold">{errorTitle}</h1>
        </div>
        <div className="flex flex-col w-full mt-16 items-center px-4">
          <div className="text-center text-lg md:text-2xl">
            <p>Sorry for the inconvenience. An unexpected error occurred. Please try one of the following options:</p>
          </div>
          <div className="mt-8 flex space-x-8 items-center">
            <button className="bg-black text-white px-4 py-2 rounded-lg" onClick={() => window.location.reload()}>
              Reload Page
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg" onClick={() => (window.location.href = "/")}>
              Go to Home Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
