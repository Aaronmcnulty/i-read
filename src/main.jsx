import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Homepage from "./components/homepage/Homepage";
import Library from "./components/library/Library";
import MyLibrary from "./components/myLibrary.jsx/myLibrary";
import SearchPage from "./components/search/fullSearch/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "homepage", element: <Homepage /> },
      { path: "library", element: <Library /> },
      { path: "my-library", element: <MyLibrary /> },
      { path: "search-page", element: <SearchPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
