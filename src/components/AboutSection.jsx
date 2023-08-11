import React from "react";

const AboutSection = () => {
  return (
    <>
      <div className="d-none d-lg-block">
        <div className="container">
          <div className="row mt-4">
            <div className="col">
              <div className="">
                <div className="">
                  <h4 className="mb-3">About this property</h4>
                </div>
                <p
                  className="text-sm"
                  style={{ maxHeight: "135px", overflow: "hidden" }}
                >
                  Welcome to the Hampton Inn Miami Beach - Mid Beach, located on
                  40th and Collins Avenue, adjacent to the A1A. Our Hampton Inn
                  was designed with all of the modern comforts that
                  today&amp;apos;s traveler expects. We are only 11 miles from
                  Miami International Airport and within walking distance of
                  Miami Beach Boardwalk. Spend the day on the soft sands of
                  Miami Beach with plenty of acti...
                </p>
                <a
                  href="#"
                  className="text-info text-sm fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#aboutThisPropertyModal"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="">
                <h4 className="mb-3">Popular amenities</h4>
                <div className="d-flex text-sm mb-0">
                  <div className="row">
                    <div className="col-auto">
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <p>Copier</p>
                        </li>
                        <li className="mb-2">
                          <p>Printer</p>
                        </li>
                        <li className="mb-2">
                          <p>Business center</p>
                        </li>
                        <li className="mb-2">
                          <p>Secretarial services</p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-auto">
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <p>Local calls</p>
                        </li>
                        <li className="mb-2">
                          <p>24-hour front desk</p>
                        </li>
                        <li className="mb-2">
                          <p>Elevators</p>
                        </li>
                        <li className="mb-2">
                          <p>Express check-in</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="text-info text-sm fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#popularAmenitiesModal"
                >
                  {" "}
                  View All{" "}
                </a>
              </div>
            </div>

            <div className="col">
              <div className="">
                <h4 className="mb-3">What&apos;s nearby</h4>
                <div className="mb-3">
                  <a
                    href="#"
                    className="text-info text-sm fw-bold"
                    data-bs-toggle="modal"
                    data-bs-target="#whatsNearbyModal"
                  >
                    <iframe
                      src="https://maps.google.com/maps?q=25.812670,-80.123270&amp;hl=en&amp;z=14&amp;output=embed"
                      width="100%"
                      height="130"
                      style={{ border: 0, borderRadius: "8px" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </a>
                </div>
                <a
                  href="#"
                  className="text-info text-sm fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#whatsNearbyModal"
                >
                  {" "}
                  Explore the area{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
