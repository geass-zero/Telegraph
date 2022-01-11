import { useState, useEffect } from "react";
import { Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import Usaflag from "./img/usa-flag.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Button,
  Box,
  Tab,
  Tabs,
  Menu,
  MenuItem,
  IconButton,
  Typography,
} from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
});

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function App() {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [accountID, setAccountID] = useState(null);

  const data = async () => {
    await provider.enable();

  };
  // console.log(accountID);
  useEffect(() => {
    provider.on("accountsChanged", (accounts) => {
      console.log(accountID);
  //     if (accounts === null) {
  //       setAccountID(accounts);
  //     } else {
  //       provider.disconnect().then((res) => {
  //         setAccountID(null);
        });
  //     }
  //   });
  }, []);
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(accountID);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar
        // style={{ marginBottom: "0.7%", marginTop: "0.5%" }}
        className="full-nav"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Navbar.Brand
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0.6%",
              alignSelf: "center",
            }}
            href="#"
            className="web-logo Montserrat "
          >
            <Typography
              sx={{ fontSize: { xs: "16px", xl: "16px" }, alignSelf: "center" }}
            >
              Telegraph
            </Typography>
          </Navbar.Brand>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "flex" },
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
              // sx={{ fontSize: { xs: "16px", xl:"rem" } }}
            >
              <LinkTab
                sx={{ fontSize: { xs: "16px", xl: "16px" } }}
                label="Home"
                href="/drafts"
              />
              <LinkTab
                sx={{ fontSize: { xs: "16px", xl: "16px" } }}
                label="Developers"
                href="/trash"
              />
              <LinkTab
                sx={{ fontSize: { xs: "16px", xl: "16px" } }}
                label="Use Cases"
                href="/spam"
              />
              <LinkTab
                sx={{ fontSize: { xs: "16px", xl: "16px" } }}
                label="Ecosystem"
                href="/spam"
              />
              <LinkTab
                sx={{ fontSize: { xs: "16px", xl: "16px" } }}
                label="Community"
                href="/spam"
              />
              <LinkTab
                sx={{ fontSize: { xs: "16px", xl: "16px" } }}
                label="Resources"
                href="/spam"
              />
            </Tabs>
          </Box>
          <Box
            sx={{ display: { xs: "flex", sm: "flex", md: "flex", lg: "none" } }}
          >
            <IconButton
              children={<DehazeIcon />}
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            ></IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <LinkTab label="Home" href="/drafts" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {" "}
                <LinkTab label="Developers" href="/trash" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {" "}
                <LinkTab label="Use Cases" href="/spam" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {" "}
                <LinkTab label="Ecosystem" href="/spam" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {" "}
                <LinkTab label="Community" href="/spam" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {" "}
                <LinkTab label="Resources" href="/spam" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {" "}
                <IconButton variant="contained" color="primary">
                  Start Now
                </IconButton>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{ display: { xs: "none", lg: "flex" }, alignSelf: "center" }}
          >
            <div className="justify-content-end language-e">
              <img src={Usaflag} />
              <p className="Poppins ">EN</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 10L12 15L17 10H7Z" fill="#30333D" />
              </svg>
            </div>
            <Button
              sx={{
                display: { xs: "none", lg: "flex" },
                backgroundColor: "#4365D5",
                borderRadius: 3,
                padding: "1%",
                width: { md: "110px", lg: "110px", xl: "110px" },
                height: { md: "60px", lg: "60px", xl: "60px" },
                fontSize: { xs: "16px", xl: "16px" },
                border: "3px solid lightblue",
              }}
              variant="contained"
              onClick={() => {
                data();
              }}
            >
              {accountID === null ? "Start Now" : "Logout"}
            </Button>
          </Box>
        </Box>
      </Navbar>
    </>
  );
}

export default App;
