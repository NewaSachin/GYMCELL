import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  //X.com?a=1&b=2
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 0]);
  const gender = ["Men", "Women"];
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyster",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];

  // const brands = [
  //   "Urban Threads",
  //   "Modern Fit",
  //   "Street Style",
  //   "Beach Breeze",
  //   "Fashionista",
  //   "ChicStyle",
  // ];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    //{category:'Top Wear,maxPrice:100'=> params.category}
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      minPrice: params.minPrice ? parseInt(params.minPrice) : 0,
      maxPrice: params.maxPrice ? parseInt(params.maxPrice) : 100,
    });
    setPriceRange([
      params.minPrice ? parseInt(params.minPrice) : 0,
      params.maxPrice ? parseInt(params.maxPrice) : 100,
    ]);
  }, [searchParams]);

  const handleFilterchange = (e) => {
    const { name, value, checked, type } = e.target;
    // console.log({ name, value, checked, type });
    let newFilters = { ...filters };
    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }
    setFilters(newFilters);
    updateUrlParams(newFilters);
  };

  const handlePriceChange = (e) => {
    const newMax = parseInt(e.target.value);
    setPriceRange([0, newMax]);

    const newFilters = {
      ...filters,
      minPrice: 0,
      maxPrice: newMax,
    };

    setFilters(newFilters);
    updateUrlParams(newFilters);
  };

  const updateUrlParams = (newFilters) => {
    const params = new URLSearchParams();
    // {category: "Top wear",size:["Xs","S"]}
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(",")); //"XS,S"
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`); //?category=Bottom+wear&size=XS%2CS
  };

  return (
    <div className="p-4 ">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Categories */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filters.category === category}
              onChange={handleFilterchange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700 ">{category}</span>
          </div>
        ))}
      </div>

      {/* Gender  */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {gender.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={filters.gender === gender}
              onChange={handleFilterchange}
              className="mr-2 h-4 w-4  checked:border-gray-300 text-blue-500 checked:ring-blue-400 "
            />
            <span className="text-gray-700 ">{gender}</span>
          </div>
        ))}
      </div>

      {/* Color Section */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <div key={color}>
              <input
                type="radio"
                name="color"
                value={color}
                checked={filters.color === color}
                onChange={handleFilterchange}
                className="hidden"
                id={`color-${color}`}
              />
              <label
                htmlFor={`color-${color}`}
                className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 inline-block`}
                style={{
                  backgroundColor: color.toLowerCase(),
                  outline: filters.color === color ? "2px solid black" : "none",
                }}
              ></label>
            </div>
          ))}

          {/* /* {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              checked={filters.color === color}
              onClick={handleFilterchange}
              className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105"
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
            
          ))} */}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              checked={filters.size.includes(size)}
              value={size}
              onChange={handleFilterchange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Material */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={material}
              checked={filters.material.includes(material)}
              onChange={handleFilterchange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* PRICE range */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2 ">
          Price Range
        </label>
        <input
          type="range"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={(e) => handlePriceChange(e)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>{priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
