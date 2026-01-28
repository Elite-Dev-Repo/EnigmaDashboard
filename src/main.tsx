import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import App from "./App.tsx";
import { createRoot } from "react-dom/client";

import Dashboard from "./Dashboard.tsx";
import Users from "./Users.tsx";
import UsersDetails from "./UsersDetails.tsx";
import Analytics from "./Analytics.tsx";
import Error from "./Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:id",
    element: <UsersDetails />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
