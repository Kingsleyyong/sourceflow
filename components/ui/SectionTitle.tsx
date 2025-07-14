import React from "react";
import clsx from "clsx";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={clsx("mb-6", alignment[align], className)}>
      <h2 className="text-dark-blue text-5xl font-bold">{title}</h2>
      {subtitle && <p className="text-dark-grey mt-2 text-base">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
