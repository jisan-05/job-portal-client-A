import React from "react";

const AddJob = () => {
    return (
        <div>
            <h2 className="text-2xl">Post a new Job </h2>

            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form className="card-body">
                    {/* Job Title  */}
                    <div className="form-control">
                        <label className="label block ">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Job Title"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    {/* Job Location  */}
                    <div className="form-control">
                        <label className="label block">
                            <span className="label-text">Job Location</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Job Location"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    {/* Job Type  */}
                    <div className="form-control">
                        <label className="label block">
                            <span className="label-text">Job Type</span>
                        </label>
                        <select className="select select-bordered w-full border">
                            <option disabled selected>
                                Pick a job
                            </option>
                            <option>Full Time</option>
                            <option>Intern</option>
                            <option>Part Time</option>
                        </select>
                    </div>
                    {/* Job Field  */}
                    <div className="form-control">
                        <label className="label block">
                            <span className="label-text">Job Field</span>
                        </label>
                        <select className="select select-bordered w-full border">
                            <option disabled selected>
                                Pick a job Field
                            </option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Teaching</option>
                        </select>
                    </div>
                    {/* Salary Range  */}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-end">
                        <div className="form-control">
                            <label className="label block">
                                <span className="label-text">Salary Range</span>
                            </label>
                            <input
                                type="text"
                                name="min"
                                placeholder="min"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="max"
                                placeholder="max"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <select className="select select-bordered w-full border">
                                <option disabled selected>
                                    Currency
                                </option>
                                <option>BDT</option>
                                <option>USDT</option>
                                <option>INR</option>
                            </select>
                        </div>
                    </div>

                    {/* Job Description  */}
                    <div className="form-control">
                        <label className="label block">
                            <span className="label-text">Job Description</span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            name="description"
                            required
                            placeholder="Description"
                        ></textarea>
                    </div>

                    {/* Company Name  */}
                    <div className="form-control">
                        <label className="label block ">
                            <span className="label-text">Company Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Company Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Job Description  */}
                    <div className="form-control">
                        <label className="label block">
                            <span className="label-text">Job Requirements</span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            name="Requirements" 
                            required
                            placeholder="Write Job Requirements in a new line"
                        ></textarea>
                    </div>
                    {/* Job Responsibilities  */}
                    <div className="form-control">
                        <label className="label block">
                            <span className="label-text">Job Responsibilities</span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            name="Responsibilities" 
                            required
                            placeholder="Write Job Responsibilities in a new line"
                        ></textarea>
                    </div>

                    {/* Job Submit button  */}

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;
