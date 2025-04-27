// import React from "react";
// import {
//   HiArrowPathRoundedSquare,
//   HiOutlineCreditCard,
//   HiShoppingBag,
// } from "react-icons/hi2";

// const Features = () => {
//   return (
//     <section className="py-16 px-4 bg-white">
//       <div className="container mx-auto grid grid-col-1 md:grid-cols-3 gap-8 text-center">
//         {/* Feature 1 */}
//         <div className="flex flex-col items-center">
//           <div className="p-4 rounded-full mb-4">
//             <HiShoppingBag className="text-xl" />
//           </div>
//           <h4 className="tracking-tighter mb-2">FREE INTERNATIONAL SHIPPING</h4>
//           <p className="text-gray-600 text-sm tracking-tighter">
//             On all orders over $100.00
//           </p>
//         </div>
//         {/* Feature 2 */}
//         <div className="flex flex-col items-center">
//           <div className="p-4 rounded-full mb-4">
//             <HiArrowPathRoundedSquare className="text-xl" />
//           </div>
//           <h4 className="tracking-tighter mb-2">45 DAYS RETURN</h4>
//           <p className="text-gray-600 text-sm tracking-tighter">
//             Money back guarantee.
//           </p>
//         </div>
//         {/* Feature 3 */}
//         <div className="flex flex-col items-center">
//           <div className="p-4 rounded-full mb-4">
//             <HiOutlineCreditCard className="text-xl" />
//           </div>
//           <h4 className="tracking-tighter mb-2">SECURE CHECKOUT</h4>
//           <p className="text-gray-600 text-sm tracking-tighter">
//             100% secured checkout process
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

// import React from "react";
// import {
//   HiArrowPathRoundedSquare,
//   HiOutlineCreditCard,
//   HiShoppingBag,
// } from "react-icons/hi2";

// const Features = () => {
//   return (
//     <section className="py-16 px-4 bg-white">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//         {/* Feature 1 */}
//         <div className="flex flex-col items-center">
//           <div className="p-4 bg-gray-100 rounded-full mb-4">
//             <HiShoppingBag className="text-2xl text-gray-800" />
//           </div>
//           <h4 className="tracking-tighter font-semibold mb-2">
//             FREE INTERNATIONAL SHIPPING
//           </h4>
//           <p className="text-gray-600 text-sm tracking-tighter">
//             On all orders over $100.00
//           </p>
//         </div>

//         {/* Feature 2 */}
//         <div className="flex flex-col items-center">
//           <div className="p-4 bg-gray-100 rounded-full mb-4">
//             <HiArrowPathRoundedSquare className="text-2xl text-gray-800" />
//           </div>
//           <h4 className="tracking-tighter font-semibold mb-2">
//             45 DAYS RETURN
//           </h4>
//           <p className="text-gray-600 text-sm tracking-tighter">
//             Money back guarantee.
//           </p>
//         </div>

//         {/* Feature 3 */}
//         <div className="flex flex-col items-center">
//           <div className="p-4 bg-gray-100 rounded-full mb-4">
//             <HiOutlineCreditCard className="text-2xl text-gray-800" />
//           </div>
//           <h4 className="tracking-tighter font-semibold mb-2">
//             SECURE CHECKOUT
//           </h4>
//           <p className="text-gray-600 text-sm tracking-tighter">
//             100% secured checkout process
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

import React from "react";
import {
  HiArrowPathRoundedSquare,
  HiOutlineCreditCard,
  HiShoppingBag,
} from "react-icons/hi2";

const Features = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <div className="p-6 bg-white rounded-xl shadow-md border border-transparent transition-all duration-300 transform hover:border-blue-500 hover:scale-105">
          <div className="p-4 bg-gray-100 rounded-full mx-auto mb-4 w-fit">
            <HiShoppingBag className="text-2xl text-gray-800" />
          </div>
          <h4 className="tracking-tighter font-semibold mb-2">
            FREE INTERNATIONAL SHIPPING
          </h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            On all orders over $100.00
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-white rounded-xl shadow-md border border-transparent transition-all duration-300 transform hover:border-blue-500 hover:scale-105">
          <div className="p-4 bg-gray-100 rounded-full mx-auto mb-4 w-fit">
            <HiArrowPathRoundedSquare className="text-2xl text-gray-800" />
          </div>
          <h4 className="tracking-tighter font-semibold mb-2">
            45 DAYS RETURN
          </h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Money back guarantee.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-white rounded-xl shadow-md border border-transparent transition-all duration-300 transform hover:border-blue-500 hover:scale-105">
          <div className="p-4 bg-gray-100 rounded-full mx-auto mb-4 w-fit">
            <HiOutlineCreditCard className="text-2xl text-gray-800" />
          </div>
          <h4 className="tracking-tighter font-semibold mb-2">
            SECURE CHECKOUT
          </h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            100% secured checkout process
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
