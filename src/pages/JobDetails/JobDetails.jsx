import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData()
    const {title,company,deadline} = job;
    console.log(job)
    return (
        <div className='m-10'>
            <h2 className='text-4xl'>Job Details for : {title}</h2>
            <p>Apply For : {company}</p>
            <p>Deadline : {deadline}</p>
            <button className='btn'>Apply Now</button>
        </div>
    );
};

export default JobDetails;