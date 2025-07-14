import Button from "@/components/ui/Button";
import { Job } from "@/types/job";
import clsx from "clsx";
import React from "react";

const JobCard: React.FC<Job> = ({
  id,
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
        "text-light-blue rounded-4xl p-6",
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
      <p className="mb-1 text-sm">📍 {location}</p>
      <p className="mb-2 text-sm">💰 {salary}</p>
      <p className="mb-4 text-sm">{description}</p>
      <Button
        textColor={"text-light-blue"}
        bgColor={"bg-white"}
        radius={"rounded-4xl"}
        className="w-full px-4 py-2 text-sm"
        text="View this job"
      />
      <p className="mt-3 text-xs">Posted on {postedDate}</p>
    </div>
  );
};

export default JobCard;
