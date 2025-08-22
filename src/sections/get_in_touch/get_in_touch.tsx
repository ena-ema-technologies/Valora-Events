const Get_in_touch = () => {
  return (
    <>
      <div className="min-h-screen w-full pb-16 flex items-center justify-between  flex-col md:flex-row text-white custom-blue">
        <div className="md:flex-[45%] flex items-center justify-center h-screen">
          <div className="w-[80%] space-y-5">
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
                Any queries? Don’t hesitate to get in touch with us. We will get
                back to you within 24 hours, that’s a promise.
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
                <p className="t-1 text-white">Get a Free Quote</p>
              </button>
            </form>
          </div>
        </div>
        <div className="md:flex-[55%] h-screen">
          <div className="h-full w-full">
            <img
              src="/get_in_touch/1.jpg"
              className="h-full w-full object-cover"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Get_in_touch;
