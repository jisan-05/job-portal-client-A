import { p } from "motion/react-client";
import { FaDollarSign, FaLocationDot } from "react-icons/fa6";
import { HiCurrencyBangladeshi } from "react-icons/hi";

const HotJobCard = ({ job }) => {
    const {
        title,
        company,
        company_logo,
        requirements,
        description,
        location,
        salaryRange,
    } = job;
    return (
        <div className="card card-compact bg-base-100  shadow-xl pt-7">
            <div className="flex gap-3">
                <figure>
                    <img className="w-14" src={company_logo} alt={company} />
                </figure>
                <div>
                    <h4 className="text-xl">{company}</h4>
                    <div className="flex gap-1 items-center">
                        <FaLocationDot />
                        <p>{location}</p>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}  <div className="badge badge-secondary">NEW</div></h2>
                <p>{description}</p>
                <div className="flex flex-wrap gap-1">
                    {
                        requirements.map(skill => <p className="border rounded text-center hover:text-blue-500">{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end items-center flex mt-3">
                    <p className="flex items-center">Salary: {salaryRange.min}-{salaryRange.max} <HiCurrencyBangladeshi />{salaryRange.currency}</p>
                    
                    <button className="btn btn-primary">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;
