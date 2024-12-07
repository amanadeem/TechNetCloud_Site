const Contact = () => {
  return (
    <>
      <div className="contact max-w-full px-6 py-[100px] flex items-center justify-center">
        <div className="contactCard px-8 py-10 shadow-xl">
          <div className="text py-8">
            <h2 className="text-3xl font-bold">Need Help? Open a Ticket</h2>
            <p className="text-[#95ADB1]">
              Our support team will get back to you ASAP via email.
            </p>
          </div>

          <form className="flex flex-col flex-wrap gap-5">
            <div className="flex flex-wrap gap-5">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="field px-4 outline-none text-[#95ADB1] text-lg rounded-sm block w-full p-2"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="field px-4 outline-none text-[#95ADB1] text-lg rounded-sm block w-full p-2"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="field px-4 outline-none text-[#95ADB1] text-lg rounded-sm block w-full p-2  resize-none"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="w-full py-6">
              <button
                type="submit"
                className="w-[200px] bg-[#2C92C2] hover:bg-[#2B88B4] px-9 py-4 font-medium rounded-sm shadow-submit"
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
