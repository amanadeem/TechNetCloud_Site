const Services = () => {
  return (
    <>
      <div className="max-w-full flex flex-col py-[100px] bg-[#121B23] justify-center">
        <div className="mx-auto text-center max-w-[810px] mb-20">
          <h2 className="text-5xl font-bold mb-5 leading-snug">
            We are ready to help
          </h2>
          <p className="max-w-[620px] text-xl leading-normal text-[#95ADB1]">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="relative mx-auto max-w-[1200px] rounded-md overflow-hidden">
          <img
            className="w-full h-full"
            src="https://www.technetcloud.co/_next/image?url=%2Fimages%2Fvideo%2Fvideo.jpg&w=3840&q=75"
            alt="img"
          />
          <div className="flex justify-center items-center text-center text-3xl absolute shadow-xl hover:shadow-2xl transition-all w-16 h-16 text-blue-600 top-[42%] left-[46%] rounded-full bg-slate-300 hover:bg-slate-50 cursor-pointer">
            {">"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
