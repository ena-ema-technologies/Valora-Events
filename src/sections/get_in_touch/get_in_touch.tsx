const Get_in_touch = () => {
  return (
    <>
      <div className="min-h-screen w-full mt-3.5 md:mt-14 pt-6 md:pt-0 custom-blue relative">
        {/* main flex section */}
        <div className="flex items-center justify-between flex-col md:flex-row text-white custom-blue">
          {/* left side form */}
          <div className="md:flex-[45%] flex items-center justify-center h-screen">
            <div className="md:w-[80%] w-[90%] space-y-5">
              <p className="t-5 font-montserrat">Get in touch with us</p>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10">
                  <img
                    src="/get_in_touch/logo.png"
                    className="h-full w-full object-cover"
                    alt="img"
                  />
                </div>
                <p className="t-1">
                  Any queries? Don’t hesitate to get in touch with us. We will
                  get back to you within 24 hours, that’s a promise.
                </p>
              </div>
              <form className="space-y-2.5">
                <div>
                  <p className="t-1 mb-1.5">Name</p>
                  <input
                    className="w-full md:w-[90%] bg-[#53a1ef] rounded-[6px] px-3 py-1.5 border-0 outline-0"
                    type="text"
                    placeholder="Rachel Joe"
                  />
                </div>
                <div>
                  <p className="t-1 mb-1.5">Email</p>
                  <input
                    className="w-full md:w-[90%] bg-[#53a1ef] rounded-[6px] px-3 py-1.5 border-0 outline-0"
                    type="email"
                    placeholder="Rachel@domain.com"
                  />
                </div>
                <div>
                  <p className="t-1 mb-1.5">Message</p>
                  <input
                    className="w-full md:w-[90%] bg-[#53a1ef] rounded-[6px] px-3 py-1.5 border-0 outline-0"
                    type="text"
                    placeholder="Type your query here....."
                  />
                </div>
                <button
                  type="submit"
                  className="corner px-2.5 py-2 flex items-center justify-center bg-[#FF982F] cursor-pointer mt-8"
                >
                  <p className="text-white">Send Messages</p>
                </button>
              </form>
            </div>
          </div>

          {/* right side image */}
          <div className="md:flex-[55%] md:h-screen h-[50%] mt-8 md:mt-0">
            <div className="h-full w-full">
              <img
                src="/get_in_touch/1.jpg"
                className="h-full w-full object-cover"
                alt="img"
              />
            </div>
          </div>
        </div>

        {/* bottom floating box */}
        <div className="absolute -bottom-32 md:-bottom-20 left-1/2 -translate-x-1/2 w-full px-4 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between bg-white corner py-7 px-6 md:px-14 gap-y-6 md:gap-x-14 w-full max-w-5xl shadow-lg">
            <div className="text-[24px] md:text-[30px] font-[700] leading-9 md:text-left">
              <p className="font-montserrat text-[#0D80F2]">
                Let’s make your next event
              </p>
              <p className="font-montserrat italic text-[#FF982F]">
                unforgettable
              </p>
            </div>
            <div className="md:space-x-4 space-x-4 flex items-center justify-between md:justify-center">
              <button
                type="submit"
                className="corner md:px-3 px-2 md:py-2 py-1 flex items-center justify-center bg-[#FF982F] cursor-pointer"
              >
                <p className="text-white text-[14px] font-[500]">
                  Get a free quote
                </p>
              </button>
              <button
                type="submit"
                className="corner md:px-3 px-2 md:py-2 py-1 flex items-center justify-center bg-transparent cursor-pointer border-[1.4px] border-[#FF982F] text-[#FF982F] hover:bg-[#FF982F] hover:text-[white]"
              >
                <p className="text-[13px] font-[600]">Contact us</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Get_in_touch;
