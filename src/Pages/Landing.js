import { Grid, Typography, Box, Button, Divider } from "@mui/material";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Landing() {
  return (
    <Box>
      <Box className="banner">
        <Typography
          variant="h2"
          sx={{
            align: "center",
            m: "auto",
            zIndex: 1,
            px: 25,
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          Creating a voice for everyone through SMS messaging
        </Typography>
      </Box>
      {/*  */}
      <Box
        className="cards"
        sx={{
          mx: 20,
          my: 4,
          p: 8,
          borderRadius: 5,
          // bgcolor: "#779CFB",
        }}
      >
        <Typography variant="h6" sx={{ py: 4, px: 2, fontWeight: 600, pr: 30 }}>
          keep in touch with your contacts across the internet without access to
          an active internet connection.
        </Typography>
        <Grid container columnSpacing={4}>
          <Grid item md={6} xs={12}>
            <Box className="subcard" sx={{ p: 5, borderRadius: 5 }}>
              <Typography variant="h6" sx={{ mb: 10, fontWeight: 600 }}>
                About the project
              </Typography>
              <Grid container>
                <Grid item md={11} xs={6}>
                  <Typography variant="body1">
                    With the rise of internet trottling, the project was first
                    ...
                  </Typography>
                </Grid>
                <Grid item md={1} xs={6}>
                  <FaCircleArrowRight
                    size="28px"
                    style={{ rotate: "-30deg" }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className="subcard" sx={{ p: 5, borderRadius: 5 }}>
              <Typography variant="h6" sx={{ mb: 10, fontWeight: 600 }}>
                Project papers
              </Typography>
              <Grid container>
                <Grid item md={11} xs={6}>
                  <Typography variant="body1">
                    With the rise of internet trottling, the project was first
                    ...
                  </Typography>
                </Grid>
                <Grid item md={1} xs={6}>
                  <FaCircleArrowRight
                    size="28px"
                    style={{ rotate: "-30deg" }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/*  */}
      <Box sx={{ p: 3, mx: 25, my: 10 }}>
        <Typography variant="h6" sx={{ py: 3, px: 2, fontWeight: 600 }}>
          Some of our projects
        </Typography>

        <Grid container rowSpacing={12} columnSpacing={2}>
          <Grid item md={6} xs={12}>
            <Box
              component="img"
              src="/i.jpg"
              sx={{ width: "90%", borderRadius: 5 }}
              alt="RelaySMS"
            />
          </Grid>
          <Grid item md={6} xs={12} my="auto">
            <Typography variant="h6" sx={{ py: 2, fontWeight: 550 }}>
              Relay SMS
            </Typography>
            <Typography variant="body1">
              The platform enables users with a smartphone to communicate with
              online third-party platforms using SMS messages. A typical
              use-case of the platform is sending out emails from platforms such
              as Gmail accounts. This becomes a useful tool in cases where
              access to the internet is limited or completely unavailable.
            </Typography>
            <br />
            <Grid container>
              <Grid item md={3} xs={6}>
                <Typography variant="body1" component="a" to="/">
                  Learn More
                </Typography>
              </Grid>
              <Grid item md={9} xs={6}>
                <FaCircleArrowRight size="25px" style={{ rotate: "-30deg" }} />
              </Grid>
            </Grid>
          </Grid>
          {/*  */}
          <Divider />
          <Grid item md={6} xs={12} my="auto">
            <Typography variant="h6" sx={{ py: 2, fontWeight: 550 }}>
              Deku SMS
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim purus eu nunc ullamcorper, vel convallis ante tincidunt.
              Vivamus lacinia, lacus nec tristique bibendum, velit libero
              consequat purus, ut finibus ex lectus eget nisi. Nulla facilisi.
              Phasellus quis libero nec libero tristique dapibus. Cras nec lacus
              vel magna posuere ultricies.
            </Typography>
            <br />
            <Grid container>
              <Grid item md={3} xs={6}>
                <Typography variant="body1">Learn More</Typography>
              </Grid>
              <Grid item md={9} xs={6}>
                <FaCircleArrowRight size="25px" style={{ rotate: "-30deg" }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              component="img"
              src="/ii.jpg"
              sx={{ width: "90%", borderRadius: 5 }}
              alt="Deku SMS"
            />
          </Grid>
        </Grid>
      </Box>
      {/*  */}
      <Box sx={{ mx: 20, my: 10 }}>
        <Grid container columnSpacing={4}>
          <Grid item md={4} xs={12}>
            <Box className="cards" sx={{ p: 8, my: 3, borderRadius: 5 }}>
              <Typography variant="h6" sx={{ py: 3 }}>
                Got any questions? We're here to help.
              </Typography>

              <Typography variant="body1" sx={{ py: 2 }}>
                Check out SMSWithoutBorders Developers Guide
              </Typography>
              <Button
                variant="contained"
                sx={{ borderRadius: "30px", bgcolor: "white" }}
              >
                Contact us
              </Button>
            </Box>
          </Grid>
          {/*  */}
          <Grid item md={8} xs={12}>
            <Box
              component="img"
              src="/map.jpeg"
              sx={{
                width: "100%",
                height: "350px",
                borderRadius: 5,
                opacity: "50%",
                my: 3,
              }}
              alt="Map"
            />
          </Grid>
        </Grid>
      </Box>
      {/*  */}
      <Box
        md={6}
        xs={6}
        sx={{
          p: 3,
          bgcolor: "white",
          mx: 20,
          my: 10,
          borderRadius: 5,
        }}
      >
        <Grid
          container
          mx="auto"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mx: 15,
          }}
        >
          <Grid item md={4} xs={12}>
            <Typography
              variant="h6"
              sx={{ py: 3, px: 2, fontWeight: 600, color: "white" }}
            >
              Our Partners:
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box
              component="img"
              src="/OTF.png"
              alt="Open Technology Fund Logo"
              sx={{ width: "50%" }}
            />
          </Grid>

          <Grid item md={4} xs={12}>
            <Box
              component="img"
              src="/Internews.png"
              alt="Internews Logo"
              sx={{ width: "50%" }}
            />
          </Grid>
        </Grid>
      </Box>
      {/*  */}
      <Box
        className="cards"
        md={6}
        xs={6}
        sx={{
          p: 10,

          mx: 20,
          my: 10,
          borderRadius: 5,
        }}
      >
        <Grid container columnSpacing={4}>
          <Grid item md={6} xs={12}>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Help support SMSWithoutBorders freedom of speech movement.
            </Typography>
            <Button
              variant="contained"
              sx={{ borderRadius: "30px", bgcolor: "white" }}
            >
              Donate
            </Button>
          </Grid>

          <Grid item md={6} xs={12}>
            <Typography variant="h6">Read more about our impact</Typography>
          </Grid>
        </Grid>
      </Box>
      {/*  */}
    </Box>
  );
}
