import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useHooks";
import Swal from "sweetalert2";

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate()
    // console.log(id, user)

    const submitJobApplication = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // console.log(linkedin,github,resume)

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume,
        };
        fetch("http://localhost:5000/job-applications", {
            method: "POST", // HTTP method
            headers: {
                "Content-Type": "application/json", // Specify JSON format
            },
            body: JSON.stringify(jobApplication), // Convert JS object to JSON string
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500,
                    });

                }
                navigate("/myApplication")
            });
            
    };

    return (
        <div className="">
            <div className="card bg-base-100 w-full max-w-xl  shadow-2xl">
                <h2 className="text-2xl text-center">Apply Job</h2>
                <form className="card-body" onSubmit={submitJobApplication}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Linkedin Url</span>
                        </label>
                        <input
                            type="url"
                            name="linkedin"
                            placeholder="LinkedIn Url"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Github Url</span>
                        </label>
                        <input
                            type="url"
                            name="github"
                            placeholder="Github Url"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resume Url</span>
                        </label>
                        <input
                            type="url"
                            name="resume"
                            placeholder="Resume Url"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApply;
