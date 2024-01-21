import PropTypes from "prop-types";
import {
  FaMapMarkerAlt,
  FaCaretRight,
  FaCalendarAlt,
  FaDollarSign,
  FaCalculator,
  FaEnvelope,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const EventCard = ({ event, bookedEvent }) => {
  const {
    event_name,
    event_type,
    event_image,
    description,
    location,
    date,
    ticket_price,
    available_tickets,
  } = event || {};

  //aos animation initialization:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="text-left" data-aos="fade-right">
        <div className="border w-full p-2 rounded-md">
          <figure>
            <img className="rounded-md" src={event_image} alt={event_type} />
          </figure>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {event_name}
          </h1>
          <p className="flex items-center text-base font-medium text-gray-700">
            <FaMapMarkerAlt className="text-blue-600 mr-1" /> {location}
          </p>
          {event.play_title ? (
            <p className="flex items-center text-base text-gray-700 mt-2 italic">
              <FaCaretRight className="text-blue-600" />
              Show: {event.play_title}
            </p>
          ) : (
            ""
          )}
          {event.film_title ? (
            <p className="flex items-center text-base text-gray-700 mt-2 italic">
              <FaCaretRight className="text-blue-600" /> Movie:{" "}
              {event.film_title}
            </p>
          ) : (
            ""
          )}
          {event.artists ? (
            <ul className="list-none mt-2">
              <h4 className="text-xl font-semibold text-gray-700 uppercase mb-1">
                Artists
              </h4>
              {event.artists?.map((artist, idx) => (
                <li key={idx} className="flex items-center">
                  <FaCaretRight className="text-blue-600" /> {artist}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
          {event.teams ? (
            <ul className="list-none mt-2">
              <h4 className="text-xl font-semibold text-gray-700 uppercase mb-1">
                Teams
              </h4>
              {event.teams?.map((team, idx) => (
                <li key={idx} className="flex items-center">
                  <FaCaretRight className="text-blue-600" /> {team}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="text-left" data-aos="fade-left">
        <div className="mb-2">
          <p className="text-base md:text-lg text-gray-700 mb-2">
            {description}
          </p>
          <p className="flex items-center text-base md:text-lg text-gray-800 mb-1">
            <FaDollarSign className="text-blue-600 mr-1" /> Ticket Price:{" "}
            {ticket_price}
          </p>
          <p className="flex items-center text-base md:text-lg text-gray-800 mb-1">
            <FaCalendarAlt className="text-blue-600 mr-1" /> Event Date: {date}
          </p>
          <p className="flex items-center text-base md:text-lg text-gray-800 mb-1">
            <FaCalculator className="text-blue-600 mr-1" /> Available:{" "}
            {available_tickets} Tickets.
          </p>
        </div>
        <div className="mb-2 mt-3">
          {event.contact_info ? (
            <address>
              <p className="flex items-center text-base md:text-lg text-gray-700">
                <FaEnvelope className="text-blue-600 mr-1" /> Email:{" "}
                {event.contact_info?.email}
              </p>
              <p className="flex items-center text-base md:text-lg text-gray-700">
                <FaPhoneSquareAlt className="text-blue-600 mr-1" /> Phone:{" "}
                {event.contact_info?.phone}
              </p>
            </address>
          ) : (
            ""
          )}
        </div>
        <button onClick={() => bookedEvent()} className="btn mt-4 text-lg btn-md bg-blue-600 text-white w-full transition hover:bg-blue-500">
          Buy Ticket For This Event
        </button>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.object,
  bookedEvent: PropTypes.func,
};

export default EventCard;
