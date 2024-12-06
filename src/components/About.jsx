const About = () => {
  return (
    <>
      <div className="max-w-full flex py-[100px] px-6 bg-[#121B23] items-center justify-center gap-2 flex-wrap">
        <div className="flex flex-col">
          <div>
            <h2 className="text-5xl font-bold mb-5 leading-snug">
              We craft SaaS, Business <br /> Sites & more.
            </h2>
            <p className="max-w-[630px] text-xl leading-normal text-[#95ADB1]">
              We specialize in crafting SaaS platforms, business websites, and
              more to fit your unique needs. Our solutions are designed to drive
              growth, enhance functionality, and elevate your digital presence.
            </p>
          </div>

          <div className="max-w-[92%] py-8 flex justify-between items-center gap-4 flex-wrap">
            <div className="flex flex-col flex-wrap gap-5">
              <div className="flex items-center flex-wrap gap-3 px-1">
                <div className="flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 w-[28px] h-[28px] bg-[#142733] rounded-md">
                  {"✔"}
                </div>
                <span className="text-[#95ADB1] text-lg">Premium quality</span>
              </div>

              <div className="flex items-center flex-wrap gap-3 px-1">
                <div className="flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 w-[28px] h-[28px] bg-[#142733] rounded-md">
                  {"✔"}
                </div>
                <span className="text-[#95ADB1] text-lg">Use for lifetime</span>
              </div>

              <div className="flex items-center flex-wrap gap-3 px-1">
                <div className="flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 w-[28px] h-[28px] bg-[#142733] rounded-md">
                  {"✔"}
                </div>
                <span className="text-[#95ADB1] text-lg">Full control</span>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center flex-wrap gap-3 px-1">
                <div className="flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 w-[28px] h-[28px] bg-[#142733] rounded-md">
                  {"✔"}
                </div>
                <span className="text-[#95ADB1] text-lg">
                  Rich documentation
                </span>
              </div>

              <div className="flex items-center flex-wrap gap-3 px-1">
                <div className="flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 w-[28px] h-[28px] bg-[#142733] rounded-md">
                  {"✔"}
                </div>
                <span className="text-[#95ADB1] text-lg">
                  Developer friendly
                </span>
              </div>

              <div className="flex items-center flex-wrap gap-3 px-1">
                <div className="flex justify-center items-center text-center text-xl text-[#2C92C2] p-4 w-[28px] h-[28px] bg-[#142733] rounded-md">
                  {"✔"}
                </div>
                <span className="text-[#95ADB1] text-lg">In your budget</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <img
            src="https://www.technetcloud.co/images/about/about-image-dark.svg"
            alt="img"
          />
        </div>
      </div>

      <div className="mx-auto w-[86%] bg-[#121B23]">
        <div className="h-[1px] bg-slate-800"></div>
      </div>

      <div className="max-w-screen flex py-[100px] px-6 bg-[#121B23] items-center justify-center gap-16 flex-wrap">
        <div className="">
          <img
            src="https://www.technetcloud.co/images/about/about-image-2-dark.svg"
            alt="img"
          />
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col justify-between gap-4 flex-wrap">
            <h3 className="text-2xl font-bold leading-snug">
              Innovative Solutions
            </h3>
            <p className="max-w-[480px] text-lg leading-normal text-[#95ADB1]">
              We provide cutting-edge tech solutions that drive innovation and
              keep your business ahead in a rapidly evolving digital landscape.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-4 flex-wrap">
            <h3 className="text-2xl font-bold leading-snug">
              Expert Consultation
            </h3>
            <p className="max-w-[480px] text-lg leading-normal text-[#95ADB1]">
              Our team of experts offers comprehensive consultation to help you
              navigate complex tech challenges and implement effective
              strategies.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-4 flex-wrap">
            <h3 className="text-2xl font-bold leading-snug">
              Advanced Tech Stack
            </h3>
            <p className="max-w-[480px] text-lg leading-normal text-[#95ADB1]">
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
