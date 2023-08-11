import React from "react";

const AboutSection = () => {
  return (
    <>
      <div class="d-none d-lg-block">
        <div class="container">
          <div class="row mt-4">
            <div class="col">
              <div class="">
                <div class="">
                  <h4 class="mb-3">About this property</h4>
                </div>
                <p
                  class="text-sm"
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
                  class="text-info text-sm fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#aboutThisPropertyModal"
                >
                  Read more
                </a>
              </div>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="">
                <h4 class="mb-3">Popular amenities</h4>
                <div class="d-flex text-sm mb-0">
                  <div class="row">
                    <div class="col-auto">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <p>Copier</p>
                        </li>
                        <li class="mb-2">
                          <p>Printer</p>
                        </li>
                        <li class="mb-2">
                          <p>Business center</p>
                        </li>
                        <li class="mb-2">
                          <p>Secretarial services</p>
                        </li>
                      </ul>
                    </div>
                    <div class="col-auto">
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <p>Local calls</p>
                        </li>
                        <li class="mb-2">
                          <p>24-hour front desk</p>
                        </li>
                        <li class="mb-2">
                          <p>Elevators</p>
                        </li>
                        <li class="mb-2">
                          <p>Express check-in</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  class="text-info text-sm fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#popularAmenitiesModal"
                >
                  {" "}
                  View All{" "}
                </a>
              </div>
            </div>

            <div class="col">
              <div class="">
                <h4 class="mb-3">What's nearby</h4>
                <div class="mb-3">
                  <a
                    href="#"
                    class="text-info text-sm fw-bold"
                    data-bs-toggle="modal"
                    data-bs-target="#whatsNearbyModal"
                  >
                    <iframe
                      src="https://maps.google.com/maps?q=25.812670,-80.123270&amp;hl=en&amp;z=14&amp;output=embed"
                      width="100%"
                      height="130"
                      style={{ border: 0, borderRadius: "8px" }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </a>
                </div>
                <a
                  href="#"
                  class="text-info text-sm fw-bold"
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
