import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer max-w-full px-6 pt-[100px] flex items-center justify-center">
        <div className="container flex justify-center items-center flex-wrap gap-4">
          <div className="one flex flex-col gap-8 max-w-[390px] min-h-[300px] p-2">
            <Link to={"/"}>
              <div className="logo rounded-[50%] bg-white w-12 h-12 p-2">
                <img
                  className="w-full h-full  cursor-pointer"
                  src="https://www.technetcloud.co/_next/image?url=%2Fimages%2Ffavicon.png&w=256&q=75"
                  alt="logo"
                />
              </div>
            </Link>
            <div className="text text-[#95ADB1]">
              <p className="text-[16px] leading-normal">
                Transforming industries with cutting-edge technology and
                seamless integration. Driving digital transformation with
                innovative solutions and unparalleled expertise.
              </p>
            </div>
            <div className="socials flex items-center gap-4 text-[#95ADB1]">
              <div className="fb text-xl foot-link cursor-pointer">
                <a
                  target="_blank"
                  href="https://www.facebook.com/groups/180797321520415/user/100087677676688"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </div>
              <div className="wa text-xl foot-link cursor-pointer">
                <a target="_blank" href="https://wa.me/+923201207871">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
              <div className="yt text-xl foot-link cursor-pointer">
                <a target="_blank" href="https://www.youtube.com/@TechNetCloud">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
              <div className="li text-xl foot-link cursor-pointer">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/technetcloud/mycompany/"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
          <div className="two flex flex-col gap-8 w-[220px] min-h-[300px] p-2">
            <h3 className="text-xl font-semibold">Useful Links</h3>
            <ul className="text-[#95ADB1] flex flex-col gap-4">
              <Link to={"/about"}>
                <li className="foot-link cursor-pointer">About</li>
              </Link>
              <Link to={"/contact"}>
                <li className="foot-link cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
          <div className="three flex flex-col gap-8 w-[220px] min-h-[300px] p-2">
            <h3 className="text-xl font-semibold">Services</h3>
            <ul className="text-[#95ADB1] flex flex-col gap-4">
              <Link to={"/services"}>
                <li className="foot-link cursor-pointer">Services</li>
              </Link>
              <Link>
                <li className="foot-link cursor-pointer">Courses</li>
              </Link>
              <Link>
                <li className="foot-link cursor-pointer">Internships</li>
              </Link>
            </ul>
          </div>
          <div className="four flex flex-col gap-8 w-[220px] min-h-[300px] p-2">
            <h3 className="text-xl font-semibold">Support & Help</h3>
            <ul className="text-[#95ADB1] flex flex-col gap-4">
              <Link to={"/contact"}>
                <li className="foot-link cursor-pointer">Mail Us</li>
              </Link>
              <Link>
                <li className="foot-link cursor-pointer">FAQs</li>
              </Link>
              <Link to={"/about"}>
                <li className="foot-link cursor-pointer">About</li>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
