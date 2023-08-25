import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  async function login(data) {
    try {
      const response = await axios.post(
        "https://groupbook.getjanhost.dev/APP/public/api/login",
        data
      );
      if (response) {
        localStorage.setItem("token", response.data.data.token);
        alert(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log({ error });
    }
  }

  const onSubmit = (data) => {
    login(data);
  };
  //   console.log(watch("example"));
  return (
    <>
      <div className="container-fluid px-3">
        <div className="row min-vh-100">
          <div className="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
            <div className="w-100 py-5 px-md-5 px-xxl-6 position-relative">
              <div className="mb-5">
                <img
                  className="img-fluid mb-3"
                  src="https://reservemygroup.com/public/frontend/img/groupbook-logo-icon.svg"
                  alt="..."
                  style={{ maxWidth: "4rem" }}
                />
                <h2>Login</h2>
              </div>

              <form
                className="form-validate"
                id="login_form"
                acceptCharset="UTF-8"
                noValidate="novalidate"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* <input
                  type="hidden"
                  name="_token"
                  value="eiAGcEDPX9hzIZ2ak16ZYArdeEqlSt5RvF0eGt5o"
                /> */}

                <div className="mb-4">
                  <label className="form-label" htmlFor="loginUsername">
                    {" "}
                    Email Address
                  </label>
                  <input
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                    type="email"
                    autoComplete="off"
                    data-msg="Please enter your email"
                    {...register("email")}
                  />
                </div>
                <div className="mb-4">
                  <div className="row">
                    <div className="col">
                      <label className="form-label" htmlFor="loginPassword">
                        {" "}
                        Password
                      </label>
                    </div>
                    <div className="col-auto">
                      <a
                        className="form-text small text-primary"
                        href="https://reservemygroup.com/forgot_password"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

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
                  <div className="form-check">
                    <input
                      name="remember_me"
                      className="form-check-input"
                      id="loginRemember"
                      type="checkbox"
                      {...register("remember_me")}
                    />
                    <label
                      className="form-check-label text-muted"
                      htmlFor="loginRemember"
                    >
                      {" "}
                      <span className="text-sm">Remember me</span>
                    </label>
                  </div>
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    id="LoginBtn"
                    className="btn btn-lg btn-primary"
                  >
                    <i className="spinner fa fa-spinner fa-spin d-none"></i>
                    Login
                  </button>
                </div>
              </form>

              <hr className="my-3 hr-text" data-content="OR" />
              <div className="d-grid gap-2 mx-2">
                <div className="col-md-12">
                  <a
                    className="row"
                    href="https://reservemygroup.com/facebookLogin"
                  >
                    <button className="btn btn btn-outline-primary btn-social">
                      <i className="fa-2x fa-facebook-f fab btn-social-icon">
                        {" "}
                      </i>
                      Connect{" "}
                      <span className="d-none d-sm-inline">with Facebook</span>
                    </button>
                  </a>
                </div>

                <div className="col-md-12">
                  <a
                    className="row"
                    href="https://reservemygroup.com/googleLogin"
                  >
                    <button className="btn btn btn-outline-muted btn-social">
                      <i className="fa-2x fa-google fab btn-social-icon"> </i>
                      Connect{" "}
                      <span className="d-none d-sm-inline">with Google</span>
                    </button>
                  </a>
                </div>
              </div>
              <hr className="my-4" />
              <p className="text-center">
                <small className="text-muted text-center">
                  Don&apos;t have an account yet?{" "}
                  <a href="#/register">Sign up</a>
                </small>
              </p>

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

export default Login;
