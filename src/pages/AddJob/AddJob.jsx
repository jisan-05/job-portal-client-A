import React from "react";

const AddJob = () => {
    const handleAddJob = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData)
        const {min,max,currency, ...newJob} = initialData;
        console.log(newJob)
        newJob.salaryRange = {min,max,currency}
        console.log(newJob)

    }

    return (
        <div>
            <h2 className="text-2xl">Post a new Job </h2>

            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleAddJob}>
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
                            <select name="currency" className="select select-bordered w-full border">
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
                            name="company"
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

                    {/* HR Name  */}
                    <div className="form-control">
                        <label className="label block ">
                            <span className="label-text">HR Name</span>
                        </label>
                        <input
                            type="text"
                            name="hr_name"
                            placeholder="HR Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* HR Email  */}
                    <div className="form-control">
                        <label className="label block ">
                            <span className="label-text">HR Email</span>
                        </label>
                        <input
                            type="text"
                            name="hr_email"
                            placeholder="HR Email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    {/* Company Logo Url  */}
                    <div className="form-control">
                        <label className="label block ">
                            <span className="label-text">Company Logo Url</span>
                        </label>
                        <input
                            type="text"
                            name="company_logo"
                            placeholder="Company Logo Url"
                            className="input input-bordered w-full"
                            required
                        />
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
