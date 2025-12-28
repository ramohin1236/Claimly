"use client";
import React from "react";

interface StepProps {
    onNext: () => void;
    onPrev: () => void;
}

const StepTwo: React.FC<StepProps> = ({ onNext, onPrev }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Date of Incident</label>
                <input type="date" className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea placeholder="Details..." className="w-full px-4 py-2 border rounded-lg min-h-[100px]" required />
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

export default StepTwo;
