const Contact = () => {
  return (
    <>
      <div className="contactmax-w-full md:px-6 px-4 md:py-[100px] py-[50px] flex items-center justify-center">
        <div className="contactCard md:px-8 md:py-[20px] px-6 py-[14px] shadow-xl 2xl:min-w-[1200px] 2xl:min-h-[700px]">
          <div className="text py-8">
            <h2 className="md:text-3xl 2xl:text-5xl text-2xl mb-4 font-bold">
              Need Help? Open a Ticket
            </h2>
            <p className="text-[#95ADB1] 2xl:text-2xl">
              Our support team will get back to you ASAP via email.
            </p>
          </div>

          <form className="flex flex-col flex-wrap gap-5">
            <div className="flex flex-wrap gap-5 2xl:flex 2xl:gap-8">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 2xl:text-2xl text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="field px-4 outline-none text-[#95ADB1] text-lg rounded-sm 2xl:text-2xl block w-full p-2 shadow-md 2xl:py-6 2xl:w-[500px]"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 2xl:text-2xl text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="field px-4 outline-none text-[#95ADB1] text-lg rounded-sm 2xl:text-2xl block w-full p-2 shadow-md 2xl:py-6 2xl:w-[500px]"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="message"
                className="block mb-2 2xl:text-2xl text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="field px-4 outline-none text-[#95ADB1] text-lg rounded-sm 2xl:text-2xl block w-full p-2 shadow-md resize-none"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="w-full py-6">
              <button
                type="submit"
                className="w-[200px] 2xl:text-2xl 2xl:w-[300px] 2xl:py-6 bg-[#2C92C2] hover:bg-[#2B88B4] px-9 py-4 font-medium rounded-sm shadow-submit"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
