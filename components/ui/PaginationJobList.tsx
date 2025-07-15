"use client";

import { useState } from "react";
import JobCard from "@/components/ui/JobCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import InlineSvg from "@/components/ui/InlineSvg";
import Link from "next/link";
import { Job } from "@/types/job";

const JOBS_PER_PAGE = 3;

interface IPaginationJobList {
  jobList: Job[];
}

const PaginatedJobList = ({ jobList }: IPaginationJobList) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(jobList.length / JOBS_PER_PAGE);

  const paginatedJobs = jobList.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE,
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div>
      <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-10">
        {paginatedJobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>

      <div className="flexCenter mt-5 md:justify-between">
        {totalPages !== 1 && (
          <div className="hidden items-center md:flex">
            <Button
              className="m-2.5"
              onClick={handlePrev}
              disabled={currentPage === 1}
            >
              <InlineSvg
                src={"/icons/prev-button.svg"}
                className={"text-light-blue"}
              />
            </Button>

            <Button
              className="m-2.5"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              <InlineSvg
                src={"/icons/next-button.svg"}
                className={"text-light-blue"}
              />
            </Button>
          </div>
        )}

        <Link
          href={"#"}
          className="m-2.5 text-sm leading-[150%] font-medium hover:underline"
        >
          View more jobs
        </Link>
      </div>
    </div>
  );
};

export default PaginatedJobList;
