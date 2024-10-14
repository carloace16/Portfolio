import React from "react";
import Marquee from "react-fast-marquee";

function FeaturedWorkMarquee() {
  return (
    <div className="overflow-hidden body-color pt-20">
      <Marquee speed={50} pauseOnHover={false}>
        {Array.from({ length: 20 }).map((_, index) => (
          <h1
            key={index}
            className="text-5xl font-bold text-white"
            style={{ padding: "0 20px" }}
          >
            Projects
          </h1>
        ))}
      </Marquee>
    </div>
  );
}

export default FeaturedWorkMarquee;
