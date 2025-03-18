import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";
import { div } from "motion/react-client";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/jobs?sort=false")
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
            });
    }, []);
    return (
        <div>
            <h2 className="text-4xl text-center my-10">Hot Jobs</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {jobs.map((job) => (
                    <HotJobCard key={job._id} job={job}></HotJobCard>
                ))}
            </div>
        </div>
    );
};

export default HotJobs;
