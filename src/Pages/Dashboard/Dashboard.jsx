import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Contexts/AuthContext";
import toast from "react-hot-toast";
import { getStoredData } from "../../Utilities/storage";
import { FaDollarSign, FaCaretRight } from "react-icons/fa";
import EventService from "./EventService";
import AOS from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
  const [userEventServices, setUserEventServices] = useState([]);
  const [totalCosts, setTotalCosts] = useState(0);
  const { user, signOutUser } = useContext(AuthContext);
  const accountCreatedAt = new Date(Number(user?.metadata?.createdAt));
  const lastLoggedAt = new Date(Number(user?.metadata?.lastLoginAt));

  //sign out handler:
  const signOutHandler = () => {
    signOutUser()
      .then(() => {
        toast.success("User sign out successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  //fetch the stored events data from local storage:
  useEffect(() => {
    AOS.init();
    const storedUserEvents = getStoredData();
    let totalAmount = 0;

    const userEventService = storedUserEvents.filter((userEvent) => userEvent?.userEmail === user?.email);

    if (userEventService.length) {
      userEventService.forEach((userEvent) => {
        totalAmount += userEvent?.ticketPrice;
      });
      setUserEventServices(userEventService);
      setTotalCosts(totalAmount);
    }
  }, [user.email]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols md:grid-cols-4 gap-10">
          <div className="md:col-span-2 bg-white shadow-md rounded-md px-6 py-8"
            data-aos="fade-right">
            <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-start gap-8">
              <div className="border p-1 rounded-md">
                <figure>
                  <img
                    className="w-32 h-32 rounded-md"
                    src={user?.photoURL}
                    alt={user?.displayName}
                  />
                </figure>
              </div>
              <div className="p-1">
                <h1 className="text-lg font-medium text-gray-500 italic mb-1">
                  <span className="text-base font-normal text-gray-400">
                    Name:
                  </span>{" "}
                  {user?.displayName}
                </h1>
                <p className="text-lg font-medium text-gray-500 italic mb-1">
                  <span className="text-base font-normal text-gray-400">
                    Email:
                  </span>{" "}
                  {user?.email}
                </p>
                <p className="text-lg font-medium text-gray-500 italic mb-1">
                  <span className="text-base font-normal text-gray-400">
                    Account created at:
                  </span>{" "}
                  {accountCreatedAt.toLocaleDateString()}
                </p>
                <p className="text-lg font-medium text-gray-500 italic mb-1">
                  <span className="text-base font-normal text-gray-400">
                    Last login at:
                  </span>{" "}
                  {lastLoggedAt.toLocaleTimeString()}
                </p>
                <button
                  onClick={signOutHandler}
                  className="btn btn-sm mt-4 w-full bg-blue-600 text-white hover:bg-blue-500"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
          <div
            className="md:col-span-2 bg-white shadow-md rounded-md p-4 border"
            data-aos="fade-left"
          >
            <div className="grid grid-cols lg:grid-cols-2 gap-4">
              <div className="text-center border rounded-md py-6 px-4">
                <h1 className="text-2xl font-semibold text-gray-500 mb-2">
                  Booked Events
                </h1>
                <p className="text-3xl font-bold text-gray-700 flex items-center justify-center">
                  <FaCaretRight className="text-gray-500 mr-1" />
                  {userEventServices.length}
                </p>
              </div>
              <div className="text-center border rounded-md py-6 px-4">
                <h1 className="text-2xl font-semibold text-gray-500 mb-2">
                  Total Costs
                </h1>
                <p className="text-3xl font-bold text-gray-700 flex items-center justify-center">
                  <FaDollarSign className="text-gray-500 mr-1" />
                  {totalCosts}
                </p>
              </div>
            </div>
            <div className="mt-4 border rounded-md py-4 px-4">
              <h1 className="text-center text-xl font-bold text-gray-500 mb-4">
                Your Booked Services
              </h1>
              {userEventServices?.map((service, idx) => (
                <EventService key={idx} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
