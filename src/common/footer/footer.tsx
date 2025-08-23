import Image from "next/image";
import footerimg from "../../utils/jsons/footer-img.json";
import footer from "../../utils/jsons/footer.json";
const Footer = () => {
  return (
    <>
      <div className="min-h-[40%] w-full py-16 custom-blue">
        <div className="md:pl-39 pl-4 mb-10">
          <div className="w-28">
            <Image
              src="/logo/logo.png"
              className="object-cover"
              width={150}
              height={150}
              alt="img"
            />
          </div>
        </div>
        <div className="flex items-center justify-center md:w-[95%] mx-auto flex-col md:flex-row">
          <div className="flex items-center flex-col md:flex-row w-full md:px-32 px-6 md:gap-x-20 gap-y-7">
            <div className="md:flex-[80%] w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {footer.map((i, index) => (
                <ul key={index} className="text-white self-start">
                  <li className="t-2-max mb-8 font-montserrat">{i.title}</li>
                  <div className="footer-links cursor-pointer space-y-3">
                    {i.links.map((i, index) => (
                      <li key={index}>{i}</li>
                    ))}
                  </div>
                </ul>
              ))}
            </div>
            <div className="md:flex-[20%] w-full self-start">
              <ul className="t-2-max font-montserrat text-white mb-4">
                Let's do it!
              </ul>

              <div className="flex items-center gap-x-3">
                {footerimg.map((i, indx) => (
                  <div key={indx} className="cursor-pointer h-[20px] w-[20px]">
                    <Image
                      className="object-cover"
                      src={i.img}
                      width={48}
                      height={48}
                      alt="img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
