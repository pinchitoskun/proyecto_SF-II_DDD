import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "mf_loader/Loader";

const LoginPage = lazy(() => import("./pages/LoginPage"));

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <LoginPage />
          </Suspense>
        }
      />
    </Routes>
  </Router>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
