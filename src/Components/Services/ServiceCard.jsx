import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdOutlineStarBorder, MdStar } from "react-icons/md";
import { FaRegHeart, FaRegComment, FaRegPaperPlane } from "react-icons/fa";
import Rating from "react-rating";

const ServiceCard = ({ service }) => {
  const { _id, event_name, event_image, ticket_price, rating, description } = service || {};
  const navigate = useNavigate();
  const navigateEvent = (id) => {
    navigate(`/event-details/${id}`);
  };

  return (
    <div className="border rounded-md shadow-md" data-aos={service?.animation}>
      <div className="w-full relative">
        <figure>
          <img
            className="w-full rounded-t-md"
            src={event_image}
            alt={event_name}
          />
        </figure>
        <div className="flex justify-between items-center absolute bg-white opacity-85 px-4 py-4 bottom-0 w-full">
          <div className="flex items-center gap-x-6">
            <FaRegHeart className="text-lg text-blue-600 cursor-pointer" />
            <FaRegComment className="text-lg text-blue-600 cursor-pointer" />
          </div>
          <div className="flex">
            <FaRegPaperPlane className="text-lg text-blue-600 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold">{event_name}</h3>
        <div className="flex justify-between items-center my-3 border-b pb-2">
          <p className="flex items-center text-lg">
            <HiOutlineCurrencyDollar className="text-blue-600 text-xl mr-1" /> Price:
            <span className="ml-1 font-medium">${ticket_price}</span>
          </p>
          <div className="flex items-center">
          <Rating 
          initialRating={rating} readonly
          fullSymbol={<MdStar className="text-lg text-blue-600" />}
          emptySymbol={<MdOutlineStarBorder className="text-lg text-blue-600" />}
           />
           <span className="text-lg ml-1">{rating}</span>
          </div>
        </div>
        <p className="text-lg">
          {description.length > 100 ? description.slice(0, 100) : description}
          ...
        </p>
        <button
          onClick={() => navigateEvent(_id)}
          className="btn btn-sm bg-blue-600 text-white text-base hover:bg-blue-500 mt-4"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
