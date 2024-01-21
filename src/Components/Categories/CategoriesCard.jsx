import PropTypes from "prop-types";

const CategoriesCard = ({ category }) => {
  const { name, description, icon } = category || {};
  return (
    <div className="border px-6 py-8 text-center rounded-md shadow-lg transition hover:-translate-y-2" data-aos={category?.animation}>
      <figure>
        <img className="w-20 mx-auto" src={icon} alt={name} />
      </figure>
      <div className="mt-4">
        <h3 className="text-2xl text-gray-800 font-semibold mb-2">{name}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

CategoriesCard.propTypes = {
  category: PropTypes.object,
};

export default CategoriesCard;
