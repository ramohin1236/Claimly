"use client";
import React from "react";
import insurer from "../../../public/insurer.svg";
import Image from "next/image";
import CustomDropDown from "./CustomDropDown";

interface StepProps {
    onNext: () => void;
}

const StepOne: React.FC<StepProps> = ({ onNext }) => {
    const [insurerName, setInsurerName] = React.useState("");
    const [policyType, setPolicyType] = React.useState("");

    const insurers = ["NRMA", "AAMI", "Allianz", "Budget Direct", "Suncorp", "Other"];
    const policies = ["Comprehensive", "Comprehensive Basic", "Third Party Fire & Theft", "Third Party Property Damage", "Other / Not sure"];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2">
                <div className="w-6 mt-2">
                    <Image src={insurer} alt="insurer" width={100} height={100} />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-bold text-[#1E293B]">Insurer & Policy Details</p>
                    <p className="text-[14px] text-[#64748B]">This helps us interpret your documents correctly and benchmark your case against similar cases.</p>
                </div>
            </div>

            <CustomDropDown
                label="Who are you insured with?"
                options={insurers}
                selected={insurerName}
                onSelect={setInsurerName}
            />

            {insurerName === "Other" && (
                <div>
                    <label className="block text-[#1E293B] text-sm font-medium mb-1">Insurer name</label>
                    <input
                        type="text"
                        placeholder="Enter insurer name"
                        className="w-full px-4 py-3 border border-[#DBEAFE] rounded-[12px] outline-none text-[#64748B] bg-white"
                        required
                    />
                </div>
            )}

            <CustomDropDown
                label="What type of policy is this?"
                options={policies}
                selected={policyType}
                onSelect={setPolicyType}
            />

            <div className="flex gap-3 pt-4">
                <button type="submit" className="px-6 py-2 bg-amber-300 text-white font-medium rounded hover:bg-amber-400">
                    Next
                </button>
            </div>
        </form>
    );
};

export default StepOne;
