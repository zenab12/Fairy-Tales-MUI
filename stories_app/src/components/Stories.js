import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Typography, Container, Box, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));
const itemData = [
  {
    img: "https://th.bing.com/th/id/OIP.3i5B7rPUMHeZp6ntjuy4awHaJV?w=182&h=230&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    title: "Oliver Jeek",
    author: "@bkristastucchio",
    rows: 4,
    cols: 2,
    width: 5,
    name: "area_1",
    featured: true,
  },
  {
    img: "https://th.bing.com/th/id/OIP.nyoI1PNGcuPgQNf28dS0SgAAAA?pid=ImgDet&w=472&h=640&rs=1",
    title: "Frozen queen",
    author: "@rollelflex_graphy726",
    rows: 2,
    cols: 2,
    width: 3,
    name: "area_2",
  },
  {
    img: "https://th.bing.com/th/id/OIP.ZxGYJhQEXM7V4L3w5izVjAAAAA?pid=ImgDet&w=202&h=274&rs=1",
    title: "Mune",
    author: "@helloimnik",
    rows: 2,
    cols: 2,
    width: 3,
    name: "area_3",
  },
  {
    img: "https://th.bing.com/th/id/OIP.3eTbJTTnMIRaQ3h7xZI7lQHaJp?pid=ImgDet&w=318&h=414&rs=1",
    title: "clue camp",
    author: "@nolanissac",
    rows: 2,
    cols: 2,
    name: "area_4",
    width: 3,
  },
  {
    img: "https://th.bing.com/th/id/OIP.v-nR3wipG8bk-V8WsXCaQwHaJ3?pid=ImgDet&rs=1",
    title: "Winnie the pooh",
    author: "@hjrc33",
    rows: 2,
    cols: 2,
    width: 3,
    name: "area_5",
  },
];
const Stories = (props) => {
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(2);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ p: "20px 0px" }}>
      <Container maxWidth="lg">
        <Typography
          component={"h5"}
          variant={"caption"}
          color="text.secondary"
          sx={{
            maxWidth: "720px",
            m: "auto",
            textAlign: "center",
          }}
        >
          Our Contnent
        </Typography>

        <Typography
          component={"h2"}
          variant={"h2"}
          color="black"
          sx={{
            mt: 2,
            mb: { xs: 4, md: 8 },
            fontWeight: "600",
            fontSize: { xs: "35px", textAlign: "center" },
          }}
        >
          Choose your favorite story!
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", lg: "row" },
            gap: 5,
          }}
        >
          <Box
            sx={{
              position: "relative",
              background: `url(${itemData[0].img}) no-repeat`,
              backgroundSize: "cover",
              width: { xs: "90%", md: "70%", lg: "50%" },
              height: "620px",
              mt: "-30px",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              padding: "0px!important",
              boxShadow: "0px 0px 15px #eee",
              borderRadius: "200px 200px 0px 0px",
              mr: { lg: "-100px" },
            }}
          >
            {/* <img src="main-img.png" alt="" /> */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "60px",
              }}
            >
              {/* <img src={`${item.img}`} alt={item.title} loading="lazy" /> */}

              <Root sx={{ background: "rgba(0,0,0,.3)" }}>
                <Global
                  styles={{
                    ".MuiDrawer-root > .MuiPaper-root": {
                      height: `calc(50% - ${drawerBleeding}px)`,
                      overflow: "visible",
                      background: "rgba(0,0,0,.3)",
                    },
                  }}
                />
                <Box
                  sx={{
                    textAlign: "center",
                    position: "relative",
                    bottom: "0",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      p: "8px 6px 15px",
                    }}
                  >
                    <Box>
                      <Typography component={"p"} sx={{ padding: 0 }}>
                        {itemData[0].title}
                      </Typography>

                      <Stack>
                        <Rating
                          name="half-rating"
                          defaultValue={4.5}
                          precision={0.5}
                          color="white"
                          borderColor="white"
                        />
                      </Stack>
                    </Box>
                    <IconButton
                      onClick={toggleDrawer(true)}
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ......`}
                    >
                      <InfoIcon />
                    </IconButton>
                  </Box>
                  {/* <ImageListItemBar
                          title={item.title}
                          subtitle={item.author}
                          actionIcon={
                            <IconButton
                              onClick={toggleDrawer(true)}
                              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                              aria-label={`info about ${item.title}`}
                            >
                              <InfoIcon />
                            </IconButton>
                          }
                        /> */}
                  {/* <Button onClick={toggleDrawer(true)}>Open</Button> */}
                </Box>
                {/* <SwipeableDrawer
                  container={container}
                  anchor="bottom"
                  open={open}
                  onClose={toggleDrawer(false)}
                  onOpen={toggleDrawer(true)}
                  swipeAreaWidth={drawerBleeding}
                  disableSwipeToOpen={false}
                  ModalProps={{
                    keepMounted: true,
                  }}
                >
                  <StyledBox
                    sx={{
                      position: "absolute",
                      top: -drawerBleeding,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      visibility: "visible",
                      right: 0,
                      left: 0,
                    }}
                  >
                    <Puller />
                    <Typography sx={{ p: 2, color: "text.secondary" }}>
                      51 results
                    </Typography>
                  </StyledBox>
                  <StyledBox
                    sx={{
                      px: 2,
                      pb: 2,
                      height: "100%",
                      overflow: "auto",
                    }}
                  >
                    <Skeleton variant="rectangular" height="100%" />
                  </StyledBox>
                </SwipeableDrawer> */}
              </Root>
            </Box>
          </Box>
          <Grid
            container
            className="stories"
            spacing={4}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {itemData.map((item, ind) =>
              ind > 0 ? (
                <Grid
                  item
                  key={ind}
                  className={item.name}
                  sx={{
                    gridArea: item.name,
                    position: "relative",
                    height: "299px",
                    background: `url(${item.img}) no-repeat`,
                    backgroundSize: "cover",
                    margin: "15px",
                    padding: "0px!important",
                    boxShadow: "0px 0px 15px #eee",
                    borderRadius: "200px 200px 0px 0px",
                  }}
                  xs={4}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      height: "55px",
                    }}
                  >
                    {/* <img src={`${item.img}`} alt={item.title} loading="lazy" /> */}

                    <Root sx={{ background: "rgba(0,0,0,.3)" }}>
                      <Box
                        sx={{
                          ".MuiDrawer-root > .MuiPaper-root": {
                            height: `calc(50% - ${drawerBleeding}px)`,
                            overflow: "visible",
                            background: "rgba(0,0,0,.3)",
                          },
                        }}
                      />
                      <Box
                        sx={{
                          textAlign: "center",
                          position: "relative",
                          bottom: "0",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            background: "transparent",
                            p: "5px 6px 5px",
                          }}
                        >
                          <Box>
                            <Typography
                              component={"p"}
                              sx={{ fontWeight: "bold" }}
                            >
                              {item.title}
                            </Typography>
                            <Stack spacing={1}>
                              <Rating
                                name="half-rating"
                                defaultValue={4.5}
                                precision={0.5}
                              />
                            </Stack>
                          </Box>

                          <IconButton
                            onClick={toggleDrawer(true)}
                            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                            aria-label={`info about ${item.title}`}
                          >
                            <InfoIcon />
                          </IconButton>
                        </Box>
                        {/* <ImageListItemBar
                          title={item.title}
                          subtitle={item.author}
                          actionIcon={
                            <IconButton
                              onClick={toggleDrawer(true)}
                              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                              aria-label={`info about ${item.title}`}
                            >
                              <InfoIcon />
                            </IconButton>
                          }
                        /> */}
                        {/* <Button onClick={toggleDrawer(true)}>Open</Button> */}
                      </Box>
                      <SwipeableDrawer
                        container={container}
                        anchor="bottom"
                        open={open}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                        swipeAreaWidth={drawerBleeding}
                        disableSwipeToOpen={false}
                        ModalProps={{
                          keepMounted: true,
                        }}
                      >
                        <StyledBox
                          sx={{
                            position: "absolute",
                            top: -drawerBleeding,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            visibility: "visible",
                            right: 0,
                            left: 0,
                          }}
                        >
                          <Puller />
                          <Typography sx={{ p: 2, color: "text.secondary" }}>
                            {item.title}
                          </Typography>
                        </StyledBox>
                        <StyledBox
                          sx={{
                            px: 2,
                            pb: 2,
                            height: "100%",
                            overflow: "auto",
                          }}
                        >
                          <Skeleton variant="rectangular" height="100%" />
                        </StyledBox>
                      </SwipeableDrawer>
                    </Root>
                  </Box>
                </Grid>
              ) : (
                ""
              )
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

Stories.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default Stories;
