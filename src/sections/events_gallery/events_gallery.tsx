"use client";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import LightGallery from "lightgallery/react";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import events_gallery from "../../utils/jsons/events_gallery.json";
import events_gallery_buttons from "../../utils/jsons/events_gallery_buttons.json";
const Events_gallery = () => {
  return (
    <>
      <div className="min-h-screen w-full space-y-10 py-16">
        <div className="text-center space-y-6 mb-12">
          <p className="t-5 font-montserrat">Events Gallery</p>
          <div className="md:max-w-2xl w-[90%] mx-auto flex items-center justify-center space-x-5">
            {events_gallery_buttons.map((i, index) => (
              <button
                key={index}
                className="corner md:max-w-[20px] px-1.5 py-0.5 md:px-18 md:py-1.5 flex items-center justify-center border-[1.3px] border-[#0D80F2] bg-[#0d80f24c] cursor-pointer"
              >
                <p className="t-1 text-[#0D80F2]">{i.btn}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="w-[95%] mx-auto">
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            selector="a"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {events_gallery.map((i, index) => (
                <a key={index} href={i.img}>
                  <img
                    className="w-full h-60 object-cover rounded-lg shadow-md"
                    src={i.img}
                    alt={`Event ${index + 1}`}
                  />
                </a>
              ))}
            </div>
          </LightGallery>
        </div>
      </div>
    </>
  );
};

export default Events_gallery;
