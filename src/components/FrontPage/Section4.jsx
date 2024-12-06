const Section4 = () => {
  return (
    <>
      <div className="max-w-full px-6 flex flex-col py-[100px] bg-[#172528] justify-center">
        <div className="mx-auto text-center max-w-[810px]">
          <h2 className="text-5xl font-bold mb-5 leading-snug">Our Leads</h2>
          <p className="max-w-[620px] text-xl leading-normal text-[#95ADB1]">
            Meet our leaders, visionary professionals guiding our team with
            expertise and strategic insight. Their dedication and innovative
            approach drive our mission to deliver outstanding tech solutions.
          </p>
        </div>

        <div className="cards w-full px-6 py-16 flex justify-center items-start gap-8 flex-wrap">
          <div className="card bg-[#1D2B30] flex flex-col gap-8 w-[372px] py-10 px-8">
            <div className="cardText">
              <p className="">
                Python, AI, Data Science developer, MERN stack trainer
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-[1px] bg-slate-700 w-[96%]"></div>
            </div>

            <div className="flex items-center gap-4">
              <div className="cardImg w-[50px] h-[50px] rounded-full overflow-hidden">
                <img
                  src="https://www.technetcloud.co/_next/image?url=%2Fimages%2Ftestimonials%2Fauth-01.jpg&w=1920&q=75"
                  alt="icon1"
                />
              </div>
              <div className="info">
                <h3 className="text-xl font-semibold">Aliyan Shaikh</h3>
                <p className="text-sm text-[#95ADB1]">
                  CEO & Founder @TechNetCloud
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-[#1D2B30] flex flex-col gap-8 w-[372px] py-10 px-8">
            <div className="cardText">
              <p className="">
                Marketing specialist, UI/UX designer & Frontend developer
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-[1px] bg-slate-700 w-[96%]"></div>
            </div>

            <div className="flex items-center gap-4">
              <div className="cardImg w-[50px] h-[50px] rounded-full overflow-hidden">
                <img
                  src="https://www.technetcloud.co/_next/image?url=%2Fimages%2Ftestimonials%2Fauth-02.jpg&w=1920&q=75"
                  alt="icon2"
                />
              </div>
              <div className="info">
                <h3 className="text-xl font-semibold">Muhammad Anas Khan</h3>
                <p className="text-sm text-[#95ADB1]">CMO @TechNetCloud</p>
              </div>
            </div>
          </div>

          <div className="card bg-[#1D2B30] flex flex-col gap-8 w-[372px] py-10 px-8">
            <div className="cardText">
              <p className="">
                Nextjs, Nodejs, Full stack developer, Lead @TechNetCloud
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-[1px] bg-slate-700 w-[96%]"></div>
            </div>

            <div className="flex items-center gap-4">
              <div className="cardImg w-[50px] h-[50px] rounded-full overflow-hidden">
                <img
                  src="https://www.technetcloud.co/_next/image?url=%2Fimages%2Ftestimonials%2Fauth-03.png&w=1920&q=75"
                  alt="icon3"
                />
              </div>
              <div className="info">
                <h3 className="text-xl font-semibold">Muhammad Ahad</h3>
                <p className="text-sm text-[#95ADB1]">CTO @TechNetCloud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
