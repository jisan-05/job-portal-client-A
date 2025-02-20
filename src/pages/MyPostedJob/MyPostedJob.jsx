import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useHooks";

const MyPostedJob = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?${user.email}`)
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, [user.email]);
    console.log("from my posted JOb", jobs)
    return (
        <div>
            <h3 className="text-3xl"> My POsted JOb {jobs.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>DeadLine</th>
                            <th>Application Count</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.applicationCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJob;
