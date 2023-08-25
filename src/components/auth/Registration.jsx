import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Registration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  async function registerUser(data) {
    try {
      const response = await axios.post(
        "https://groupbook.getjanhost.dev/APP/public/api/register",
        data
      );
      if (response) {
        localStorage.setItem("token", response.data.data.token);
        alert(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log({ error });
    }
  }

  const onSubmit = (data) => {
    // console.log({ data });
    registerUser(data);
  };
  return (
    <>
      <div className="container-fluid px-3">
        <div className="row min-vh-100">
          <div className="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
            <div className="w-100 py-5 px-md-5 px-xxl-6 position-relative">
              <div className="mb-4">
                <a href="https://reservemygroup.com">
                  <img
                    className="img-fluid mb-4"
                    src="https://reservemygroup.com/public/frontend/img/groupbook-logo-icon.svg"
                    alt="groupbook logo"
                    style={{ maxWidth: "4rem" }}
                  />
                </a>
                <h2>Sign-up</h2>
                <p className="text-muted">
                  Create an account today and gain access to Group Book deals!{" "}
                </p>
              </div>
              <form
                className="form-validate signup-form login-form"
                id="signup_form"
                name="signup_form"
                acceptCharset="UTF-8"
                onSubmit={handleSubmit(onSubmit)}
                noValidate="novalidate"
              >
                {/* <input
                  type="hidden"
                  name="_token"
                  value="eiAGcEDPX9hzIZ2ak16ZYArdeEqlSt5RvF0eGt5o"
                />

                <input type="hidden" name="email_signup" id="form" />

                <input
                  type="hidden"
                  name="default_country"
                  id="default_country"
                  className="form-control"
                  value=""
                />

                <input
                  type="hidden"
                  name="carrier_code"
                  id="carrier_code"
                  className="form-control"
                  value=""
                />

                <input
                  type="hidden"
                  name="formatted_phone"
                  id="formatted_phone"
                  className="form-control"
                /> */}

                <div className="mb-4">
                  <label className="form-label" htmlFor="email">
                    {" "}
                    Email Address
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    autoComplete="off"
                    required=""
                    data-msg="Please enter your email"
                    {...register("email")}
                  />

                  <div id="emailError"></div>
                </div>

                <div className="mb-4">
                  <label className="form-label" htmlFor="password">
                    {" "}
                    Password
                  </label>
                  <input
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Password"
                    type="password"
                    required=""
                    data-msg="Please enter your password"
                    {...register("password")}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label" htmlFor="password2">
                    {" "}
                    Confirm your password
                  </label>
                  <input
                    className="form-control"
                    name="password2"
                    id="password2"
                    placeholder="Password"
                    type="password"
                    required=""
                    data-msg="Please enter your password"
                    {...register("c_password")}
                  />
                </div>

                <div className="d-grid gap-2">
                  <button
                    className="btn btn-lg btn-primary"
                    type="submit"
                    id="registerButton"
                  >
                    <i className="spinner fa fa-spinner fa-spin d-none"></i>
                    Sign Up
                  </button>
                </div>
              </form>

              <div className="d-grid gap-2">
                <hr
                  className="my-3 hr-text letter-spacing-2"
                  data-content="OR"
                />
                <div className="d-grid gap-2 mx-2">
                  <a
                    href="https://reservemygroup.com/facebookLogin"
                    className="row"
                  >
                    <button className="btn btn btn-outline-primary btn-social">
                      <i className="fa-2x fa-facebook-f fab btn-social-icon">
                        {" "}
                      </i>
                      Connect{" "}
                      <span className="d-none d-sm-inline">with Facebook</span>
                    </button>
                  </a>

                  <a
                    href="https://reservemygroup.com/googleLogin"
                    className="row"
                  >
                    <button className="btn btn btn-outline-muted btn-social">
                      <i className="fa-2x fa-google fab btn-social-icon"> </i>
                      Connect{" "}
                      <span className="d-none d-sm-inline">with Google</span>
                    </button>
                  </a>
                </div>
                <hr className="my-4" />
                <p className="text-sm text-muted">
                  By signing up you agree to Group Book&apos;s{" "}
                  <a href="https://reservemygroup.com/term">
                    Terms and Conditions
                  </a>{" "}
                  and <a href="#">Privacy Policy</a>.
                </p>
              </div>

              <a className="close-absolute me-md-5 me-xl-6 pt-5" href="/">
                <svg className="svg-icon w-3rem h-3rem">
                  <use xlinkHref="#close-1"> </use>
                </svg>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 col-xl-7 d-none d-md-block bg-primary">
            <div className="bg-cover h-100 me-n3"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
