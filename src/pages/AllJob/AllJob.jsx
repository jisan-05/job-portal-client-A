import React, { useState } from "react";
import useJobs from "../../hooks/useJobs";
import HotJobCard from "../Home/HotJobCard";
import { div } from "motion/react-client";
import { HiSearch } from "react-icons/hi";
import { FaSearchengin } from "react-icons/fa6";

const AllJob = () => {
    const [sort, setSort] = useState(false);
    const [minSalary,setMinSalary] = useState("")
    const [maxSalary,setMaxSalary] = useState("")
    const [search, setSearch] = useState("");
    const { jobs, loading } = useJobs(sort, search,minSalary,maxSalary);
    // console.log(sort);
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-bars loading-xl text-center mx-auto"></span>
            </div>
        );
    }
    return (
        <div>
            <h3 className="text-3xl text-center my-5 ">All Jobs</h3>

            <div className="w-11/12 mx-auto bg-base-200 space-x-2 py-5 p-3 flex items-center">
                <button
                    onClick={() => setSort(!sort)}
                    className={`btn btn-neutral ${sort && "btn-success"}`}
                >
                    {sort == true ? "Sorted By Salary" : "Sort By Salary"}
                </button>
                <HiSearch></HiSearch>
                <input
                    type="text"
                    onKeyUp={(e)=>setSearch(e.target.value)}
                    className="w-full input max-w-2xl"
                    placeholder="Search Job by location"
                />
                <div className="space-y-3">
                <input
                    type="text"
                    onKeyUp={(e)=>setMinSalary(e.target.value)}
                    className="w-full input max-w-xs"
                    placeholder="Min Salary"
                />
                <input
                    type="text"
                    onKeyUp={(e)=>setMaxSalary(e.target.value)}
                    className="w-full input max-w-xs"
                    placeholder="Max Salary"
                />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {jobs.map((job) => (
                    <HotJobCard key={job._id} job={job}></HotJobCard>
                ))}
            </div>
        </div>
    );
};

export default AllJob;
