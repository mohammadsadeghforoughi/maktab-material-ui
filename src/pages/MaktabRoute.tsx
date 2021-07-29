import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  Container,
  Fade,
  Grid,
  Slide,
  Snackbar,
  Typography,
} from "@material-ui/core";
import Header from "../components/header";
import EmployeeBox from "../components/employee-box";
import axios from "axios";
import SnackbarContent from "@material-ui/core/SnackbarContent";

interface IEmployee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
}

function Route1() {
  const [employees, setEmployees] = useState<Array<IEmployee>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>("");
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetchEmployees()
      .then((emps) => {
        //@ts-ignore
        setEmployees(emps);
        setSnackbarOpen(false);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setSnackbarOpen(false);
        setErrMessage("Cannot fetch data");
        setIsLoading(false);
      });
  }, []);

  const handleRefresh = () => {
    setEmployees([]);
    setIsLoading(true);
    fetchEmployees()
      .then((emps) => {
        //@ts-ignore
        setEmployees(emps);
        setSnackbarOpen(false);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setSnackbarOpen(true);
        setErrMessage("Cannot fetch data");
        setIsLoading(false);
      });
  };
  const handleClose = () => {
    setSnackbarOpen(false);
  };
  return (
    <>
      <Header refreshBTNclick={handleRefresh} disabled={isLoading} />
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoading && <CircularProgress />}
      </div>
      <Container style={{ marginTop: "1.5rem" }}>
        <Grid container spacing={5} justifyContent="center">
          {employees &&
            employees.map((item, index) => (
              <Slide
                direction={index%2==0 ? "up" : "right"} 
                in={true}
                mountOnEnter
                unmountOnExit
                timeout={index * 90}
              >
                <Grid item>
                  <EmployeeBox
                    avatarSrc={"https://i.pravatar.cc/300?u=" + item.id}
                    name={item.employee_name}
                    age={item.employee_age}
                    salary={item.employee_salary.toString()}
                  />
                </Grid>
              </Slide>
            ))}
        </Grid>
      </Container>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={errMessage}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleRefresh}>
              Refresh Again
            </Button>
          </React.Fragment>
        }
      />
    </>
  );
}

export default Route1;

const fetchEmployees = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
