import React from "react";

export default function Modal(props) {
  const { setIsVisible } = props;
  return (
    <>
      <div
        className="modal fade show"
        id="whatIsThisModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        style={{ display: "block", paddingRight: "0px" }}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.9998 18H10.9998V16H12.9998V18ZM12.9998 15H10.9998C10.9998 11.75 13.9998 12 13.9998 10C13.9998 8.90005 13.0998 8.00005 11.9998 8.00005C10.8998 8.00005 9.9998 8.90005 9.9998 10H7.9998C7.9998 7.79005 9.7898 6.00005 11.9998 6.00005C14.2098 6.00005 15.9998 7.79005 15.9998 10C15.9998 12.5 12.9998 12.75 12.9998 15ZM21.9998 12C21.9998 17.18 18.0498 21.4501 12.9998 21.9501V19.9401C16.9498 19.4501 19.9998 16.08 19.9998 12C19.9998 7.92005 16.9498 4.55005 12.9998 4.06005V2.05005C18.0498 2.55005 21.9998 6.82005 21.9998 12ZM10.9998 2.05005V4.06005C9.5398 4.24005 8.1998 4.82005 7.0898 5.68005L5.6698 4.26005C7.14981 3.05005 8.9998 2.25005 10.9998 2.05005ZM4.0598 11H2.0498C2.2498 9.00005 3.0498 7.15005 4.2598 5.67005L5.6798 7.10005C4.79599 8.22901 4.23599 9.57715 4.0598 11ZM10.9998 19.9401V21.9501C8.9998 21.75 7.14981 20.96 5.6698 19.74L7.0898 18.32C8.1998 19.18 9.5398 19.76 10.9998 19.9401ZM2.0498 13H4.0598C4.2398 14.46 4.8198 15.8 5.6798 16.91L4.2598 18.33C3.0161 16.8087 2.24752 14.9551 2.0498 13Z"
                    fill="#038D96"
                  ></path>
                </svg>
                How our group block process works
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsVisible((prev) => !prev)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row px-5">
                <ol>
                  <li className="mb-5">
                    <strong>Select room type &amp; amounts</strong>
                    <p className="text-sm">
                      Click the "Request Block" button on your preferred room
                      type and rate. In the pop-up, enter the amount of rooms to
                      add to your block. Repeat this process to select any
                      combination of room types.
                    </p>
                    <div className="">
                      <img
                        src="https://reservemygroup.com/public/frontend/img/img-1.png"
                        alt=""
                        className=""
                      />
                      <img
                        src="https://reservemygroup.com/public/frontend/img/img-2.png"
                        alt=""
                        className=""
                      />
                    </div>
                  </li>

                  <li className="mb-5">
                    <strong>Review &amp; finalize</strong>
                    <p className="text-sm">
                      Once you have added all your rooms, click on the "Finalize
                      Block Request" button to review your selections. Our
                      checkout process will prompt you to provide some
                      information about your group. No payment is required to
                      complete the request.
                    </p>
                    <div className="">
                      <img
                        src="https://reservemygroup.com/public/frontend/img/img-3.png"
                        alt=""
                        className=""
                      />
                      <img
                        src="https://reservemygroup.com/public/frontend/img/img-4.png"
                        alt=""
                        className=""
                      />
                    </div>
                  </li>

                  <li className="mb-5">
                    <strong>
                      Receive an answer either instantly or within 3-5 business
                      days.
                    </strong>
                    <p className="text-sm">
                      If your selected room type shows adequate availability for
                      instant booking, after checkout, you will receive you
                      booking link.
                    </p>

                    <p className="text-sm">
                      Any non-instant book type room requires the GroupBook
                      system to negotiate with the hotel on your behalf. You
                      will receive an update in 3-5 business days. Once
                      approved, we will send you a booking link to share with
                      your group to reserve thier individual rooms.
                    </p>

                    <p className="text-sm">
                      Please note, in some instances, the hotel may not be able
                      to accommodate your group. No worries though, our support
                      team can reach out to our other partner hotels. Please
                      feel free to contact us at anytime with any questions or
                      concerns.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                data-dismiss="modal"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
