import React from "react";
import Location from "../components/Location";
import LiveAnywhere from "../components/LiveAnywhere";
import Experience from "../components/Experience";
import MillionHost from "../components/MillionHost";
import TabsSection from "../components/TabsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div>
         <div className="customContainer">
          <Location />
          <LiveAnywhere />
        </div>

        <Experience />
        <div className="customContainer">
          <MillionHost />
          <TabsSection />
        </div>
        <Footer />
      </div>
    </>
  );
}
