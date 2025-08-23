import why_choose_us from "../../utils/jsons/why_choose_us.json";
const Why_choose_us = () => {
  return (
    <>
      <div className="min-h-screen w-full overflow-hidden md:py-16 flex items-center justify-between md:gap-x-10 flex-col md:flex-row px-4">
        <div className="flex items-center justify-center md:w-[50%] h-screen w-[95%]">
          <div className="rounded-full overflow-hidden w-[400px] h-[400px] md:mr-20 flex items-center justify-center scale-[170%]">
            <img src="/7_why_choose_us/1.jpg" alt="Why Choose Us" />
          </div>
        </div>

        <div className="md:w-[50%] w-[95%] h-screen flex items-center justify-center">
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
