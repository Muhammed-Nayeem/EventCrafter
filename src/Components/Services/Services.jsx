import Heading from "../Heading/Heading";
import ServiceCard from "./ServiceCard";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Contexts/AuthContext";
import Spinner from "../Spinner/Spinner";

const Services = () => {
  const [services, setServices] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);

  //services data fetching:
  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch("/EventsData.json");
      const data = await res.json();
      setServices(data);
      setLoading(false);
    };
    fetchServices();
  }, [setLoading]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Heading text="Our Services">
          Get ready to be Amazed. Best Event Crafter in town!
        </Heading>
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
