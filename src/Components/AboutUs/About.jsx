import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";

const About = () => {
  const [about, setAbout] = useState({});

  //about us data fetching:
  useEffect(() => {
    fetch("/About.json")
      .then(res => res.json())
      .then(data => setAbout(data.about_us));
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Heading text="About Us">
         It would be pleasure to let you know about our company!
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="border p-2 rounded-md" data-aos="fade-right">
            <figure>
              <img className="w-full rounded-md" src={about?.about_image} alt={about?.company_name} />
            </figure>
          </div>
          <div className="py-2" data-aos="fade-left">
            <h2 className="text-3xl font-semibold text-gray-900">{about?.company_name}</h2>
            <p className="text-base font-medium text-gray-500 mt-1">{about?.founded}</p>
            <p className="mt-4 text-lg font-normal leading-7"><span className="text-lg font-medium text-blue-600">Mission:</span> {about?.mission}</p>
            <p className="mt-4 text-lg font-normal leading-7"><span className="text-lg font-medium text-blue-600">Vision:</span> {about?.vision}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
