"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed bg-white z-30 shadow-lg">
      <div className="px-20 flex justify-between items-center h-[50px] md:h-[56px] w-full">
        <div className="cursor-pointer flex-[10%] flex justify-center items-center">
          <Link href="/">
            <div className="w-full h-full">
              <img
                className="h-full w-full object-cover"
                src="/logo/logo.png"
                alt="logo"
              />
            </div>
          </Link>
        </div>
        <ul className="hidden lg:flex space-x-8 md:flex justify-center h-full items-center flex-[60%]">
          <Link href="/" className="t-nav-links base-gold-text">
            Home
          </Link>
          <Link href="/" className="t-nav-links base-gold-text">
            Services
          </Link>
          <Link href="/" className="t-nav-links base-gold-text">
            Case Studies
          </Link>
          <Link href="/" className="t-nav-links base-gold-text">
            Gallery
          </Link>
          <Link href="/" className="t-nav-links base-gold-text">
            Process
          </Link>
          <Link href="/" className="t-nav-links base-gold-text">
            Testimonials
          </Link>
        </ul>
        <div className="hidden md:flex flex-[20%] justify-end space-x-6">
          <button className="btn t-2 base-gold-bg text-[#0D80F2] transition-all duration-300 cursor-pointer">
            Contact us
          </button>
          <button className="corner px-2 py-1 flex items-center justify-center bg-[#0D80F2] cursor-pointer">
            <p className="t-1 text-white">Get a Free Quote</p>
          </button>
        </div>
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-9 relative base-gold-bg rounded-[5px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-4 h-[2px] bg-black transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          ></span>
          <span
            className={`block w-4 h-[2px] bg-black mt-1 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[2px]" : ""
            }`}
          ></span>
          <span
            className={`block w-4 h-[2px] bg-black mt-1 transition-all duration-300 ${
              isOpen ? "hidden" : ""
            }`}
          ></span>
        </button>
      </div>
      <div
        className={`lg:hidden base-white-bg shadow-md transition-all duration-300 overflow-hidden rounded-[5px] ${
          isOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 pb-8">
          <li className="t-nav-links cursor-pointer base-gold-text">Home</li>
          <li className="t-nav-links cursor-pointer base-gold-text">
            Services
          </li>
          <li className="t-nav-links cursor-pointer base-gold-text">
            Case Studies
          </li>
          <li className="t-nav-links cursor-pointer base-gold-text">Gallery</li>
          <li className="t-nav-links cursor-pointer base-gold-text">Process</li>
          <li className="t-nav-links cursor-pointer base-gold-text">
            Testimonials
          </li>
          <div className="flex items-center flex-col justify-center space-y-4">
            <button className="btn-2 t-2 base-gold-bg base-white-text">
              Contact us
            </button>
            <button className="corner md:max-w-[20px] px-2 py-1 flex items-center justify-center border-[1.3px] border-white bg-[#0D80F2] cursor-pointer">
              <p className="t-1 text-white">Get a Free Quote</p>
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
