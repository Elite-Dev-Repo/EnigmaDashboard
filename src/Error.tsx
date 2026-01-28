"use client";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <div className="bg-white p-10 md:p-16 rounded-sm shadow-lg border border-gray-100 max-w-lg w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-red-50 p-4 rounded-full">
            <AlertCircle size={60} className="text-foreground" />
          </div>
        </div>

        <h1 className="text-6xl font-bold text-secondary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-secondary mb-2">
          Oops! Page not found
        </h2>
        <p className="text-secondary opacity-70 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="border-secondary text-primary hover:bg-slate-50 px-8"
          >
            Go Back
          </Button>
          <Button
            onClick={() => navigate("/dashboard")}
            className="bg-primary text-foreground hover:bg-primary/90 px-8 flex items-center gap-2"
          >
            <Home size={18} />
            Back to Dashboard
          </Button>
        </div>
      </div>

      <p className="mt-8 text-sm text-secondary opacity-50">
        &copy; {new Date().getFullYear()} Enigma Inc. All Rights Reserved.
      </p>
    </div>
  );
};

export default ErrorPage;
