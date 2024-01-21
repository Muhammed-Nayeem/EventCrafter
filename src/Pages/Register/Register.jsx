import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import toast from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Register = () => {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  //register form handler:
  const registerFormHandler = (e) => {
    e.preventDefault();

    //quick validation of email and password:
    if (password.length < 6) {
      toast.error("Password must be Six characters or longer!");
      return;
    } else if (!/.*[A-Z].*/.test(password)) {
      toast.error("Password should've one Uppercase Letter!");
      return;
    } else if (!/.*[@$!%*?&].*/.test(password)) {
      toast.error("Password should've one Special Character!");
      return;
    } else if (!isChecked) {
      toast.error("Please accept Terms and Condition!");
      return;
    }

    //creating user with email and password by firebase:
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, { displayName: name, photoURL: imageURL })
          .then(() => {
            toast.success("User registered successfully!");
            e.target.reset();
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
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
          <div className="bg-white shadow-md rounded-md px-10 py-8" data-aos="zoom-in-up">
            <form onSubmit={registerFormHandler}>
              <h1 className="text-2xl text-gray-800 font-bold text-center mb-4">
                Create An Account
              </h1>
              <div className="flex flex-col">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="border outline-none rounded-md py-2 px-4"
                />
              </div>
              <div className="flex flex-col">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                  type="text"
                  name="url"
                  id="url"
                  placeholder="Profile Photo URL"
                  required
                  className="border outline-none rounded-md py-2 px-4"
                />
              </div>
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
              <div className="flex items-center gap-1 mt-1">
                <input
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  type="checkbox"
                  name="accept_term"
                  id="accept_term"
                />
                <label htmlFor="accept_term">
                  <p className="text-gray-500 text-base">
                    Please accept our!{" "}
                    <a
                      href="#"
                      className="inline-block text-gray-700 underline"
                    >
                      Terms & Condition
                    </a>
                  </p>
                </label>
              </div>
              <div className="mt-6">
                <button className="btn btn-sm bg-blue-600 transition hover:bg-blue-500 text-white w-full">
                  Register
                </button>
              </div>
            </form>
            <div className="mt-2">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600">
                  Login Please
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

export default Register;
