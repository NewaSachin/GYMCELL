// import React from "react";
// import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//   fetchProductByFilters,
//   setFilters,
// } from "../../redux/slices/productSlice";

// const Searchbar = () => {
//   const [SearchTerm, setSearchTerm] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSearchToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     dispatch(setFilters({ search: SearchTerm }));
//     dispatch(fetchProductByFilters({ search: SearchTerm }));
//     navigate(`/collections/all?search=${SearchTerm}`);
//     setIsOpen(false);
//   };
//   return (
//     <div
//       className={`flex items-center justify-center w-full transition-all duration-300 ${
//         isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
//       }`}
//     >
//       {isOpen ? (
//         <form
//           onSubmit={handleSearch}
//           className="relative flex items-center justify-center w-full"
//         >
//           <div className="relative w-1/2">
//             <input
//               type="text"
//               placeholder="Search"
//               value={SearchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full
//                placeholder:text-gray-700"
//             />
//             {/* Search icon */}
//             <button
//               type="submit"
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
//             >
//               <HiMagnifyingGlass className="h-6 w-6" />
//             </button>
//           </div>

//           {/* Close Button */}
//           <button
//             type="button"
//             onClick={handleSearchToggle}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
//           >
//             <HiMiniXMark className="h--6 w-6 " />
//           </button>
//         </form>
//       ) : (
//         <button onClick={handleSearchToggle}>
//           <HiMagnifyingGlass className="h-6 w-6" />
//         </button>
//       )}
//     </div>
//   );
// };
// export default Searchbar;

import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchProductByFilters,
  setFilters,
} from "../../redux/slices/productSlice";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;

    dispatch(setFilters({ search: searchTerm }));
    dispatch(fetchProductByFilters({ search: searchTerm }));
    navigate(`/collections/all?search=${searchTerm}`);
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-full max-w-lg px-4">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-600"
              autoFocus
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
              aria-label="Search"
            >
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
            aria-label="Close search"
          >
            <HiMiniXMark className="h-6 w-6" />
          </button>
        </form>
      ) : (
        <button
          onClick={handleSearchToggle}
          className="text-gray-600 hover:text-gray-800"
          aria-label="Open search"
        >
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
