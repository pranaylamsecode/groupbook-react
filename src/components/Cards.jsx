import React from "react";

const rooms = [
  {
    title: "Standard 1 King bed",
    price: "$ 160.88",
    size: "2 guests • 1 King",
    description:
      "restricted cxl, king room w/ mini fridge non smoking, free wi-fi/hot breakfast included/hdtv, work area/coffee-tea faci",
  },
  {
    title: "Accessible Room 1 King bed",
    price: "$ 160.88",
    size: "2 guests • 1 King",
    description:
      "restricted cxl, king room w/ mini fridge non smoking, free wi-fi/hot breakfast included/hdtv, work area/coffee-tea faci",
  },
  {
    title: "Standard 1 King bed",
    price: "$ 164.16",
    size: "2 guests • 1 King",
    description:
      "best available rate, king room w/ mini fridge non smoking, free wi-fi/hot breakfast included/hdtv, work area/coffee-tea",
  },
  {
    title: "Accessible Room 1 King bed",
    price: "$ 164.16",
    size: "2 guests • 1 King",
    description:
      "restricted cxl, king room w/ mini fridge non smoking, free wi-fi/hot breakfast included/hdtv, work area/coffee-tea faci",
  },
  {
    title: "Standard 1 King bed",
    price: "$ 167.44",
    size: "2 guests • 1 King",
    description:
      "restricted cxl, king room w/ mini fridge non smoking, free wi-fi/hot breakfast included/hdtv, work area/coffee-tea faci",
  },
];

const Cards = () => {
  return (
    <>
      <div className="pt-4">
        <div className="container">
          <div className="d-md-flex bd-highlight pt-3">
            <div className="p-2">
              <h5 className="">Choose your room</h5>
            </div>
            <div className="p-2 mx-3 fw-bold bd-highlight d-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clipPath="url(#clip0_2239_2080)">
                  <path
                    d="M3 15.75V10.5"
                    stroke="#2f708f"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3 7.5V2.25"
                    stroke="#2f708f"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M9 15.75V9"
                    stroke="#2f708f"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M9 6V2.25"
                    stroke="#2f708f"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 15.75V12"
                    stroke="#2f708f"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 9V2.25"
                    stroke="#2f708f"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M0.75 10.5H5.25"
                    stroke="#2f708f"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M6.75 6H11.25"
                    stroke="#2f708f"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.75 12H17.25"
                    stroke="#2f708f"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2239_2080">
                    <rect width="18" height="18" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              Filters
            </div>
            <div className="p-2">
              <div className="form-check bd-highlight" tabIndex="0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checklistSix"
                />
                <label className="form-check-label fw-bold">
                  Show total with taxes &amp; fees
                </label>
              </div>
            </div>
          </div>
          <div className="container p-0">
            <div
              className="text-block row d-flex"
              id="roomsBlockAmadeus"
              style={{ paddingTop: "0px" }}
            >
              {rooms.map((room, i) => {
                return (
                  <div key={i} className="col-12 col-md-4 mb-4">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="https://d2573qu6qrjt8c.cloudfront.net/74A28382383E460FB563F46E3F6FFE06/J.JPEG"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{room.title}</h5>
                        <h6 className="text-primary">{room.price}</h6>
                        <h6 className="card-subtitle mb-2 text-muted ">
                          {room.size}
                        </h6>
                        <p className="card-text">{room.description}</p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
