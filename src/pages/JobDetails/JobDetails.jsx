import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData();
    const { _id, title, company, deadline } = job;
    console.log(job);
    return (
        <div className="m-10">
            <h2 className="text-4xl">Job Details for : {title}</h2>
            <p>Apply For : {company}</p>
            <p>Deadline : {deadline}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className="btn">Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;
