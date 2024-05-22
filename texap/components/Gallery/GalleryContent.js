import React from "react";
import Lightbox from "react-18-image-lightbox";
import Image from "next/image";

const images = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
  "/images/gallery/gallery7.jpg",
  "/images/gallery/gallery8.jpg",
  "/images/gallery/gallery9.jpg",
];

const GalleryContent = () => {
  const [photoIndex, setPhotoIndex] = React.useState(0);
  const [isOpenImage, setIsOpenImage] = React.useState(false);

  return (
    <>
      <div className="gallery-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            {/* Lightbox */}
            {isOpenImage && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => setIsOpenImage(false)}
                onMovePrevRequest={() =>
                  setPhotoIndex(
                    (photoIndex + images.length - 1) % images.length
                  )
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % images.length)
                }
              />
            )}

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-gallery-item">
                <div
                  className="popup-image"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(0);
                  }}
                >
                  <Image
                    src="/images/gallery/gallery1.jpg"
                    alt="image"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-gallery-item">
                <div
                  className="popup-image"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(1);
                  }}
                >
                  <Image
                    src="/images/gallery/gallery2.jpg"
                    alt="image"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-gallery-item">
                <div
                  className="popup-image"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(2);
                  }}
                >
                  <Image
                    src="/images/gallery/gallery3.jpg"
                    alt="image"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-gallery-item">
                <div
                  className="popup-image"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(3);
                  }}
                >
                  <Image
                    src="/images/gallery/gallery4.jpg"
                    alt="image"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-gallery-item">
                <div
                  className="popup-image"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(4);
                  }}
                >
                  <Image
                    src="/images/gallery/gallery5.jpg"
                    alt="image"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-gallery-item">
                <div
                  className="popup-image"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(5);
                  }}
                >
                  <Image
                    src="/images/gallery/gallery6.jpg"
                    alt="image"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-gallery-item">
                <div
                  className="popup-image"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(6);
                  }}
                >
                  <Image
                    src="/images/gallery/gallery7.jpg"
                    alt="image"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-gallery-item">
                <div
                  className="popup-image"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(7);
                  }}
                >
                  <Image
                    src="/images/gallery/gallery8.jpg"
                    alt="image"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-gallery-item">
                <div
                  className="popup-image"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(8);
                  }}
                >
                  <Image
                    src="/images/gallery/gallery9.jpg"
                    alt="image"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryContent;
