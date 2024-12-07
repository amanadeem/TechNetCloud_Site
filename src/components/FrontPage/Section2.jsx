const Section2 = () => {
  return (
    <>
      <div className="sec2 max-w-full px-6 flex flex-col py-[100px] justify-center">
        <div className="mx-auto text-center max-w-[810px]">
          <h2 className="text-5xl font-bold mb-5 leading-snug">
            Elevate Your Digital <br /> Experience
          </h2>
          <p className="max-w-[620px] text-xl leading-normal">
            Discover powerful, tech-driven solutions tailored to elevate your
            digital experience. Our platform adapts to your needs, providing
            seamless integration, unmatched performance, and future-ready
            innovation.
          </p>
        </div>

        <div className="cards max-w-full px-6 py-16 flex justify-center items-start gap-x-4 gap-y-14 flex-wrap">
          <div className="card shadow-sm flex flex-col gap-8 w-[372px] p-2">
            <div className="cardImg w-[70px] h-[70px] p-1 bg-[#142733] rounded-md">
              <img src="src\assets\icons\img1.png" alt="icon1" />
            </div>
            <div className="cText flex flex-col gap-4">
              <h2 className="text-xl font-bold">Crafted for Startups</h2>
              <p className="">
                We deliver tailored tech solutions designed to accelerate
                growth. From seamless integrations to scalable innovations, we
                empower your business to thrive.
              </p>
            </div>
          </div>

          <div className="card shadow-sm flex flex-col gap-8 w-[372px] p-2">
            <div className="cardImg w-[70px] h-[70px] p-2 bg-[#142733] rounded-md">
              <img src="src\assets\icons\img2.png" alt="icon2" />
            </div>
            <div className="cText flex flex-col gap-4">
              <h2 className="text-xl font-bold">High-quality Design</h2>
              <p className="">
                High-quality design that elevates your {"brand's"} visual
                identity. We create stunning, user-centric designs that make a
                lasting impression.
              </p>
            </div>
          </div>

          <div className="card shadow-sm flex flex-col gap-8 w-[372px] p-2">
            <div className="cardImg w-[70px] p-2 h-[70px] bg-[#142733] rounded-md">
              <img src="src\assets\icons\img3.png" alt="icon3" />
            </div>
            <div className="cText flex flex-col gap-4">
              <h2 className="text-xl font-bold">Latest Technologies</h2>
              <p className="">
                Harness the latest technologies to stay ahead of the curve. We
                implement cutting-edge solutions to drive innovation and
                efficiency for your business.
              </p>
            </div>
          </div>

          <div className="card shadow-sm flex flex-col gap-8 w-[372px] p-2">
            <div className="cardImg w-[70px] p-2 h-[70px] bg-[#142733] rounded-md">
              <img src="src\assets\icons\img4.png" alt="icon4" />
            </div>
            <div className="cText flex flex-col gap-4">
              <h2 className="text-xl font-bold">Reasonable Pricing</h2>
              <p className="">
                Reasonable pricing that aligns with your budget. We provide
                exceptional value through cost-effective solutions tailored to
                your needs.
              </p>
            </div>
          </div>

          <div className="card shadow-sm flex flex-col gap-8 w-[372px] p-2">
            <div className="cardImg w-[70px] h-[70px] p-1 bg-[#142733] rounded-md">
              <img src="src\assets\icons\img5.png" alt="icon5" />
            </div>
            <div className="cText flex flex-col gap-4">
              <h2 className="text-xl font-bold">SEO Friendly</h2>
              <p className="">
                SEO-friendly products designed to boost your online visibility.
                We ensure your solutions are optimized for search engines to
                drive traffic and enhance engagement.
              </p>
            </div>
          </div>

          <div className="card shadow-sm flex flex-col gap-8 w-[372px] p-2">
            <div className="cardImg w-[70px] p-2 h-[70px] bg-[#142733] rounded-md">
              <img src="src\assets\icons\img6.png" alt="icon6" />
            </div>
            <div className="cText flex flex-col gap-4">
              <h2 className="text-xl font-bold">Fully Control</h2>
              <p className="">
                Full control over your product, giving you complete oversight
                and customization. Manage every aspect with ease to align with
                your vision and goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
