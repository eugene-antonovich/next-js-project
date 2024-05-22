// 404 Error Page Style File Path: public/css/pages-and-components-css/error.scss

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <div className="error-area ptb-100">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <Image
                  src="/images/error.png"
                  alt="image"
                  width={743}
                  height={372}
                />
                <p>
                  The page you are looking for might have been removed had its
                  name changed or is temporarily unavailable.
                </p>

                <Link href="/" className="default-btn">
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
