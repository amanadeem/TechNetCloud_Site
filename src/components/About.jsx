import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const About = () => {
  const [isLight] = useContext(ThemeContext);
  return (
    <>
      <div className="flex items-end justify-center">
        <div className="about max-w-full md:flex md:py-[100px] 2xl:min-w-[1380px] 2xl:flex 2xl:justify-between 2xl:items-center py-[50px] md:px-6 md:items-center md:justify-center md:gap-6 md:flex-wrap px-4">
          <div className="flex flex-col">
            <div className="max-w-[630px] 2xl:max-w-[728px]">
              <h2 className="md:text-5xl text-3xl font-bold mb-5 md:leading-snug 2xl:text-6xl">
                We craft SaaS, Business Sites & more.
              </h2>
              <p className="md:text-xl text-md leading-normal text-[#95ADB1] 2xl:text-2xl">
                We specialize in crafting SaaS platforms, business websites, and
                more to fit your unique needs. Our solutions are designed to
                drive growth, enhance functionality, and elevate your digital
                presence.
              </p>
            </div>

            <div
              className="
          md:py-8 md:flex md:justify-between md:items-center md:gap-4 md:flex-wrap
          flex gap-4 flex-wrap py-12 md:max-w-[560px] 2xl:max-w-[680px]
          "
            >
              <div className="flex flex-col flex-wrap gap-5 md:flex md:flex-wrap md:gap-4">
                <div className="flex items-center flex-wrap gap-3 px-1 2xl:px-2">
                  <div className="smCard flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 md:w-[28px] md:h-[28px] w-[24px] h-[24px] 2xl:w-[34px] 2xl:h-[34px] 2xl:text-2xl  rounded-md">
                    {"✔"}
                  </div>
                  <span className="text-lg 2xl:text-2xl">Premium quality</span>
                </div>

                <div className="flex items-center flex-wrap gap-3 px-1">
                  <div className="smCard flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 md:w-[28px] md:h-[28px] w-[24px] h-[24px] 2xl:w-[34px] 2xl:h-[34px] 2xl:text-2xl  rounded-md">
                    {"✔"}
                  </div>
                  <span className="text-lg 2xl:text-2xl">Use for lifetime</span>
                </div>

                <div className="flex items-center flex-wrap gap-3 px-1">
                  <div className="smCard flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 md:w-[28px] md:h-[28px] w-[24px] h-[24px] 2xl:w-[34px] 2xl:h-[34px] 2xl:text-2xl  rounded-md">
                    {"✔"}
                  </div>
                  <span className="text-lg 2xl:text-2xl">Full control</span>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-center flex-wrap gap-3 px-1">
                  <div className="smCard flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 md:w-[28px] md:h-[28px] w-[24px] h-[24px] 2xl:w-[34px] 2xl:h-[34px] 2xl:text-2xl  rounded-md">
                    {"✔"}
                  </div>
                  <span className="text-lg 2xl:text-2xl">
                    Rich documentation
                  </span>
                </div>

                <div className="flex items-center flex-wrap gap-3 px-1">
                  <div className="smCard flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 md:w-[28px] md:h-[28px] w-[24px] h-[24px] 2xl:w-[34px] 2xl:h-[34px] 2xl:text-2xl  rounded-md">
                    {"✔"}
                  </div>
                  <span className="text-lg 2xl:text-2xl">
                    Developer friendly
                  </span>
                </div>

                <div className="flex items-center flex-wrap gap-3 px-1">
                  <div className="smCard flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 md:w-[28px] md:h-[28px] w-[24px] h-[24px] 2xl:w-[34px] 2xl:h-[34px] 2xl:text-2xl  rounded-md">
                    {"✔"}
                  </div>
                  <span className="text-lg 2xl:text-2xl">In your budget</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto shadow-lg 2xl:mx-0">
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
      </div>

      <div className="mx-auto w-[86%] md:w-[70%] 2xl:w-[74%]">
        <div className="h-[1px] line"></div>
      </div>

      <div className="flex items-end justify-center">
        <div
          className="max-w-full md:flex md:py-[100px] md:px-6 md:items-center md:justify-center md:gap-6 md:flex-wrap px-4 py-[50px]
          2xl:min-w-[1380px] 2xl:flex 2xl:justify-between 2xl:items-center
      "
        >
          <div className="shadow-lg mb-12 md:mb-0">
            <img
              src={
                isLight
                  ? "https://www.technetcloud.co/images/about/about-image-2.svg"
                  : "https://www.technetcloud.co/images/about/about-image-2-dark.svg"
              }
            />
          </div>

          <div className="flex flex-col gap-10 2xl:min-w-[640px] 2xl:flex 2xl:flex-col">
            <div className="flex flex-col justify-between gap-4 flex-wrap">
              <h3 className="md:text-2xl text-xl font-bold leading-snug 2xl:text-3xl">
                Innovative Solutions
              </h3>
              <p className="max-w-[480px] md:text-lg text-md leading-normal 2xl:max-w-[680px] text-[#95ADB1] 2xl:text-2xl">
                We provide cutting-edge tech solutions that drive innovation and
                keep your business ahead in a rapidly evolving digital
                landscape.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-4 flex-wrap">
              <h3 className="md:text-2xl text-xl font-bold leading-snug 2xl:text-3xl">
                Expert Consultation
              </h3>
              <p className="max-w-[480px] md:text-lg text-md leading-normal 2xl:max-w-[680px] text-[#95ADB1] 2xl:text-2xl">
                Our team of experts offers comprehensive consultation to help
                you navigate complex tech challenges and implement effective
                strategies.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-4 flex-wrap">
              <h3 className="md:text-2xl text-xl font-bold leading-snug 2xl:text-3xl">
                Advanced Tech Stack
              </h3>
              <p className="max-w-[480px] md:text-lg text-md leading-normal 2xl:max-w-[680px] text-[#95ADB1] 2xl:text-2xl">
                We utilize a state-of-the-art tech stack to build scalable and
                high-performance solutions tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
