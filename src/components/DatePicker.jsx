import React, { useState } from "react";
export default function Picker() {
  return (
    <>
      <div className="bg-dark sticky-md-top mt-lg-5">
        <div className="container p-3">
          <div className="row">
            <div className="col-12" style={{ maxWidth: 870 }}>
              <div className="">
                {/* <p class="choose-room-text mb-1">Choose your room </p> */}
                <div id="booking-price" className="panel panel-default">
                  <div className="" id="booking-banner">
                    <div className="secondary-bg">
                      <div className="col-lg-12">
                        <div className="row">
                          <div
                            className="text-dark text-14"
                            id="per_night"
                            style={{ display: "none" }}
                          >
                            <div id="per_night" className="per-night">
                              Per Night
                            </div>
                            <div id="per_month" className="per-month d-none">
                              Per Month
                              <i
                                id="price-info-tooltip"
                                className="fa fa-question hide"
                                data-behavior="tooltip"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <form
                      acceptCharset="UTF-8"
                      method="post"
                      data-room-id=""
                      action="https://reservemygroup.com/payments/book/roomundefined"
                      id="booking_form"
                      noValidate="novalidate"
                      data-hs-cf-bound="true"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="MLQz038afNUBdkTkNRethLGkDeaDyz4PEJGBCWCN"
                      />
                      <div className="d-md-flex row g-1" id="room-booking">
                        <div className="col-6 col-md-3 choose-room-box">
                          <div
                            className="form-floating datepicker-container datepicker-container-left"
                            id="dateRangepicker"
                          >
                            <input
                              type="text"
                              className="form-control form-control-sm valid"
                              name="checkin"
                              id="startDate"
                              placeholder="Check-in"
                              defaultValue="09/14/2023"
                              required=""
                              readOnly=""
                              aria-invalid="false"
                            />

                            <label htmlFor="startDate" className="text-sm">
                              Check-in
                            </label>
                            <div
                              className="date-picker-wrapper no-shortcuts no-gap two-months"
                              style={{
                                top: 62,
                                left: 0,
                                userSelect: "none",
                                display: "none",
                              }}
                            >
                              <div className="drp_top-bar normal">
                                <div className="normal-top">
                                  <span className="selection-top">
                                    Selected:{" "}
                                  </span>{" "}
                                  <b className="start-day">09/14/2023</b>{" "}
                                  <span className="separator-day"> to </span>{" "}
                                  <b className="end-day">09/16/2023</b>{" "}
                                  <i
                                    className="selected-days"
                                    style={{ display: "inline" }}
                                  >
                                    (
                                    <span className="selected-days-num">3</span>{" "}
                                    Days)
                                  </i>
                                </div>
                                <div className="error-top">error</div>
                                <div className="default-top">
                                  Please select a date range longer than 2 days
                                </div>
                                <input
                                  type="button"
                                  className="apply-btn hide btn btn-primary"
                                  defaultValue="Close"
                                />
                              </div>
                              <div
                                className="month-wrapper"
                                style={{ width: 607 }}
                              >
                                {" "}
                                <table
                                  className="month1"
                                  cellSpacing={0}
                                  border={0}
                                  cellPadding={0}
                                >
                                  {" "}
                                  <thead>
                                    {" "}
                                    <tr className="caption">
                                      {" "}
                                      <th>
                                        {" "}
                                        <span className="prev">&lt; </span>{" "}
                                      </th>{" "}
                                      <th colSpan={5} className="month-name">
                                        <div className="month-element">
                                          september
                                        </div>{" "}
                                        <div className="month-element">
                                          2023
                                        </div>
                                      </th>{" "}
                                      <th>
                                        <span className="next">&gt;</span>{" "}
                                      </th>{" "}
                                    </tr>{" "}
                                    <tr className="week-name">
                                      <th>su</th>
                                      <th>mo</th>
                                      <th>tu</th>
                                      <th>we</th>
                                      <th>th</th>
                                      <th>fr</th>
                                      <th>sa</th>{" "}
                                    </tr>
                                  </thead>{" "}
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day lastMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 27</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day lastMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 28</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day lastMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 29</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day lastMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 30</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day lastMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 31</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 1</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 2</span>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 3</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 4</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 5</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 6</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 7</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 8</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 9</span>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 10</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 11</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 12</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 13</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth checked first-date-selected valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 14</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp checked"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 15</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp checked last-date-selected"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 16</span>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 17</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 18</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 19</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 20</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 21</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 22</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 23</span>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 24</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 25</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 26</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 27</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 28</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 29</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 30</span>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>{" "}
                                </table>
                                <div
                                  className="gap"
                                  style={{ visibility: "hidden", height: 275 }}
                                >
                                  <div className="gap-top-mask" />
                                  <div className="gap-bottom-mask" />
                                  <div className="gap-lines">
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                    <div className="gap-line">
                                      <div className="gap-1" />
                                      <div className="gap-2" />
                                      <div className="gap-3" />
                                    </div>
                                  </div>
                                </div>
                                <table
                                  className="month2"
                                  cellSpacing={0}
                                  border={0}
                                  cellPadding={0}
                                >
                                  {" "}
                                  <thead>
                                    {" "}
                                    <tr className="caption">
                                      {" "}
                                      <th>
                                        <span className="prev">&lt;</span>{" "}
                                      </th>{" "}
                                      <th colSpan={5} className="month-name">
                                        <div className="month-element">
                                          october
                                        </div>{" "}
                                        <div className="month-element">
                                          2023
                                        </div>
                                      </th>{" "}
                                      <th>
                                        {" "}
                                        <span className="next">&gt;</span>{" "}
                                      </th>{" "}
                                    </tr>{" "}
                                    <tr className="week-name">
                                      <th>su</th>
                                      <th>mo</th>
                                      <th>tu</th>
                                      <th>we</th>
                                      <th>th</th>
                                      <th>fr</th>
                                      <th>sa</th>{" "}
                                    </tr>
                                  </thead>{" "}
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 1</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 2</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 3</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 4</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 5</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 6</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 7</span>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 8</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 9</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 10</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 11</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 12</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 13</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 14</span>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 15</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 16</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 17</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 18</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 19</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 20</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 21</span>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 22</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 23</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 24</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 25</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 26</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 27</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 28</span>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 29</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 30</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day toMonth valid tmp"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 31</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day nextMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 1</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day nextMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 2</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day nextMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 3</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          data-tooltip=""
                                          className="day nextMonth valid"
                                        >
                                          <div style={{ padding: 5 }}>
                                            <span style={{}}> 4</span>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="dp-clearfix" />
                              </div>
                              <div className="dp-clearfix" />
                            </div>
                            <div className="footer" />
                            <div
                              className="date-range-length-tip"
                              style={{
                                display: "none",
                                visibility: "visible",
                                left: "256.547px",
                                top: "174.797px",
                              }}
                            >
                              3 Days
                            </div>
                          </div>
                          <div
                            className="date-picker-wrapper no-shortcuts no-gap two-months"
                            style={{
                              top: 62,
                              left: "212.5px",
                              userSelect: "none",
                              display: "none",
                            }}
                            unselectable="on"
                          >
                            <div className="drp_top-bar normal">
                              <div className="normal-top">
                                <span className="selection-top">
                                  Selected:{" "}
                                </span>{" "}
                                <b className="start-day">09/14/2023</b>{" "}
                                <span className="separator-day"> to </span>{" "}
                                <b className="end-day">09/16/2023</b>{" "}
                                <i
                                  className="selected-days"
                                  style={{ display: "inline" }}
                                >
                                  (<span className="selected-days-num">3</span>{" "}
                                  Days)
                                </i>
                              </div>
                              <div className="error-top">error</div>
                              <div className="default-top">
                                Please select a date range longer than 2 days
                              </div>
                              <input
                                type="button"
                                className="apply-btn hide btn btn-primary"
                                defaultValue="Close"
                              />
                            </div>
                            <div
                              className="month-wrapper"
                              style={{ width: 607 }}
                            >
                              {" "}
                              <table
                                className="month1"
                                cellSpacing={0}
                                border={0}
                                cellPadding={0}
                              >
                                {" "}
                                <thead>
                                  {" "}
                                  <tr className="caption">
                                    {" "}
                                    <th>
                                      {" "}
                                      <span className="prev">&lt; </span>{" "}
                                    </th>{" "}
                                    <th colSpan={5} className="month-name">
                                      <div className="month-element">
                                        september
                                      </div>{" "}
                                      <div className="month-element">2023</div>
                                    </th>{" "}
                                    <th>
                                      <span className="next">&gt;</span>{" "}
                                    </th>{" "}
                                  </tr>{" "}
                                  <tr className="week-name">
                                    <th>su</th>
                                    <th>mo</th>
                                    <th>tu</th>
                                    <th>we</th>
                                    <th>th</th>
                                    <th>fr</th>
                                    <th>sa</th>{" "}
                                  </tr>
                                </thead>{" "}
                                <tbody>
                                  <tr>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day lastMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 27</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day lastMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 28</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day lastMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 29</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day lastMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 30</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day lastMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 31</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 1</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 2</span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 3</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 4</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 5</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 6</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 7</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 8</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 9</span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 10</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 11</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 12</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 13</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid checked first-date-selected"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 14</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid checked"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 15</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid checked last-date-selected"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 16</span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 17</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 18</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 19</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 20</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 21</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 22</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 23</span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 24</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 25</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 26</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 27</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 28</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 29</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 30</span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>{" "}
                              </table>
                              <div
                                className="gap"
                                style={{ visibility: "hidden", height: 275 }}
                              >
                                <div className="gap-top-mask" />
                                <div className="gap-bottom-mask" />
                                <div className="gap-lines">
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                  <div className="gap-line">
                                    <div className="gap-1" />
                                    <div className="gap-2" />
                                    <div className="gap-3" />
                                  </div>
                                </div>
                              </div>
                              <table
                                className="month2"
                                cellSpacing={0}
                                border={0}
                                cellPadding={0}
                              >
                                {" "}
                                <thead>
                                  {" "}
                                  <tr className="caption">
                                    {" "}
                                    <th>
                                      <span className="prev">&lt;</span>{" "}
                                    </th>{" "}
                                    <th colSpan={5} className="month-name">
                                      <div className="month-element">
                                        october
                                      </div>{" "}
                                      <div className="month-element">2023</div>
                                    </th>{" "}
                                    <th>
                                      {" "}
                                      <span className="next">&gt;</span>{" "}
                                    </th>{" "}
                                  </tr>{" "}
                                  <tr className="week-name">
                                    <th>su</th>
                                    <th>mo</th>
                                    <th>tu</th>
                                    <th>we</th>
                                    <th>th</th>
                                    <th>fr</th>
                                    <th>sa</th>{" "}
                                  </tr>
                                </thead>{" "}
                                <tbody>
                                  <tr>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 1</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 2</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 3</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 4</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 5</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 6</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 7</span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 8</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 9</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 10</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 11</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 12</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 13</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 14</span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 15</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 16</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 17</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 18</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 19</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 20</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 21</span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 22</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 23</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 24</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 25</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 26</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 27</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 28</span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 29</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 30</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day toMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 31</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day nextMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 1</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day nextMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 2</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day nextMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 3</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        data-tooltip=""
                                        className="day nextMonth valid"
                                      >
                                        <div style={{ padding: 5 }}>
                                          <span style={{}}> 4</span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div className="dp-clearfix" />
                            </div>
                            <div className="dp-clearfix" />
                          </div>
                          <div className="footer" />
                          <div className="date-range-length-tip" />
                        </div>

                        <input
                          type="hidden"
                          id="room_id"
                          name="room_id"
                          defaultValue=""
                        />
                        <input
                          type="hidden"
                          id="property_id"
                          name="property_id"
                          defaultValue={19917}
                        />
                        <input
                          type="hidden"
                          id="property_slug"
                          name="property_slug"
                          defaultValue="hampton-inn-miami-beach-mid-beach"
                        />
                        <input
                          type="hidden"
                          id="room_blocked_dates"
                          defaultValue=""
                        />
                        <input
                          type="hidden"
                          id="calendar_available_price"
                          defaultValue=""
                        />
                        <input
                          type="hidden"
                          id="room_available_price"
                          defaultValue=""
                        />
                        <input
                          type="hidden"
                          id="price_tooltip"
                          defaultValue=""
                        />
                        <input
                          type="hidden"
                          id="url_checkin"
                          defaultValue="09/11/2023"
                        />
                        <input
                          type="hidden"
                          id="url_checkout"
                          defaultValue="09/13/2023"
                        />
                        <input type="hidden" id="url_guests" defaultValue={1} />
                        <input
                          type="hidden"
                          name="booking_type"
                          id="booking_type"
                          defaultValue="request"
                        />
                        <div className="col choose-room-box">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control form-control-sm valid"
                              name="checkout"
                              id="endDate"
                              placeholder="Check-out"
                              defaultValue="09/16/2023"
                              required=""
                              readOnly=""
                              aria-invalid="false"
                            />
                            <label htmlFor="endDate" className="text-sm">
                              Check-out
                            </label>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          className="form-control form-control-sm"
                          id="number_of_rooms"
                          name="number_of_rooms"
                          defaultValue={1}
                        />
                        <div className="col-12 col-md-3 choose-room-box">
                          <div className="form-floating">
                            <input
                              type="number"
                              className="form-control form-control-sm"
                              id="number_of_guests"
                              name="number_of_guests"
                              placeholder="Add guests"
                              defaultValue={1}
                              required="required"
                              min={1}
                              data-accomodates=""
                            />
                            <label
                              htmlFor="number_of_guests"
                              className="text-sm"
                            >
                              Guests per Room
                            </label>
                          </div>
                        </div>
                        <div className="col-12 col-md-3 avai-search choose-room-box">
                          <button
                            className="btn btn-info h-100 w-100"
                            id="CheckAvailability"
                            type="button"
                          >
                            Check Availability
                          </button>
                        </div>
                      </div>
                      <div id="book_it" className="">
                        <div className="js-subtotal-container booking-subtotal panel-padding-fit">
                          <div
                            id="loader"
                            className="single-load text-center d-none"
                          >
                            <img
                              src="https://reservemygroup.com/public/front/img/loading-gif-transparent-background-download-13.gif"
                              alt="loader"
                            />
                          </div>
                          <div className="table-responsive price-table-scroll d-none">
                            <div id="append_date"></div>
                            <table
                              className="table table-bordered price_table"
                              id="booking_table"
                            >
                              <tbody>
                                <tr>
                                  <td className="pl-4 w-50">
                                    <span id="total_night_count" value="">
                                      0
                                    </span>
                                    night
                                  </td>
                                  <td className="pl-4 text-right">
                                    <span id="total_night_price" value="">
                                      {" "}
                                      0
                                    </span>{" "}
                                    <span
                                      id="custom_price"
                                      className="fa fa-info-circle secondary-text-color d-none"
                                      data-html="true"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title=""
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="pl-4">Service fee</td>
                                  <td className="pl-4 text-right">
                                    <span id="service_fee" value="">
                                      {" "}
                                      0{" "}
                                    </span>
                                  </td>
                                </tr>
                                <tr className="additional_price">
                                  <td className="pl-4">Additional Guest Fee</td>
                                  <td className="pl-4 text-right">
                                    <span id="additional_guest" value="">
                                      {" "}
                                      0{" "}
                                    </span>
                                  </td>
                                </tr>
                                <tr className="security_price">
                                  <td className="pl-4">Security Fee</td>
                                  <td className="pl-4 text-right">
                                    <span id="security_fee" value="">
                                      {" "}
                                      0{" "}
                                    </span>
                                  </td>
                                </tr>
                                <tr className="cleaning_price">
                                  <td className="pl-4">Cleaning Fee</td>
                                  <td className="pl-4 text-right">
                                    <span id="cleaning_fee" value="">
                                      {" "}
                                      0{" "}
                                    </span>
                                  </td>
                                </tr>
                                <tr className="iva_tax">
                                  <td className="pl-4">I.V.A Tax</td>
                                  <td className="pl-4 text-right">
                                    {" "}
                                    <span id="iva_tax" value="">
                                      {" "}
                                      0{" "}
                                    </span>
                                  </td>
                                </tr>
                                <tr className="accomodation_tax">
                                  <td className="pl-4">Accommodation Tax</td>
                                  <td className="pl-4 text-right">
                                    {" "}
                                    <span id="accomodation_tax" value="">
                                      {" "}
                                      0
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="pl-4">Discount</td>
                                  <td className="pl-4 text-right">
                                    {" "}
                                    <span id="discount" value="">
                                      {" "}
                                      0{" "}
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="pl-4">Total</td>
                                  <td className="pl-4 text-right">
                                    <span id="total" value="">
                                      {" "}
                                      0{" "}
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          id="book_it_disabled"
                          className="text-center d-none"
                        >
                          <p
                            id="book_it_disabled_message d-none"
                            className="icon-rausch"
                          >
                            Dates Not Available
                          </p>
                          <a
                            href="https://reservemygroup.com/search?location=MIAMI"
                            className="btn btn-large btn-block text-14 d-none"
                            id="view_other_listings_button"
                          >
                            View Other Listing
                          </a>
                        </div>
                        <div
                          id="book_it_available"
                          className="text-center d-none"
                        >
                          <p
                            id="book_it_available_message"
                            className="icon-rausch"
                          >
                            Available
                          </p>
                        </div>
                        <div
                          id="minimum_disabled"
                          className="text-center d-none"
                        >
                          <p className="icon-rausch text-danger">
                            You have to book minimum{" "}
                            <span id="minimum_disabled_message" /> night&apos;s
                            on this date
                          </p>
                          <a
                            href="https://reservemygroup.com/search?location=MIAMI"
                            className="btn btn-large btn-block text-14"
                            id="view_other_listings_button"
                          >
                            View Other Listing
                          </a>
                        </div>
                        <div className="book_btn col-md-12 text-center d-none d-none">
                          <button
                            type="submit"
                            className="btn btn-primary vbtn-outline-success text-14 font-weight-700 mt-3 pl-5 pr-5 pt-3 pb-3"
                            id="save_btn"
                          >
                            <i className="spinner fa fa-spinner fa-spin d-none" />
                            <span id="request_booking" className="">
                              Request to Book
                            </span>
                            <span id="instant_booking" className="d-none">
                              <i className="icon icon-bolt text-beach h4" />
                              Instant Book
                            </span>
                          </button>
                        </div>
                        <p className="col-md-12 text-center mt-3 review_of_pay d-none">
                          You’ll be able to review before paying.
                        </p>
                      </div>
                      <input
                        id="hosting_id"
                        name="hosting_id"
                        type="hidden"
                        defaultValue={19917}
                      />
                    </form>
                  </div>
                  <div className="clearfix" />
                </div>{" "}
              </div>
            </div>
            <div className="col text-center d-flex align-items-center justify-content-center mx-5">
              {/* Shown on large, hidden on medium-small */}
              <div className="d-none d-xxl-block">
                <p className="text-white mb-0">
                  You have <span className="room_quantity fw-bold">0</span>
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
                  className="text-light-teal fw-bold  cart_what_is_this"
                  data-toggle="modal"
                  data-target="#whatIsThisModal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.9998 18H10.9998V16H12.9998V18ZM12.9998 15H10.9998C10.9998 11.75 13.9998 12 13.9998 10C13.9998 8.90005 13.0998 8.00005 11.9998 8.00005C10.8998 8.00005 9.9998 8.90005 9.9998 10H7.9998C7.9998 7.79005 9.7898 6.00005 11.9998 6.00005C14.2098 6.00005 15.9998 7.79005 15.9998 10C15.9998 12.5 12.9998 12.75 12.9998 15ZM21.9998 12C21.9998 17.18 18.0498 21.4501 12.9998 21.9501V19.9401C16.9498 19.4501 19.9998 16.08 19.9998 12C19.9998 7.92005 16.9498 4.55005 12.9998 4.06005V2.05005C18.0498 2.55005 21.9998 6.82005 21.9998 12ZM10.9998 2.05005V4.06005C9.5398 4.24005 8.1998 4.82005 7.0898 5.68005L5.6698 4.26005C7.1498 3.05005 8.9998 2.25005 10.9998 2.05005ZM4.0598 11H2.0498C2.2498 9.00005 3.0498 7.15005 4.2598 5.67005L5.6798 7.10005C4.79599 8.22901 4.23599 9.57715 4.0598 11ZM10.9998 19.9401V21.9501C8.9998 21.7501 7.1498 20.96 5.6698 19.74L7.0898 18.32C8.1998 19.18 9.5398 19.7601 10.9998 19.9401ZM2.0498 13H4.0598C4.2398 14.46 4.8198 15.8 5.6798 16.91L4.2598 18.33C3.0161 16.8087 2.24752 14.9551 2.0498 13Z"
                      fill="#75F6F9"
                    />
                  </svg>
                  How block requests work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
