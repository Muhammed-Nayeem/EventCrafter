import PropTypes from "prop-types";
import Rating from "react-rating";
import { MdOutlineStarBorder, MdStar } from "react-icons/md";

const TestimonialCard = ({ review }) => {
  const { name, profession, image, reviews_text, posted, rating } =
    review || {};

  return (
    <div className="border rounded-md shadow-md p-4" data-aos={review?.animation}>
      <div className="flex items-center gap-4">
        <img className="w-16 h-16 rounded-full" src={image} alt={name} />
        <h4 className="text-xl font-semibold text-gray-800">
          {name}{" "}
          <span className="block text-base text-gray-500 font-normal">
            {profession}
          </span>
        </h4>
      </div>
      <div className="mt-4">
        <p className="text-lg">{reviews_text}</p>
        <div className="flex justify-between items-center mt-4">
          <Rating
            initialRating={rating}
            readonly
            fullSymbol={<MdStar className="text-lg text-blue-600" />}
            emptySymbol={<MdOutlineStarBorder className="text-lg text-blue-600" />}
          />
          <p className="text-lg text-gray-500">{posted}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  review: PropTypes.object,
};

export default TestimonialCard;
