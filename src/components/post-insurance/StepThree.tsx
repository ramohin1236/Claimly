"use client";
import React from "react";

interface StepProps {
    onNext: () => void;
    onPrev: () => void;
}

const StepThree: React.FC<StepProps> = ({ onNext, onPrev }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-8 text-center bg-gray-50">
                <p className="text-gray-500">Upload documents or photos</p>
                <input type="file" className="mt-4" />
            </div>
            <div className="flex gap-3 pt-4">
                <button type="button" onClick={onPrev} className="px-6 py-2 bg-amber-300 text-white font-medium rounded hover:bg-amber-400">
                    Prev
                </button>
                <button type="submit" className="px-6 py-2 bg-amber-300 text-white font-medium rounded hover:bg-amber-400">
                    Next
                </button>
            </div>
        </form>
    );
};

export default StepThree;
