import React from "react";
import ExternalLayout from "./pages/layouts/ExternalLayout";
import InternalLayout from "./pages/layouts/InternalLayout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExternalLayout />} />

      <Route element={<InternalLayout />}>
        {/* <Route path="admin/dashboard" element={user}></Route> */}
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
