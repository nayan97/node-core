import React, {use} from 'react';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise);
    return (
        <div>
            {jobs.length}
            
        </div>
    );
};

export default HotJobs;