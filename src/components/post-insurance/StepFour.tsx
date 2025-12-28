"use client";
import React from "react";

interface StepProps {
    onPrev: () => void;
}

const StepFour: React.FC<StepProps> = ({ onPrev }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Form Submitted!");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800">Review Summary</h3>
                <p className="text-sm text-blue-600 mt-2">Please double check your information.</p>
            </div>
            <div className="flex gap-3 pt-4">
                <button type="button" onClick={onPrev} className="px-6 py-2 bg-amber-300 text-white font-medium rounded hover:bg-amber-400">
                    Prev
                </button>
                <button type="submit" className="px-6 py-2 bg-amber-300 text-white font-medium rounded hover:bg-amber-400">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default StepFour;
