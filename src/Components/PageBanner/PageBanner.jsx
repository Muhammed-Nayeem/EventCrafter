import PropTypes from "prop-types";

const PageBanner = ({children}) => {
  return (
    <section className="py-8 bg-gray-300">
      <div className="container mx-auto px-4">
        <div className="py-8">
          {children}
        </div>
      </div>
    </section>
  );
};

PageBanner.propTypes = {
  children: PropTypes.node,
};

export default PageBanner;
