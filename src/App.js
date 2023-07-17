import React from "react";
import ExternalLayout from "./pages/layouts/ExternalLayout";
import InternalLayout from "./pages/layouts/InternalLayout";
import Login from "./pages/external/login/Index";
import Register from "./pages/external/register/Index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExternalLayout />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<InternalLayout />}>
        {/* <Route path="admin/dashboard" element={user}></Route> */}
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
