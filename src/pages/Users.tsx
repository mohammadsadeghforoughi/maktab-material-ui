import React, { useEffect } from "react";
import UserList from "../DataFactory";
import {useHistory} from 'react-router-dom'


const UsersPage: React.FC = () => {
  const History = useHistory()
  const handleClick = (id: string)=>{
     History.push('/users/'+id)
  }
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
        <h3>Users List</h3>
        <div
          style={{
            width: "18rem",
            borderRadius: "12px",
            backgroundColor: "#193366 ",
            border: "1px solid #000",
            color: "#fff",
            textAlign: "center",
            padding: "0.75rem 1rem  ",
          }}
        >
          {UserList.map((i, index) => {
            return (
              <span onClick={()=>{handleClick(i.id)}}
                style={{ width: "100%", cursor: "pointer", display: "block" }}
              >
                {`${i.name}  ${i.family}`}
                {index + 1 != UserList.length && (
                  <hr style={{ borderColor: "#fff" }} />
                )}
              </span >
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UsersPage;
