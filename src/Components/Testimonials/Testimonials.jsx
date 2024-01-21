import { useEffect, useState } from "react";
import arrayShuffler from "../../Utilities/shuffle";
import Heading from "../Heading/Heading";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  let [reviews, setReviews] = useState([]);

  //reviews data fetching:
  useEffect(() => {
    fetch("/Testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        let shuffleData = arrayShuffler(data);
        setReviews(shuffleData);
      });
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Heading text="Clients Review">See what our clients say!</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {reviews?.map((review) => (
            <TestimonialCard key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
