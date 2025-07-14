import SectionTitle from "@/components/ui/SectionTitle";
import SearchInput from "@/components/ui/SearchInput";
import JobCard from "@/components/ui/JobCard";
import { jobList } from "@/constants/jobLists";
import { logoList } from "@/constants/logoLists";
import InlineSvg from "@/components/ui/InlineSvg";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="bg-light-blue relative h-[42rem] py-10 text-white">
        <div className="flexCenter relative z-10 container mx-auto h-full flex-col gap-10 px-4 md:flex-row md:gap-16 md:px-7">
          <div>
            <h6 className={"mb-2.5 text-sm font-normal"}>
              Software Recruitment Specialists
            </h6>
            <h1 className="mb-4 text-4xl leading-[1.5] font-bold md:text-4xl xl:text-7xl">
              Elevate your career
            </h1>
            <SearchInput placeholder="E.g. networking" />
          </div>

          <div className={"w-2xs rounded-4xl sm:w-sm md:w-md"}>
            <img src="/images/hero-woman.png" alt="Hero Illustration" />
          </div>
        </div>

        <img
          src={"/icons/left-circle.svg"}
          className={"absolute top-0 left-0 z-0 w-[10rem]"}
        />
        <img
          src={"/icons/right-circle.svg"}
          className={"absolute right-0 bottom-0 z-0 w-[13rem]"}
        />
      </section>

      {/* Logos Section */}
      <section className="flexCenter flex-col bg-white py-10">
        <h6 className={"text-light-grey m-5 text-center text-sm font-bold"}>
          Who we work with
        </h6>
        <div className="container m-5 mx-auto flex flex-wrap items-center justify-around gap-6 px-6">
          {logoList.map((logo) => (
            <img key={logo.alt} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </section>

      {/* Latest Jobs Section */}
      <section className="bg-lighter-blue py-16">
        <div className="container mx-auto px-10">
          <SectionTitle title="Latest Jobs" />
          <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-10">
            {jobList.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>

          <div className={"flexCenter mt-5 md:justify-between"}>
            <div className="hidden md:block">
              <Button className="m-2.5" disabled>
                <InlineSvg
                  src={"/icons/prev-button.svg"}
                  className={"text-light-blue"}
                />
              </Button>

              <Button className="m-2.5">
                <InlineSvg
                  src={"/icons/next-button.svg"}
                  className={"text-light-blue"}
                />
              </Button>
            </div>

            <Link
              href={"#"}
              className="leading-[150%} m-2.5 text-sm font-medium hover:underline"
            >
              View more jobs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
