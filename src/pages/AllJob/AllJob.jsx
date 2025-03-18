import React from 'react';
import useJobs from '../../hooks/useJobs';
import HotJobCard from '../Home/HotJobCard';
import { div } from 'motion/react-client';

const AllJob = () => {
  const {jobs,loading} = useJobs()
  if(loading){
    return <div className='flex justify-center items-center h-screen'><span className="loading loading-bars loading-xl text-center mx-auto"></span></div>
  }
  return (
    <div>
      <h3 className='text-3xl text-center my-5 '>All Jobs</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
            }         
        </div>
    </div>
  );
};

export default AllJob;