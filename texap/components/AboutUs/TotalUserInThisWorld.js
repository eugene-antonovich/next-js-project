import React from "react";
import Image from "next/image";

const TotalUserInThisWorld = () => {
  return (
    <>
      <div className="stats-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR STATS</span>
            <h2>Total User In This World</h2>
          </div>
          <div className="stats-map text-center">
            <Image src="/images/map.png" alt="map" width={1870} height={915} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalUserInThisWorld;
