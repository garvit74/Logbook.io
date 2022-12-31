import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-gray-700 bg-opacity-10 shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-2xl text-center mb-8 font-semibold border-b pb-4 ">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block text-center pb-3 mb-3 transition duration-700 transform hover:text-yellow-500 hover:scale-150`}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;