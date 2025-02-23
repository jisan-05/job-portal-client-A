import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
    const applications = useLoaderData();

    return (
        <div>
            <h3>Application for this job {applications.length}</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application,idx) => <tr key={application._id} className="bg-base-200">
                                <th>{idx+1}</th>
                                <td>{application.applicant_email}</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;
