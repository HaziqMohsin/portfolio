import React from "react";
import ContactForm from "./ContactForm";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Contact = () => {
  const containerStyle = {
    width: "100%",
    height: "100vh",
  };

  const center = {
    lat: 2.9652,
    lng: 101.8162,
  };

  return (
    <div className="flex items-center h-full">
      <div className="p-10">
        <div className="text-white font-bold text-[103px] relative">
          Contact Me
        </div>
        <div className="text-white mb-10">
          I’m interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to use the form.
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      <div className="flex-none w-1/2">
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11.5}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Contact;
