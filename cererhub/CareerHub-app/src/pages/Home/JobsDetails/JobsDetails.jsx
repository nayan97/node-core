import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobsDetails = () => {
    const {_id, title, location, jobType, category, applicationDeadline, salaryRange, company, requirements} = useLoaderData();
    // console.log(job)
    return (
        <div>
                <h1>{title}</h1>
                <h1>{location}</h1>

                    <div className="flex justify-between items-center">
                                    <h3 className='font-bold'>Deadline: {applicationDeadline}</h3>
                                    <Link to={`/jobapply/${_id}`}> <button className="btn btn-accent  text-white">Apply Now</button></Link>
                    </div>

            
        </div>
    );
};

export default JobsDetails;