import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./mypantry.scss";

const MyPantry = () => {
  return (
    <div className="pantry">
      <>
        <Navbar />
        <div className="pantryContainer">
          <Sidebar />
        </div>
      </>
    </div>
  );
};

export default MyPantry;