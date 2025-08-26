import what_do_we_do from "../../utils/jsons/what_do_we_do.json";

const What_do_we_do = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen max-w-full md:px-12 px-4 space-y-10 mb-18 bg-[#F6F8FF]">
        <div className="text-center space-y-2">
          <p className="t-5 font-montserrat">What do we do</p>
          <p className="t-2">
            From corporate conferences to intimate gatherings, we tailor our
            services to <br /> meet your unique needs and vision.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-0 md:gap-x-3 gap-y-3 md:gap-y-0 h-fit">
          {/* card1 */}
          {what_do_we_do.map((i, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center corner pb-2 shadow-lg bg-white"
            >
              <div className="md:h-[65%] w-full">
                <img
                  className="w-full h-full object-cover corner-max"
                  src={i.img}
                  alt="photo"
                />
              </div>
              <div className="h-[35%] p-3.5 flex flex-col justify-between w-full">
                <p className="t-2-max font-montserrat">{i.title}</p>
                <p className="white-gray pb-5 pt-3">{i.description}</p>
                <button className="flex items-center justify-center corner custom-blue py-2 cursor-pointer text-white">
                  Get a custom quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default What_do_we_do;
