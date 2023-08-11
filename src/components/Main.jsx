import React from "react";

const Main = () => {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col mt-6 mb-4">
              <h1 className="mb-1 h4" id="hotel_details">
                Hampton Inn Miami Beach - Mid Beach
              </h1>
              <div className="d-flex">
                <p className="text-sm m-0 me-3">
                  4000 Collins Ave, Miami, FL 33140
                </p>
                <a
                  href="https://maps.google.com/maps?q=25.812670,-80.123270&amp;hl=en&amp;z=14&amp;"
                  className="text-info text-sm fw-bold view-map d-none d-md-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <span></span> View on Map
                </a>
              </div>
            </div>
            <div className="property-gallery">
              <figure className="property-gallery__item property-gallery__item--1">
                <img
                  src="https://d2573qu6qrjt8c.cloudfront.net/74A28382383E460FB563F46E3F6FFE06/J.JPEG"
                  alt=""
                  className="property-gallery__img rounded"
                />
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#galleryViewModal"
                  className="btn btn-light btn-sm property-gallery__more-img-btn"
                >
                  +1 photos
                </button>
              </figure>
              <figure className="property-gallery__item property-gallery__item--2">
                <img
                  src="https://d2573qu6qrjt8c.cloudfront.net/45061AA35C434E619A76DADEC3DE496A/J.JPEG"
                  alt=""
                  className="property-gallery__img rounded"
                />
              </figure>
              <figure className="property-gallery__item property-gallery__item--3">
                <img
                  src="https://d2573qu6qrjt8c.cloudfront.net/05D2CA8EA3934EFCBDEB7DA48C45D9B9/J.JPEG"
                  alt=""
                  className="property-gallery__img rounded"
                />
              </figure>
              <figure className="property-gallery__item property-gallery__item--4">
                <img
                  src="https://d2573qu6qrjt8c.cloudfront.net/62B1E3418AF846D7BC559FDD814EC42E/J.JPEG"
                  alt=""
                  className="property-gallery__img rounded"
                />
              </figure>
              <figure className="property-gallery__item property-gallery__item--5">
                <img
                  src="https://d2573qu6qrjt8c.cloudfront.net/673167A85D7E4B2AA85DC9145F260F01/J.JPEG"
                  alt=""
                  className="property-gallery__img rounded"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
