import Link from "next/link";
import { footerConst } from "@/constants/footerConstant";
import { Icons } from "@/constants/imageLists";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-light-blue text-background py-20">
      <div className="container mx-auto flex flex-row justify-between">
        {/* Logo + Social */}
        <div className={"mx-12"}>
          <h3 className="mb-4 text-xl font-bold">Software Recruitment co.</h3>
          <div className="flex gap-4 [&>*]:h-6 [&>*]:w-5">
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
              <Image
                src={Icons.LinkedInIcon}
                alt="LinkedInIcon"
                width={22}
                height={24}
              />
            </a>
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <Image
                src={Icons.FacebookIcon}
                alt="FacebookIcon"
                width={22}
                height={24}
              />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <Image
                src={Icons.InstagramIcon}
                alt="InstagramIcon"
                width={22}
                height={24}
              />
            </a>
            <a href="#" aria-label="TwitterIcon" className="hover:opacity-80">
              <Image
                src={Icons.TwitterIcon}
                alt="TwitterIcon"
                width={22}
                height={24}
              />
            </a>
          </div>
        </div>

        {/* Link Groups */}
        <div className="mx-16 grid grow grid-cols-3 text-sm">
          {footerConst.map((section) => (
            <div key={section.title}>
              <h4 className="mb-3 text-4xl font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
