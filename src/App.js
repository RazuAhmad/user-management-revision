import React from "react";
import { Routes, Route } from "react-router-dom";
import FormComponent from "./Components/Form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import UpdateUser from "./Components/UpdateUser/UpdateUser";
import AllUser from "./Components/AllUser/AllUser";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/addUser" element={<FormComponent />} />
        <Route path="/allUsers" element={<AllUser />} />
        <Route path="/updateUser/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
};

export default App;
