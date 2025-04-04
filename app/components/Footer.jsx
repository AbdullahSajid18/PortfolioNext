import Link from "next/link";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
const socialLinks = [
  {
    href: "https://www.linkedin.com/in/abdullah-sajid-066934236/",
    target: "_blank",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/AbdullahSajid",
    target: "_blank",
    icon: <FaFacebook />,
    label: "Facebook",
  },
  {
    href: "https://www.github.com/AbdullahSajid18",
    target: "_blank",
    icon: <FaGithub />,
    label: "GitHub",
  },
];
const renderSocialIcons = () =>
  socialLinks.map(({ href, icon, label }) => (
    <Link
      key={label}
      href={href}
      target="_blank"
      aria-label={label}
      className="text-white transition 
        hover:text-[#A594FD]"
    >
      {icon}
    </Link>
  ));
function Footer() {
  return (
    <footer
      id="footer"
      className="container border-t border-gray-600 py-4  md:py-[2rem] mx-auto my-8  md:my-16  lg:px-[12rem]"
    >
      <div className="grid items-center grid-cols-2 gap-4 justify-items-center md:grid-cols-4">
        <p className="text-[#A594fd] text-sm">Feel free to contact me</p>
        <p className="text-sm text-gray-400">abdullahsajid0426@gmail.com</p>
        <p className="text-sm text-gray-400">Contact No: 0319-0374204</p>
        <div className="flex items-center justify-center gap-4">
          {renderSocialIcons()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
