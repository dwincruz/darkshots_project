import React from "react";
import ExternalLayout from "./pages/layouts/ExternalLayout";
import InternalLayout from "./pages/layouts/InternalLayout";
import UnknownPageLayout from "./pages/layouts/UnknownPageLayout";
import Login from "./pages/external/login/Index";
import Register from "./pages/external/register/Index";
import Dashboard from "./pages/internal/dashboard/Index";
import User from "./pages/internal/user/Index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExternalLayout />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<InternalLayout />}>
        {/* <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/users" element={<User />}></Route> */}
      </Route>

      <Route path="*" element={<UnknownPageLayout />} />
    </Routes>
  );
}

export default App;
