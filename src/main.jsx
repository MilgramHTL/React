import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import ExerciseComponents from "./components/pages/ExerciseComponents";
import ExerciseDemoCard from "./components/pages/ExerciseDemoCard";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/exComp",
    element: <ExerciseComponents />,
  },
  {
    path: "/exDemo",
    element: (
      <div>
        <ExerciseDemoCard />
      </div>
    ),
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
