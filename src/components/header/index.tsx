import React, { useEffect } from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";

function Header() {
  return (
    <>
      <Container maxWidth="lg"  style={{marginTop:'1.5rem', marginBottom:'1.5rem'}}>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Grid container justifyContent={"center"} direction={'column'} alignItems={'center'} >
              <Grid item>
                <Typography
                  variant="h3"
                  component="div"
                  style={{ fontWeight: 100 }}
                >
                  Employee List
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
}

export default Header;
