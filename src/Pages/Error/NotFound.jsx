import { useNavigate, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const backToHome = () => {
    navigate(-1);
  };

  return (
    <section className="py-12 h-screen">
      <div className="h-full px-4 flex flex-col items-center justify-center">
        <div className="py-8 px-10 shadow-md text-center space-y-4 rounded-md">
          <h1 className="text-5xl font-semibold text-gray-600 uppercase">
            Ooops!!!
          </h1>
          <p className="text-8xl font-bold text-gray-800">
            {error.status ? error.status : "404"}
          </p>
          <p className="text-3xl font-medium text-gray-600">
            Page {error.statusText ? error.statusText : "Not Found"}
          </p>
          <button
            onClick={backToHome}
            className="btn btn-sm bg-blue-600 text-white hover:bg-blue-500"
          >
            Back To Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
