import React from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import Code from "./img/Group 10.png";
import group1 from "./img/Group1.png";
import group2 from "./img/Group2.png";
import group3 from "./img/Group3.png";
import socialOne from "./img/social-one.png";
import socialTwo from "./img/social-two.png";
import socialThree from "./img/social-three.png";
import socialFour from "./img/social-four.png";
import { Box } from "@mui/system";
import {
  Typography,
  Button,
  Grid,
  Paper,
  List,
  ListItem,
  Avatar,
  Divider,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          height: { lg: "100vh", xl: "100vh" },
          padding: { xs: "1rem", md: "4rem", lg: "4rem", xl: "6rem" },
        }}
        className="home-banner"
      >
        <Box>
          <Box 
          sx={{
              paddingLeft: { xs: "1%", sm: "3%", md: "3%", lg: "3%", xl: "10%"},
              paddingTop: {xs: "1%",sm: "3%",md: "3%",lg: "3%",xl: "10%"},
            }}
          >
            <Row>
                <Col>
                <div className="banner-box animate__animated animate__zoomInUp ">
                    <Typography
                    sx={{
                        fontWeight: "bold",
                        width: {xs: "100%",sm: "100%",md: "70%",lg: "40%",xl: "28%"},
                        fontSize: {xs: "1rem",lg: "2.5rem",md: "2.5rem",xl: "2.5rem"},
                        lineHeight: {lg: "45px",xs: "20px",md: "45px",xl: "60px"},
                    }}
                    className="Montserrat"
                    >
                    Communicate with over 3 blockchains with just a few lines of
                    code
                    </Typography>
                    <Typography
                    sx={{
                        fontWeight: 400,
                        width: { xs: "100%", sm: "100%", md: "70%", lg: "28%" },
                        fontSize: {
                        xs: "0.8rem",
                        lg: "1.3rem",
                        md: "1.3rem",
                        xl: "1.2rem",
                        },
                        lineHeight: { lg: "25px", xl: "40px" },
                    }}
                    className="Montserrat"
                    // variant="h6"
                    >
                    Telegraph Is a decentralized, lightweight messaging oracle
                    that allows developers to easily access external blockchains
                    from their smart contracts
                    </Typography>
                    <Box
                    sx={{
                        display: "flex",
                        width: {xs: "100%",sm: "100%",md: "70%",lg: "50%",xl: "50%"},
                        justifyContent: { xs: "center", md: "flex-start" },
                        alignItems: "center",
                        flexDirection: { xs: "column", md: "row" },
                        marginTop: "2%",
                    }}
                    >
                    <Button
                        variant="contained"
                        sx={{
                        width: "fit-content",
                        height: { xl: "60px" },
                        margin: "2%",
                        backgroundColor: "#4365D5",
                        borderRadius: 3,
                        padding: "2.5%",
                        fontSize: { xl: "15px" },
                        }}
                        // className="justify-content-end blue-btn Montserrat e"
                    >
                        Develop With Telegraph
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                        width: "fit-content",
                        height: { xl: "60px" },
                        margin: "2%",
                        color: "#4365D5",
                        borderColor: "#4365D5",
                        border: "1.5px solid",
                        fontWeight: "bolder",
                        borderRadius: 3,
                        padding: "2.5%",
                        fontSize: { xl: "15px" },
                        }}
                        // className="justify-content-end white-btn Montserrat"
                    >
                        Run a Node
                    </Button>
                    </Box>
                </div>
                </Col>
            </Row>
          </Box>              
          <Paper
            elevation={10}
            sx={{
              display: "flex",
              width: {xs: "100%",sm: "100%",md: "100%",lg: "100%",xl: "95%"},
              alignItems: { xs: "center", md: "center", lg: "center", xl: "center" },
              flexDirection: { xs: "column" },
              marginTop: { xs: "2%", md: "2%", lg: "2%", xl: "10%" },
              borderRadius: 2,
              borderColor: "white",
              padding: {xs: "3%",sm: "3%",md: "3%",lg: "3%",xl: "1%"},
              boxShadow: "0px 14px 48px rgb(67 101 213 / 18%)"
            }}
          >
            <Box className="nft-sale Montserrat">
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { lg: "2.3rem", xs: "1.3rem", xl: "2.3rem" },
                }}
              >
                Participate in our NFT sale
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                width: { lg: "25%", xs: "50%", xl: "20%" },
                textAlign: "center",
                margin: "2%",
                borderRadius: 3,
                backgroundImage: "linear-gradient(to right, #4365D5, #7D4BFF)",
                padding: "0.5%",
                fontSize: { xl: "20px" },
              }}
              //   className="justify-content-end gredient-btn Montserrat"
            >
              NFT Sale Link
            </Button>
          </Paper>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: { lg: "10%", md: "28%", sm: "20%", xs: "15%", xl: "5%" },
        }}
      >
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: {xs: "center",sm: "center",md: "center",lg: "center"},
            }}
          >
            <Typography
              // variant="h4"
              sx={{
                textAlign: "center",
                fontWeight: "bolder",
                fontSize: { xs: "1rem", lg: "2.5rem", xl: "2.2rem" },
                lineHeight: { lg: "45px", xl: "60px" },
              }}
              className="intero-p Montserrat"
            >
              Interoperability has never
              <br />
              been this easy
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={12} sm={12} md={5}>
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: 600, lg: 700, xl: 700 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: { xs: 0, sm: 0, md: 0, lg: "60%" },
              }}
            >
              <img style={{ width: "100%" }} src={Code} />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            sx={{
              display: "flex",
              justifyContent: {xs: "center",sm: "center",md: "center"},
              marginTop: { lg: 0, md: "2%" },
            }}
          >
            <List
              sx={{
                width: { lg: "25%", xs: "70%", md: "30%", xl: "35%" },
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginTop: { lg: 10, xs: 0 },
                }}
              >
                <Typography
                  sx={{
                    textAlign: "start",
                    alignSelf: {
                      lg: "flex-start",
                      xs: "center",
                      md: "flex-start",
                    },
                    fontWeight: "normal",
                  }}
                  component="span"
                  variant="body1"
                  color="gray"
                >
                  Send Message
                </Typography>
                <Divider
                  component="li"
                  sx={{
                    border: "0.2 solid lightgray",
                    alignSelf: "flex-start",
                    width: "50%",
                    marginTop: "3px",
                  }}
                />
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    display: "inline",
                    // fontSize: { xl: "40px" },
                    textAlign: "left",
                    fontWeight: "normal",
                    alignSelf: {lg: "flex-start",xs: "center",md: "flex-start"},
                  }}
                  component="span"
                  variant="body1"
                  color="gray"
                >
                  Receive Message
                </Typography>
                <Divider
                  component="li"
                  sx={{
                    border: "0.2 solid lightgray",
                    alignSelf: "flex-start",
                    width: "50%",
                    marginTop: "3px",
                  }}
                />
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    display: "inline",
                    textAlign: "left",
                    fontWeight: "normal",
                    alignSelf: {lg: "flex-start",xs: "center",md: "flex-start"},
                  }}
                  component="span"
                  variant="body1"
                  color="gray"
                >
                  Create External Wallet
                </Typography>
                <Divider
                  component="li"
                  sx={{
                    border: "0.2 solid lightgray",
                    alignSelf: "flex-start",
                    width: "50%",
                    marginTop: "3px",
                  }}
                />
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    display: "inline",
                    textAlign: "left",
                    fontWeight: "normal",
                    alignSelf: {lg: "flex-start",xs: "center",md: "flex-start"},
                  }}
                  component="span"
                  variant="body1"
                  color="gray"
                >
                  Create Wallet Listener
                </Typography>
                <Divider
                  component="li"
                  sx={{
                    border: "0.2 solid lightgray",
                    alignSelf: "flex-start",
                    width: "50%",
                    marginTop: "3px",
                  }}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              sx={{
                textAlign: "center",
                marginTop: {xs: "5%",sm: "5%",md: "5%",lg: "5%",xl: "5%"},
                marginBottom: "5%",
                fontWeight: "bold",
                fontSize: {xs: "1rem",lg: "2.5rem",md: "2.5rem",xl: "2.5rem"},
                lineHeight: { lg: "45px", xs: "20px", md: "45px" },
              }}
              className="big-font Montserrat"
              // variant="h3"
            >
              A versatile bridge with big plans
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        className="slide-top-bottom"
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: { xs: 5, md: 0 },
        }}
      >
        <div className="line-slide"></div>
        <Grid
          container
          spacing={2}
          sx={{
            paddingRight: { xs: 0, sm: 0, md: 30 },
            paddingTop: 2,
          }}
        >
          <Grid xs={0} md={5}></Grid>
          <Grid
            item
            xs={12}
            md={6}
            xl={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              sx={{ 
                  borderRadius: 5, 
                  borderLeft: "2px solid #4365D5", 
                  boxShadow: "0px 15px 25px rgba(168, 178, 228, 0.17)"
                }}
              elevation={9}
              className="bridge-two animate__animated animate__backInLeft"
            >
              <Box
                sx={{
                  textAlign: { xs: "center", md: "start" },
                  display: "flex",
                  padding: { xs: 1, md: 4 },
                  flexDirection: { xs: "column", md: "row" }
                }}
                className="one-e Montserrat"
              >
                <Box>
                  <img src={group1} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      textAlign: { xs: "center", md: "start" },
                      margin: 1,
                      fontWeight: "bolder",
                      fontSize: {xs: "1rem",sm: "1rem",md: "1.5rem",lg: "1.5rem",xl: "1.5rem"},
                    }}
                  >
                    Onchain Verification Only
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "start",
                      margin: 1,
                      fontSize: {xs: "1rem",sm: "1rem",md: "1rem",lg: "1rem",xl: "1rem"},
                    }}
                  >
                    Telegraph nodes operate trustlessly, with all verification
                    mechanisms occurring on each supported blockchain
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Box
          sx={{
            border: "2px solid gray",
            height: { xs: "40px", md: "100px" },
            width: "1px",
            alignSelf: "center",
          }}
        />
        <Grid
          container
          spacing={2}
          sx={{
            paddingLeft: {xs: 0,sm: 0,md: "150px",lg: "300px",xl: "400px"},
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            xl={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              sx={{ 
                  borderRadius: 5, 
                  borderRight: "2px solid #4365D5", 
                  boxShadow: "0px 15px 25px rgba(168, 178, 228, 0.17)"
                }}
              elevation={9}
              className="bridge-two animate__animated animate__backInLeft"
            >
              <Box
                sx={{
                  textAlign: { xs: "center", md: "start" },
                  display: "flex",
                  padding: { xs: 1, md: 4 },
                  flexDirection: { xs: "column", md: "row" },
                }}
                className="one-e Montserrat"
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: { xs: "center", md: "end" },
                      margin: 1,
                      fontWeight: "bolder",
                      fontSize: {xs: "1rem",sm: "1rem",md: "1rem",lg: "1rem",xl: "1.5rem"},
                    }}
                  >
                    Extremely Cheap Fees
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "start",
                      margin: 1,
                      fontSize: {xs: "1rem",sm: "1rem",md: "1rem",lg: "1rem",xl: "1rem"},
                    }}
                  >
                    Your smart contract users only have to pay the gas fees +$1
                  </Typography>
                </Box>
                <Box>
                  <img src={group2} />
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid xs={12} md={5} xl={6}></Grid>
        </Grid>
        <Box
          sx={{
            border: "2px solid gray",
            height: { xs: "40px", md: "100px" },
            width: "1px",
            alignSelf: "center",
          }}
        />
        <Grid
          container
          spacing={2}
          sx={{
            paddingRight: {xs: 0,sm: 0,md: "30px",lg: "300px",xl: "400px"},
            paddingBottom: 2,
          }}
        >
          <Grid xs={12} md={5}></Grid>
          <Grid
            item
            xs={12}
            xl={6}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              sx={{ 
                borderRadius: 5, 
                borderRight: "2px solid #4365D5", 
                boxShadow: "0px 15px 25px rgba(168, 178, 228, 0.17)"
              }}
              elevation={9}
              // className="bridge-two animate__animated animate__backInLeft"
            >
              <Box
                sx={{
                  textAlign: { xs: "center", md: "start" },
                  display: "flex",
                  padding: { xs: 1, md: 4 },
                  flexDirection: { xs: "column", md: "row" },
                }}
                className="one-e Montserrat"
              >
                <Box>
                  <img src={group3} />
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: { xs: "center", md: "start" },
                      margin: 1,
                      fontWeight: "bolder",
                      fontSize: {xs: "1rem",sm: "1rem",md: "1rem",lg: "1rem",xl: "1.5rem"},
                    }}
                  >
                    CCIP Companies
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "start",
                      margin: 1,
                      fontSize: {xs: "1rem",sm: "1rem",md: "1rem",lg: "1rem",xl: "1rem"},
                    }}
                  >
                    Telegraph intends to adopt the chainlink cross chain
                    interoperability protocol to strengthen the security of it’s
                    network
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{ marginBottom: { xs: 0, xl: "6rem" }, marginTop: { xs: 0, xl: "10rem"} }}
        className="tele_you Montserrat"
      >
        <Box sx={{ textAlign: "center", margin: "2%" }}>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: {xs: "1.75rem",md: "1.75rem",lg: "1.75rem",xl: "2.5rem"},
            }}
          >
            Telegraph + You = Family
          </Typography>
          <Typography sx={{ fontSize: { xs: "16px", xl: "20px" } }}>
            Join our global community to discuss development, news,
            <br /> and bug bounties
          </Typography>
        </Box>
        <Container>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid item lg={3} xs={6} sx={{ width: "100%" }}>
              <Paper
                elevation={9}
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  borderColor: "transparent",
                  borderRadius: "9px",
                  borderBottom: "2px solid #7289DA",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // margin: "4%",
                    padding: { xs: "1%", md: "5%" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img src={socialOne} />
                    <h5
                      style={{
                        color: "#7289DA",
                        marginLeft: "5px",
                        fontWeight: "bolder",
                      }}
                    >
                      Discord
                    </h5>
                  </Box>
                  <Box sx={{ display: { xs: "none", md: "inline-block" } }}>
                    <svg
                      width="26"
                      height="14"
                      viewBox="0 0 26 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.25 0.75H15.5C14.8125 0.75 14.25 1.3125 14.25 2C14.25 2.6875 14.8125 3.25 15.5 3.25H19.25C21.3125 3.25 23 4.9375 23 7C23 9.0625 21.3125 10.75 19.25 10.75H15.5C14.8125 10.75 14.25 11.3125 14.25 12C14.25 12.6875 14.8125 13.25 15.5 13.25H19.25C22.7 13.25 25.5 10.45 25.5 7C25.5 3.55 22.7 0.75 19.25 0.75ZM8 7C8 7.6875 8.5625 8.25 9.25 8.25H16.75C17.4375 8.25 18 7.6875 18 7C18 6.3125 17.4375 5.75 16.75 5.75H9.25C8.5625 5.75 8 6.3125 8 7ZM10.5 10.75H6.75C4.6875 10.75 3 9.0625 3 7C3 4.9375 4.6875 3.25 6.75 3.25H10.5C11.1875 3.25 11.75 2.6875 11.75 2C11.75 1.3125 11.1875 0.75 10.5 0.75H6.75C3.3 0.75 0.5 3.55 0.5 7C0.5 10.45 3.3 13.25 6.75 13.25H10.5C11.1875 13.25 11.75 12.6875 11.75 12C11.75 11.3125 11.1875 10.75 10.5 10.75Z"
                        fill="#D0D5F4"
                      />
                    </svg>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={3} xs={6} sx={{ width: "100%" }}>
              <Paper
                elevation={9}
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  borderColor: "transparent",
                  borderRadius: "9px",
                  borderBottom: "2px solid #34ABDF",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // margin: "4%",
                    padding: { xs: "1%", md: "5%" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img src={socialTwo} />
                    <Typography
                      style={{
                        color: "#34ABDF",
                        marginLeft: "0px",
                        fontWeight: "bold",
                        fontSize:"20px"
                      }}
                    >
                      Telegram
                    </Typography>
                  </Box>
                  <Box sx={{ display: { xs: "none", md: "inline-block" } }}>
                    <svg
                      width="26"
                      height="14"
                      viewBox="0 0 26 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.25 0.75H15.5C14.8125 0.75 14.25 1.3125 14.25 2C14.25 2.6875 14.8125 3.25 15.5 3.25H19.25C21.3125 3.25 23 4.9375 23 7C23 9.0625 21.3125 10.75 19.25 10.75H15.5C14.8125 10.75 14.25 11.3125 14.25 12C14.25 12.6875 14.8125 13.25 15.5 13.25H19.25C22.7 13.25 25.5 10.45 25.5 7C25.5 3.55 22.7 0.75 19.25 0.75ZM8 7C8 7.6875 8.5625 8.25 9.25 8.25H16.75C17.4375 8.25 18 7.6875 18 7C18 6.3125 17.4375 5.75 16.75 5.75H9.25C8.5625 5.75 8 6.3125 8 7ZM10.5 10.75H6.75C4.6875 10.75 3 9.0625 3 7C3 4.9375 4.6875 3.25 6.75 3.25H10.5C11.1875 3.25 11.75 2.6875 11.75 2C11.75 1.3125 11.1875 0.75 10.5 0.75H6.75C3.3 0.75 0.5 3.55 0.5 7C0.5 10.45 3.3 13.25 6.75 13.25H10.5C11.1875 13.25 11.75 12.6875 11.75 12C11.75 11.3125 11.1875 10.75 10.5 10.75Z"
                        fill="#D0D5F4"
                      />
                    </svg>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={3} xs={6} sx={{ width: "100%" }}>
              <Paper
                elevation={9}
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  borderColor: "transparent",
                  borderRadius: "9px",
                  borderBottom: "2px solid #1D9BF0",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // margin: "4%",
                    padding: { xs: "1%", md: "5%" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      margin: "2.4%",
                    }}
                  >
                    <img src={socialThree} />
                    <h5
                      style={{
                        color: "#1D9BF0",
                        marginLeft: "5px",
                        fontWeight: "bolder",
                      }}
                    >
                      Twitter
                    </h5>
                  </Box>
                  <Box sx={{ display: { xs: "none", md: "inline-block" } }}>
                    <svg
                      width="26"
                      height="14"
                      viewBox="0 0 26 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.25 0.75H15.5C14.8125 0.75 14.25 1.3125 14.25 2C14.25 2.6875 14.8125 3.25 15.5 3.25H19.25C21.3125 3.25 23 4.9375 23 7C23 9.0625 21.3125 10.75 19.25 10.75H15.5C14.8125 10.75 14.25 11.3125 14.25 12C14.25 12.6875 14.8125 13.25 15.5 13.25H19.25C22.7 13.25 25.5 10.45 25.5 7C25.5 3.55 22.7 0.75 19.25 0.75ZM8 7C8 7.6875 8.5625 8.25 9.25 8.25H16.75C17.4375 8.25 18 7.6875 18 7C18 6.3125 17.4375 5.75 16.75 5.75H9.25C8.5625 5.75 8 6.3125 8 7ZM10.5 10.75H6.75C4.6875 10.75 3 9.0625 3 7C3 4.9375 4.6875 3.25 6.75 3.25H10.5C11.1875 3.25 11.75 2.6875 11.75 2C11.75 1.3125 11.1875 0.75 10.5 0.75H6.75C3.3 0.75 0.5 3.55 0.5 7C0.5 10.45 3.3 13.25 6.75 13.25H10.5C11.1875 13.25 11.75 12.6875 11.75 12C11.75 11.3125 11.1875 10.75 10.5 10.75Z"
                        fill="#D0D5F4"
                      />
                    </svg>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={3} xs={6} sx={{ width: "100%" }}>
              <Paper
                elevation={9}
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  borderColor: "transparent",
                  borderRadius: "9px",
                  borderBottom: "2px solid black",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // margin: "4%",
                    padding: { xs: "0%", md: "5%" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img src={socialFour} />
                    <h5
                      style={{
                        color: "black",
                        marginLeft: "5px",
                        fontWeight: "bolder",
                      }}
                    >
                      Github
                    </h5>
                  </Box>
                  <Box sx={{ display: { xs: "none", md: "inline-block" } }}>
                    <svg
                      width="26"
                      height="14"
                      viewBox="0 0 26 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.25 0.75H15.5C14.8125 0.75 14.25 1.3125 14.25 2C14.25 2.6875 14.8125 3.25 15.5 3.25H19.25C21.3125 3.25 23 4.9375 23 7C23 9.0625 21.3125 10.75 19.25 10.75H15.5C14.8125 10.75 14.25 11.3125 14.25 12C14.25 12.6875 14.8125 13.25 15.5 13.25H19.25C22.7 13.25 25.5 10.45 25.5 7C25.5 3.55 22.7 0.75 19.25 0.75ZM8 7C8 7.6875 8.5625 8.25 9.25 8.25H16.75C17.4375 8.25 18 7.6875 18 7C18 6.3125 17.4375 5.75 16.75 5.75H9.25C8.5625 5.75 8 6.3125 8 7ZM10.5 10.75H6.75C4.6875 10.75 3 9.0625 3 7C3 4.9375 4.6875 3.25 6.75 3.25H10.5C11.1875 3.25 11.75 2.6875 11.75 2C11.75 1.3125 11.1875 0.75 10.5 0.75H6.75C3.3 0.75 0.5 3.55 0.5 7C0.5 10.45 3.3 13.25 6.75 13.25H10.5C11.1875 13.25 11.75 12.6875 11.75 12C11.75 11.3125 11.1875 10.75 10.5 10.75Z"
                        fill="#D0D5F4"
                      />
                    </svg>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Home;
