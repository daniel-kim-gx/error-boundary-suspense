import React, { Suspense } from "react";
import logo from "./logo.svg";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

const Home = React.lazy(() => import("./pages/Home"));
const ErrorBoundaryBasic = React.lazy(() =>
  import("./pages/ErrorBoundaryBasic")
);
const ErrorBoundaryNested = React.lazy(() =>
  import("./pages/ErrorBoundaryNested")
);
const SuspenseBasic = React.lazy(() => import("./pages/SuspenseBasic"));
const AutomaticReset = React.lazy(() => import("./pages/AutomaticReset"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<FallbackPage />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/error-boundary-basic"
              element={<ErrorBoundaryBasic />}
            />
            <Route
              path="/error-boundary-nested"
              element={<ErrorBoundaryNested />}
            />
            <Route path="/suspense-basic" element={<SuspenseBasic />} />
            <Route path="/automatic-reset" element={<AutomaticReset />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;

function FallbackPage() {
  return <div>Page is now loading...</div>;
}
