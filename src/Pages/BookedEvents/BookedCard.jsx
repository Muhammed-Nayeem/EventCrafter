import PropTypes from "prop-types";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BookedCard = ({ userEvent }) => {

  //aos animation initialization:
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="card bg-base-100 shadow-xl" data-aos={userEvent?.animation}>
      <figure>
        <img src={userEvent?.eventImage} alt={userEvent?.eventType} />
      </figure>
      <div className="card-body px-2 py-6">
        <h2 className="card-title">
          {userEvent?.eventName}
          <div className="badge bg-blue-600 text-white text-xs">
            {userEvent?.eventType}
          </div>
        </h2>
        <p className="flex items-center text-base font-medium text-gray-700">
          <FaMapMarkerAlt className="text-blue-600 mr-1" /> {userEvent?.location}
        </p>
        <p className="flex items-center text-base md:text-lg text-gray-800 mb-1">
          <FaCalendarAlt className="text-blue-600 mr-1" /> {userEvent?.date}
        </p>
        <div className="card-actions justify-end">
          <Link
            to={`/event-details/${userEvent.id}`}
            className="btn btn-sm rounded-full bg-white border shadow-none hover:bg-blue-600 hover:text-white"
          >
            See Booked Details
          </Link>
        </div>
      </div>
    </div>
  );
};

BookedCard.propTypes = {
  userEvent: PropTypes.object,
};

export default BookedCard;
