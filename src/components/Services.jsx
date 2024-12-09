import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <>
      <div className="services md:px-4 px-4 max-w-full flex flex-col py-[100px] justify-center">
        <div
          className="mx-auto text-center md:max-w-[810px] mb-8
        2xl:max-w-[1280px] 2xl:text-center
        "
        >
          <h2 className="md:text-5xl text-3xl font-bold mb-5 leading-tight md:leading-snug 2xl:text-7xl">
            We are ready to help
          </h2>
          <p className="md:max-w-[620px] md:text-xl text-[1rem] leading-relaxed text-[#95ADB1] 2xl:text-3xl  2xl:min-w-[920px]">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="relative mx-auto md:max-w-[1200px] max-w-[1000px] 2xl:min-w-[1380px] rounded-md overflow-hidden">
          <img
            className="w-full h-full"
            src="https://www.technetcloud.co/_next/image?url=%2Fimages%2Fvideo%2Fvideo.jpg&w=3840&q=75"
            alt="img"
          />
          <div className="flex justify-center items-center text-center md:text-2xl 2xl:text-5xl text-lg absolute md:shadow-xl 2xl:shadow-2xl shadow-xl hover:shadow-2xl md:hover:shadow-2xl 2xl:hover:shadow-3xl transition-all md:w-16 w-12 md:h-16 h-12 2xl:w-24 2xl:h-24 text-blue-600 md:top-[42%] top-[40%] left-[42%] md:left-[46%] rounded-full bg-slate-300 hover:bg-slate-50 cursor-pointer">
            <FontAwesomeIcon icon={faPlay} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
