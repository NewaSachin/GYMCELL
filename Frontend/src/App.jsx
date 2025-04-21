// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UserLayout from "./components/Layout/UserLayout";
// import Home from "./pages/Home";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<UserLayout />} />
//         <Route index element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Important!
import { Toaster } from "sonner";

import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import Header from "./components/Common/Header";
import MyOrdersPage from "./pages/MyOrdersPage";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomePage from "./pages/AdminHomePage";
import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import EditProductPage from "./components/Admin/EditProductPage";
import OrderManagement from "./components/Admin/OrderManagement";

import { Provider } from "react-redux";
import store from "./redux/store";
import ProtectedRoute from "./components/Common/ProtectedRoute";

const router = createBrowserRouter([
  // {
  //   path: "login",
  //   element: <Login />,
  // },
  // {
  //   path: "checkout",
  //   element: <Checkout />,
  // },
  // {
  //   path: "order-confirmation",
  //   element: <OrderConfirmation />,
  // },

  // {path: "/register", element: <Register />,},

  // {
  //   path: "/admin",
  //   element: <AdminLayout />,
  // },
  // {
  //   path: "/profile",
  //   element: <Profile />,
  // },
  // {
  //   path: "/admin",
  //   element: <AdminLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <AdminHomePage />,
  //     },
  //   ],
  // },
  // {
  //   path: "admin/users",
  //   element: <UserManagement />,
  // },
  {
    path: "/",
    element: <UserLayout />, // UserLayout is the main layout
    children: [
      { index: true, element: <Home /> }, // This makes Home the default child of UserLayout
      { path: "login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/profile", element: <Profile /> },
      { path: "collections/:collection", element: <CollectionPage /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "checkout", element: <Checkout /> },
      { path: "order-confirmation", element: <OrderConfirmation /> },
      { path: "/order/:id", element: <OrderDetailsPage /> },
      { path: "my-orders", element: <MyOrdersPage /> },
    ],
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <AdminHomePage /> },
      { path: "users", element: <UserManagement /> },
      { path: "products", element: <ProductManagement /> },
      { path: "products/:id/edit", element: <EditProductPage /> },
      { path: "orders", element: <OrderManagement /> },
      // add more admin routes here
    ],
  },
  // {
  //   path: "collections/:collection",
  //   element: <CollectionPage />,
  // },
  // {
  //   path: "/order/:id",
  //   element: <OrderDetailsPage />,
  // },
  // {
  //   path: "my-orders",
  //   element: <MyOrdersPage />,
  // },
]);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />

        <Toaster position="top-right" />
      </Provider>
    </>
  );
};

export default App;
