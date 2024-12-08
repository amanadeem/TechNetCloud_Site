import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const About = () => {
  const [isLight] = useContext(ThemeContext);
  return (
    <>
      <div className="about max-w-full md:flex md:py-[100px] py-[50px] md:px-6 md:items-center md:justify-center md:gap-6 md:flex-wrap px-4">
        <div className="flex flex-col">
          <div>
            <h2 className="max-w-[630px] md:text-5xl text-3xl font-bold mb-5 md:leading-snug">
              We craft SaaS, Business Sites & more.
            </h2>
            <p className="max-w-[630px] md:text-xl text-md leading-normal text-[#95ADB1]">
              We specialize in crafting SaaS platforms, business websites, and
              more to fit your unique needs. Our solutions are designed to drive
              growth, enhance functionality, and elevate your digital presence.
            </p>
          </div>

          <div
            className="
          md:py-8 md:flex md:justify-between md:items-center md:gap-4 md:flex-wrap
          flex gap-4 flex-wrap py-12
          "
          >
            <div className="flex flex-col flex-wrap gap-5 md:flex md:flex-wrap md:gap-4">
              <div className="flex items-center flex-wrap gap-3 px-1">
                <div className="smCard flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 md:w-[28px] md:h-[28px] w-[24px] h-[24px] rounded-md">
                  {"✔"}
                </div>
                <span className="text-lg">Premium quality</span>
              </div>

              <div className="flex items-center flex-wrap gap-3 px-1">
                <div className="smCard flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 md:w-[28px] md:h-[28px] w-[24px] h-[24px] rounded-md">
                  {"✔"}
                </div>
                <span className="text-lg">Use for lifetime</span>
              </div>

              <div className="flex items-center flex-wrap gap-3 px-1">
                <div className="smCard flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 md:w-[28px] md:h-[28px] w-[24px] h-[24px] rounded-md">
                  {"✔"}
                </div>
                <span className="text-lg">Full control</span>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center flex-wrap gap-3 px-1">
                <div className="smCard flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 md:w-[28px] md:h-[28px] w-[24px] h-[24px] rounded-md">
                  {"✔"}
                </div>
                <span className="text-lg">Rich documentation</span>
              </div>

              <div className="flex items-center flex-wrap gap-3 px-1">
                <div className="smCard flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 md:w-[28px] md:h-[28px] w-[24px] h-[24px] rounded-md">
                  {"✔"}
                </div>
                <span className="text-lg">Developer friendly</span>
              </div>

              <div className="flex items-center flex-wrap gap-3 px-1">
                <div className="smCard flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 md:w-[28px] md:h-[28px] w-[24px] h-[24px] rounded-md">
                  {"✔"}
                </div>
                <span className="text-lg">In your budget</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto shadow-lg">
          <img
            src={
              isLight
                ? "https://www.technetcloud.co/images/about/about-image.svg"
                : "https://www.technetcloud.co/images/about/about-image-dark.svg"
            }
            alt="img"
          />
        </div>
      </div>

      <div className="mx-auto w-[86%]">
        <div className="h-[1px] line"></div>
      </div>

      <div className="max-w-full md:flex md:py-[100px] md:px-6 md:items-center md:justify-center md:gap-6 md:flex-wrap px-4 py-[50px]">
        <div className="shadow-lg mb-12">
          <img
            src={
              isLight
                ? "https://www.technetcloud.co/images/about/about-image-2.svg"
                : "https://www.technetcloud.co/images/about/about-image-2-dark.svg"
            }
          />
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col justify-between gap-4 flex-wrap">
            <h3 className="md:text-2xl text-xl font-bold leading-snug">
              Innovative Solutions
            </h3>
            <p className="max-w-[480px] md:text-lg text-md leading-normal text-[#95ADB1]">
              We provide cutting-edge tech solutions that drive innovation and
              keep your business ahead in a rapidly evolving digital landscape.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-4 flex-wrap">
            <h3 className="md:text-2xl text-xl font-bold leading-snug">
              Expert Consultation
            </h3>
            <p className="max-w-[480px] md:text-lg text-md leading-normal text-[#95ADB1]">
              Our team of experts offers comprehensive consultation to help you
              navigate complex tech challenges and implement effective
              strategies.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-4 flex-wrap">
            <h3 className="md:text-2xl text-xl font-bold leading-snug">
              Advanced Tech Stack
            </h3>
            <p className="max-w-[480px] md:text-lg text-md leading-normal text-[#95ADB1]">
              We utilize a state-of-the-art tech stack to build scalable and
              high-performance solutions tailored to your specific needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
