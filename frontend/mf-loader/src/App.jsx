import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./components/Loader";

const App = () => <Loader />;
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
