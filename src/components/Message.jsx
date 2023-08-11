import React, { useState } from "react";
import Modal from "./Modal";

export default function Message() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="container-fluid bg-dark py-2 fixed-bottom d-block d-xxl-none">
        <div className="text-center">
          <p className="text-white text-sm fw-bold mb-0">
            You have{" "}
            <span className="room_quantity" style={{ color: "orange" }}>
              0
            </span>
            <span> rooms</span> in your block request
          </p>
          <button
            type="submit"
            id="cart_submit"
            className="btn btn-info m-1 cart_submit  d-none "
            data-toggle="modal"
            data-target="#viewCartModal"
          >
            Finalize Block Request
          </button>
          <a
            href="#"
            id="cart_what_is_this"
            className="text-light-teal text-sm fw-bold  cart_what_is_this"
            data-toggle="modal"
            data-target="#whatIsThisModal"
            onClick={() => setIsVisible((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.9998 18H10.9998V16H12.9998V18ZM12.9998 15H10.9998C10.9998 11.75 13.9998 12 13.9998 10C13.9998 8.90005 13.0998 8.00005 11.9998 8.00005C10.8998 8.00005 9.9998 8.90005 9.9998 10H7.9998C7.9998 7.79005 9.7898 6.00005 11.9998 6.00005C14.2098 6.00005 15.9998 7.79005 15.9998 10C15.9998 12.5 12.9998 12.75 12.9998 15ZM21.9998 12C21.9998 17.18 18.0498 21.4501 12.9998 21.9501V19.9401C16.9498 19.4501 19.9998 16.08 19.9998 12C19.9998 7.92005 16.9498 4.55005 12.9998 4.06005V2.05005C18.0498 2.55005 21.9998 6.82005 21.9998 12ZM10.9998 2.05005V4.06005C9.5398 4.24005 8.1998 4.82005 7.0898 5.68005L5.6698 4.26005C7.1498 3.05005 8.9998 2.25005 10.9998 2.05005ZM4.0598 11H2.0498C2.2498 9.00005 3.0498 7.15005 4.2598 5.67005L5.6798 7.10005C4.79599 8.22901 4.23599 9.57715 4.0598 11ZM10.9998 19.9401V21.9501C8.9998 21.7501 7.1498 20.96 5.6698 19.74L7.0898 18.32C8.1998 19.18 9.5398 19.7601 10.9998 19.9401ZM2.0498 13H4.0598C4.2398 14.46 4.8198 15.8 5.6798 16.91L4.2598 18.33C3.0161 16.8087 2.24752 14.9551 2.0498 13Z"
                fill="#75F6F9"
              ></path>
            </svg>
            How block requests work
          </a>
        </div>
      </div>
      {isVisible && <Modal setIsVisible={setIsVisible} />}
    </>
  );
}
