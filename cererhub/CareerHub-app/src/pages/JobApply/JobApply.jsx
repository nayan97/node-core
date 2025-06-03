import React from 'react';
import { useParams } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';

const JobApply = () => {
    const {id: jobId} = useParams();
    const {user} = UseAuth();
    // console.log(jobId, user);

    const handleApplyForm = e =>{
            e.preventDefault();
            const form = e.target;

            const linkedin = form.linkedin.value;
            const github = form.github.value;
            const resume = form.resume.value;

            // console.log(resume, github, linkedin);
            const application = {
                jobId,
                applicant: user.email,
                linkedin,
                github,
                resume
            }
            

    }
    
    return (
        <div>
                <form onSubmit={handleApplyForm}>
                    <fieldset className="fieldset">
                        <label className="label">Linkedin</label>
                        <input type="url" name="linkedin" className="input w-full" placeholder="Linkedin Link" />
                        <label className="label">GitHub</label>
                        <input type="url" name="github" className="input w-full" placeholder="GitHub  Link" />
                        <label className="label">Resume</label>
                        <input type="url" name="resume" className="input w-full" placeholder="Resume" />    
                        <button className="btn btn-neutral mt-4">Apply</button>
                    </fieldset>
                </form>

        </div>
    );
};

export default JobApply;