import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../assets/error.svg"; 

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-xl text-center">

        <img
          src={error}
          alt="Error Illustration"
          className="w-64 mx-auto mb-6"
        />

        <h1 className="text-4xl font-bold text-gray-800 mb-2 mt-[50px]">Oops! Page not found.</h1>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition cursor-pointer "
        >
          Go back home
        </button>
      </div>
    </div>
  );
}

