import why_choose_us from "../../utils/jsons/why_choose_us.json";
const Why_choose_us = () => {
  return (
    <>
      <div className="h-screen w-full my-0 md:my-18 flex items-center justify-between gap-x-20">
        <div className="hidden md:flex md:w-[50%] h-full">
          <div className="h-full w-full flex items-center justify-start">
            <img
              src="/7_why_choose_us/1.png"
              className="object-cover h-full w-full"
              alt="Why Choose Us"
            />
          </div>
        </div>

        <div className="md:w-[50%] w-full h-screen flex items-center justify-center px-4">
          <div>
            <div className="mb-10 space-y-3">
              <p className="t-5 font-montserrat">Why choose us?</p>
              <p className="t-2">
                From experience to professionalism, everything you need to
                create the next event successful
              </p>
            </div>
            <div>
              {why_choose_us.map((i, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2.5 py-3.5"
                >
                  <div className="h-4 w-4">
                    <img
                      className="h-full w-full object-cover"
                      src={i.img}
                      alt="img"
                    />
                  </div>
                  <p className="white-gray-2 text-[16px] md:text-[20px]">
                    {i.point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why_choose_us;
