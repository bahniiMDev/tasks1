import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import "./classes.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default {
	React,
	ReactDOM,
	Provider,
	store,
	createBrowserRouter,
	RouterProvider,
};
