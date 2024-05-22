import React from "react";
import Image from "next/image";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Preloader = () => {
  // Logo API
  const [logo, setLogo] = React.useState();
  React.useEffect(() => {
    const getLogo = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/site-logo?populate=*`
      );
      setLogo(response.data);
      // console.log(response.data);
    };
    getLogo();
  }, []);
  // End Logo API

  return (
    <>
      <div className="preloader-area">
        <div className="d-table">
          <div className="d-table-cell">
            {logo && (
              <Image
                src={logo.data.attributes.blackLogo.data.attributes.url}
                alt={
                  logo.data.attributes.blackLogo.data.attributes.alternativeText
                }
                width={138}
                height={44}
              />
            )}

            <p>Loading...</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .preloader-area {
          position: fixed;
          background: #fff;
          width: 100%;
          top: 0;
          height: 100%;
          z-index: 1010;
          left: 0;
          text-align: center;
          opacity: 0.96;
        }
        .preloader-area img {
          margin-bottom: 5px;
        }
        .preloader-area p {
          font-size: 17px;
        }
      `}</style>
    </>
  );
};

export default Preloader;
