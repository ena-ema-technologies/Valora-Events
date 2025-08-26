import Image from "next/image";
import Link from "next/link";
import footerimg from "../../utils/jsons/footer-img.json";
import footer from "../../utils/jsons/footer.json";
const Footer = () => {
  return (
    <>
      <div className="min-h-[40%] w-full pt-56 md:pt-44 custom-blue max-w-full md:px-12 px-4">
        <div className="mb-10">
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
        <div className="flex items-center justify-center mx-auto flex-col md:flex-row md:mb-20 mb-10">
          <div className="flex items-center flex-col md:flex-row w-full md:gap-x-20 gap-y-7">
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
        <hr className="text-white" />
        <div className="flex items-center justify-between mx-auto text-white py-5">
          <ul className="flex space-x-4 xl:space-x-7 items-center text-[14px] font-[400]">
            <Link href="/" className="nav-links">
              Privacy Policy
            </Link>
            <Link href="/" className="nav-links">
              Terms of Use
            </Link>
            <Link href="/" className="nav-links hidden md:block">
              Sales and Refunds
            </Link>
            <Link href="/" className="nav-links hidden md:block">
              Legal
            </Link>
            <Link href="/" className="nav-links hidden md:block">
              Site Map
            </Link>
          </ul>
          <p className="text-[12px] font-[300] tracking-wider">
            © 2025 All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
