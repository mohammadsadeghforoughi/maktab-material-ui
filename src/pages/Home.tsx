import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Route1() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3>Home Page</h3>
        <div
          style={{
            width: "18rem",
            borderRadius: "12px",
            backgroundColor: "#193366 ",
            border: "1px solid #000",
            color: "#fff",
            textAlign: "center",
            padding: "0.75rem 1rem  ",
            display:'flex', 
            flexDirection:'column'
          }}
        >
          <Link to="/crud">Crud Table</Link>
          <Link to="/Maktab">Maktab</Link>
          <Link to="/Users">Users</Link>
        </div>
      </div>
    </>
  );
}

export default Route1;
