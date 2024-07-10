import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LearnPage from "./pages/learn.jsx";
import ArticlePage from "./pages/Article.jsx";
import PartnershipsPage from "./pages/Partnerships.jsx";
import AboutUsPage from "./pages/AboutUs.jsx";
import HomePage from "./pages/home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},

			{
				path: "/learn",
				element: <LearnPage />,
			},

			{
				path: "/learn/:articleId",
				element: <ArticlePage />,
			},

			{
				path: "/partnerships",
				element: <PartnershipsPage />,
			},
			{
				path: "/about-us",
				element: <AboutUsPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
