import React from 'react';
import CategoryCard from './CategoryCard';
import { useQuery } from '@tanstack/react-query';
import { Link } from "react-router-dom";
import { Button } from "antd";

const Categories = () => {
  const url = "topic.json";
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="mt-10 mb-6 text-center">
      <h2 className="text-4xl font-semibold "> Top Tech Quiz Topics</h2>
      <p className="mt-5 text-xl">
        Test your skills with our comprehensive range of questions on our top
        topics, <br /> suitable for both beginners and experienced individuals !
      </p>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-5">
          {categories?.slice(0, 8).map((cat) => (
            <CategoryCard key={cat.id} data={cat}></CategoryCard>
          ))}
        </div>
      )}
      <Link to="/allCategory">
        <Button className="px-20 text-xl text-center font-semibold mt-4">
          Show more
        </Button>
      </Link>
    </div>
  );
};

export default Categories;