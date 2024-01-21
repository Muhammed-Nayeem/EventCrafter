import { useContext } from "react";
import googleIcon from "../../Assets/Icons/google.png";
import AuthContext from "../../Contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const socialLoginFormHandler = (socialMedia) => {
    socialMedia()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Login successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="w-full">
      <button
        onClick={() => socialLoginFormHandler(signInWithGoogle)}
        className="flex items-center justify-center gap-x-3 border rounded-full w-full py-2 transition hover:bg-blue-50"
      >
        <img className="w-5 h-5" src={googleIcon} alt="Google" />
        <span className="text-gray-900 text-base font-medium">
          Continue With Google
        </span>
      </button>
    </div>
  );
};

export default SocialLogin;
