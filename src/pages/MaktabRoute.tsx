import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import Header from "../components/header";
import EmployeeBox from "../components/employee-box";
import axios from "axios";

interface IEmployee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
}

function Route1() {
  const [employees, setEmployees] = useState<Array<IEmployee>>();


  useEffect(() => {
    //@ts-ignore
    fetchEmployees().then(emps=>setEmployees(emps)).catch(err=>console.log(err));
  }, []);

  return (
    <>
      <Header />
      <Container style={{marginTop:'1.5rem'}}>
        <Grid container spacing={5} justifyContent="center">
          {employees &&
            employees.map((item) => (
              <Grid item>
                <EmployeeBox
                  avatarSrc={"https://i.pravatar.cc/300?u=" + item.id}
                  name={item.employee_name}
                  age={item.employee_age}
                  salary={item.employee_salary.toString()}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}

export default Route1;





const fetchEmployees = () => {
  return new Promise((resolve, reject)=>{
    axios
    .get("https://dummy.restapiexample.com/api/v1/employees")
    .then((res) => {
      resolve(res.data.data)
     })
    .catch((err) => reject(err));
  })
 
};
