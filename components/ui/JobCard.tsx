import Button from "@/components/ui/Button";
import InlineSvg from "@/components/ui/InlineSvg";
import { Job } from "@/types/job";
import clsx from "clsx";
import React from "react";

const JobCard: React.FC<Job> = ({
  title,
  location,
  salary,
  description,
  postedDate,
  tag,
  bgColor,
  textColor,
}) => {
  return (
    <div
      className={clsx(
        "text-light-blue rounded-4xl p-8",
        bgColor || "bg-white",
        textColor,
      )}
    >
      {tag && (
        <span className="text-light-blue mb-2 inline-block rounded-md bg-white px-2 py-1 text-xs">
          {tag}
        </span>
      )}
      <h3 className="mb-1 text-lg font-bold">{title}</h3>
      <div className="flexCenter mb-1 justify-start text-sm">
        <div className="flexCenter mr-3 w-5">
          <InlineSvg src={"/icons/location.svg"} className={clsx(textColor)} />
        </div>

        {location}
      </div>
      <div className="flexCenter mb-2 justify-start text-sm">
        <div className="flexCenter mr-3 w-5">
          <InlineSvg src={"/icons/salary.svg"} className={clsx(textColor)} />
        </div>

        {salary}
      </div>
      <p className="mb-4 text-sm">{description}</p>
      <Button
        textColor={"text-light-blue"}
        bgColor={"bg-white"}
        radius={"rounded-4xl"}
        className="w-full px-5 py-3 text-sm font-semibold"
      >
        View this job
      </Button>
      <p className="mt-3 text-xs">Posted on {postedDate}</p>
    </div>
  );
};

export default JobCard;
