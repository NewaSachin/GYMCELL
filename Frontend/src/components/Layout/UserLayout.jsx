import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Header />
      {/* Main Content */}
      <main>
       <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default UserLayout;

// import React from "react";
// import Header from "../Common/Header"; // Assuming you have these components
// import Footer from "../Common/Footer";

// const UserLayout = ({ children }) => {
//   return (
//     <div>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </div>
//   );
// };

// export default UserLayout;
