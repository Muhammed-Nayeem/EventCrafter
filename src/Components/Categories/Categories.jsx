import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  //categories data fetching:
  useEffect(() => {
    fetch("/Categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <Heading text="Categories">
          We have got multiple event categories!
        </Heading>
        <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 px-4 sm:px-4">
          {categories?.map((category) => (
            <CategoriesCard key={category._id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
