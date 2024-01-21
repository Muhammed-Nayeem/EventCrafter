import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Contexts/AuthContext";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const { signInUser, resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  //login form handler:
  const loginFormHandler = (e) => {
    e.preventDefault();

    //quick email and password validation:
    if (password.length < 6) {
      toast.error("Password must be Six characters or longer!");
      return;
    } else if (!/.*[A-Z].*/.test(password)) {
      toast.error("Password should've one Uppercase Letter!");
      return;
    } else if (!/.*[@$!%*?&].*/.test(password)) {
      toast.error("Password should've one Special Character!");
      return;
    }

    //sign in user with email and password by firebase:
    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success(`${user?.displayName} login successfully!`);
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  //reset password handler:
  const resetPasswordHandler = () => {
    //reset password with email by firebase:
    resetPassword(email)
      .then(() => {
        toast.success("Password reset URL has sent to your email!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  //aos animation initialization:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <div
            className="bg-white shadow-md rounded-md px-10 py-8"
            data-aos="zoom-in-up"
          >
            <form onSubmit={loginFormHandler}>
              <h1 className="text-2xl text-gray-800 font-bold text-center mb-4">
                Please Login
              </h1>
              <div className="flex flex-col">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="border outline-none rounded-md py-2 px-4"
                />
              </div>
              <div className="flex flex-col">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="w-full flex items-center justify-between border rounded-md pr-4">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={isPasswordShow ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    className="outline-none py-2 px-4"
                  />
                  {isPasswordShow ? (
                    <FaEyeSlash
                      onClick={() => setIsPasswordShow(!isPasswordShow)}
                      className="text-lg cursor-pointer"
                    />
                  ) : (
                    <FaEye
                      onClick={() => setIsPasswordShow(!isPasswordShow)}
                      className="text-lg cursor-pointer"
                    />
                  )}
                </div>
              </div>
              <div className="mt-2">
                <p onClick={resetPasswordHandler} className="text-base text-blue-600 cursor-pointer hover:underline inline-block">
                  Forgot Password!
                </p>
              </div>
              <div className="mt-6">
                <button className="btn btn-sm bg-blue-600 transition hover:bg-blue-500 text-white w-full">
                  Sign In
                </button>
              </div>
            </form>
            <div className="mt-2">
              <p>
                Do not have an account?{" "}
                <Link to="/register" className="text-blue-600">
                  Create an Account
                </Link>
              </p>
            </div>
            <div className="w-full">
              <span className="uppercase italic text-gray-800 font-bold text-base text-center block my-3">
                OR
              </span>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
