import React, { useEffect } from "react";
import { Button, Container, Fab, Grid, Typography } from "@material-ui/core";
import LoopIcon from "@material-ui/icons/Loop";
const Header: React.FC<{ refreshBTNclick: Function, disabled: boolean }> = (props) => {
  return (
    <>
      <Container
        maxWidth="lg"
        style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}
      >
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Grid
              container
              justifyContent={"center"}
              direction={"column"}
              alignItems={"center"}
            >
              <Grid item>
                <Typography
                  variant="h3"
                  component="div"
                  style={{ fontWeight: 100 }}
                >
                  Employee List{" "}
                  <Fab
                  disabled={props.disabled}
                    onClick={()=>props.refreshBTNclick()}
                    size={"small"}
                    style={{ backgroundColor: "teal" }}
                    aria-label="add"
                  >
                    <LoopIcon style={{ color: "white" }} />
                  </Fab>
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ fontWeight: 100 }}
                >
                  It will fetch employee list from API
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Header;
