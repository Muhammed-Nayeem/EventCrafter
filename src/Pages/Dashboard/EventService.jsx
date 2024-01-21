import PropTypes from "prop-types";
import { FaCalendarAlt, FaCaretRight, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const EventService = ({ service }) => {

  return (
    <div className="mb-4">
      <h1 className="inline-flex items-center text-lg font-bold text-gray-700 border-b pb-1 mb-2">
        <FaCaretRight className="text-gray-500 mr-1" />
        <Link to={`/event-details/${service?.id}`}>{service?.eventName}</Link>
      </h1>
      <div className="flex items-center gap-4">
        <p className="flex items-center">
          <FaDollarSign className="text-gray-500 mr-1" /> {service?.ticketPrice}
        </p>
        <p className="flex items-center">
          <FaCalendarAlt className="text-gray-500 mr-1" /> {service?.date}
        </p>
      </div>
    </div>
  );
};

EventService.propTypes = {
  service: PropTypes.object,
};

export default EventService;
