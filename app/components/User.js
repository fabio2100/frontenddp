import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, ListSubheader } from "@mui/material";
import { CloudUpload, DoubleArrow } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import styles from "./User.module.css";

const drawerWidth = 240;

export default function User(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [selected, setSelected] = React.useState("KI67");
  const [image, setImage] = React.useState(null);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleClickListItem = (type) => {
    if (type === "Cerrar sesión") {
      props.setLoggin(false);
    }
    setMobileOpen(false);
    setSelected(type);
    setImage(null);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListSubheader component="div" id="nested-list-subheader">
          Cáncer de mama
        </ListSubheader>
        {["KI67", "HER2", "Estrógeno", "Progesterona"].map((text, index) => (
          <ListItem
            onClick={() => {
              handleClickListItem(text);
            }}
            key={text}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader component="div" id="nested-list-subheader">
          Cáncer de próstata
        </ListSubheader>
        {["Geason"].map((text, index) => (
          <ListItem
            onClick={() => {
              handleClickListItem(text);
            }}
            key={text}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Cerrar sesión"].map((text, index) => (
          <ListItem
            onClick={() => {
              handleClickListItem(text);
            }}
            key={text}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const mainContainer = (container) => {
    return (
      <div>
        <div className={styles.divRow}>
          <h2>{container}</h2>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUpload />}
          >
            Subir imagen
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => handleImageChange(event)}
              multiple
            />
          </Button>
        </div>
        <div className={styles.divRow}>
          {image && (
            <img
              src={image}
              alt="Selected"
              style={{ marginTop: "20px", maxWidth: "100%" }}
            />
          )}
          {image && <DoubleArrow />}
          {image && (
            <img
              src={image}
              alt="Selected"
              style={{ marginTop: "20px", maxWidth: "100%" }}
            />
          )}
        </div>
        <div className={styles.divRow}>
          {image && <Lista />}
          </div>
      </div>
    );
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const Lista = () => {
    return (
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {[['IA KI67',112], ['IA Total cells',112], ['IA Positive cells',112],['IA Negative cells',112],['IA POSITIVE CELLS',112],['IA POSITIVE CELLS',112],['IA POSITIVE CELLS',112]].map((value) => (
          <ListItem
            key={value[0]}
            disableGutters
            secondaryAction={
              <IconButton aria-label="comment">
                {value[1]}
              </IconButton>
            }
          >
            <ListItemText primary={`${value[0]}`} />
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Frontenddp
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {mainContainer(selected)}
      </Box>
    </Box>
  );
}
