const Spinner = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-blue-600"></span>
        </div>
      </div>
    </section>
  );
};

export default Spinner;
