import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

interface IEmployeeBox {
  avatarSrc: string;
  name: string;
  age: number;
  salary: string;
}

const EmployeeBox: React.FC<IEmployeeBox> = (props) => {
  return (
    <>
      <Paper elevation={3} style={{ width: "15rem", height: "15rem", borderRadius:'4px' }} >
        <Grid container direction={"column"} alignItems={"center"} spacing={1}>
          <Grid item>
            <Avatar style={{ width: "7rem", height: "7rem" }} src={props.avatarSrc} />
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              component="div"
              style={{ fontWeight: 100 }}
            >
              {props.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              component="div"
              style={{ fontWeight: 100 }}
            >
              {props.age} yo
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              component="div"
              style={{ fontWeight: 100 }}
            >
              ${props.salary}/y ~ ${Math.ceil(+props.salary/12)}/m
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default EmployeeBox;
