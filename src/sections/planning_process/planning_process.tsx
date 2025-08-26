import planning_process from "../../utils/jsons/planning_process.json";
const Planning_process = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen max-w-full md:px-12 px-6 space-y-10 my-18 pt-16 md:pt-0 bg-gradient-to-b from-[#0D80F2] from-[70%] to-white text-white">
        <div className="text-center space-y-3">
          <p className="t-5 font-montserrat">Our 3-Step Planning Process</p>
          <p className="t-2">
            We follow a proven process to ensure every event is flawlessly
            execute, from initial <br /> consulation to post-event follow up.
          </p>
        </div>
        <div className="h-full flex items-center justify-between md:gap-x-12 gap-x-0 gap-y-14 md:gap-y-0 flex-col lg:flex-row mb-24">
          {planning_process.map((i, index) => (
            <div key={index}>
              <div className="h-[50px] w-[50px] mb-6">
                <img
                  src={i.img}
                  className="h-full w-full object-cover"
                  alt="img"
                />
              </div>
              <div className="space-y-3">
                <p className="t-4 ">{i.title}</p>
                <p className="t-2">{i.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="flex items-center justify-center corner bg-[#FF982F] cursor-pointer text-white space-x-2.5 px-5 py-4">
          <div className="h-[25px] w-[25px]">
            <img
              src="/4_planning_process/4.png"
              className="h-full w-full object-cover"
              alt="img"
            />
          </div>
          <p className="t-2">Book a free consultation</p>
        </button>
      </div>
    </>
  );
};

export default Planning_process;
