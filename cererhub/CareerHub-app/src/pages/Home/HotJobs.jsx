import React, {use} from 'react';
import JobsCard from '../Shared/JobsCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise);
    return (
       <div className="">
            <h2>Latest jobs</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
            {jobs.map(job => <JobsCard key={job._id} job={job}></JobsCard>)}
            
        </div>
       </div>
    );
};

export default HotJobs;