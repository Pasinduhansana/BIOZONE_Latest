import React from "react";
import { Vortex } from "../ui/Vortex";
import Footer from "./Footer";

const VortextComponent = ({
  homeRef,
  locationsRef,
  galleryRef,
  contactRef,
}) => {
  return (
    <div className="relative w-full bg-[#FFFFFF]">
      <Vortex
        backgroundColor="#FFFFFF"
        particleCount={5000}
        rangeY={1000}
        baseHue={366} // not using now
        rangeHue={10}
        className="flex flex-col items-center justify-center"
      >
        <Footer
          className="absolute bottom-0 left-0 w-screen"
          homeRef={homeRef}
          locationsRef={locationsRef}
          galleryRef={galleryRef}
          contactRef={contactRef}
        />
      </Vortex>
    </div>
  );
};

export default VortextComponent;
