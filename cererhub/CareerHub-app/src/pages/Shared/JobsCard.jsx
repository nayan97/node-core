import React from 'react';
import { Link } from 'react-router';

const JobsCard = ({job}) => {

    // console.log(job);
    
    const {_id, title, location, jobType, category, applicationDeadline, salaryRange, company, requirements} = job;
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-sm min-h-[369px] max-h-[370px]">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h4 className="text-xl">{company}</h4>
                <h4 className="text-lg">{category}</h4>
                    {/* <p>{description}</p> */}
                <div className="flex gap-8 font-bold">
                  
                    <h4 className='bg-amber-300 text-black p-2 rounded-3xl'>Jobtype: {jobType}</h4>
                    <h4 className='bg-amber-50 text-black p-2 rounded-3xl'>Location: {location}</h4>
                </div>
                <div className="p-2 pl-0">
                    {requirements.map(skill => 
                            <div className="badge badge-soft badge-secondary m-1">{skill}</div> )}
                </div>
                  <h4>Salary: {salaryRange.min} - {salaryRange.max} <span className='uppercase'>{salaryRange.currency}</span></h4>
                <div className="divider"></div>
            
                <div className="flex justify-between items-center">
                    <h3 className='font-bold'>Deadline: {applicationDeadline}</h3>
                    <Link to={`/jobs/${_id}`}> <button className="btn btn-accent  text-white">Apply Now</button></Link>
                </div>
              
            </div>
            </div>
        </div>
    );
};

export default JobsCard;