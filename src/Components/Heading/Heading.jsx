import PropTypes from "prop-types";

const Heading = ({ text, children }) => {
  return (
    <article className="text-center" data-aos="fade-up">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{text}</h1>
      <p className="text-lg font-normal text-gray-600">{children}</p>
    </article>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string,
};

export default Heading;
