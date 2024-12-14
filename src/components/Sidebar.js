import React from "react";
import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";
import banda from "../images/banda.jpg"; // Ensure this path is correct
import "../mediaQuery/Sidebar.css";
import { TbTriangles } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar Title */}
      <Typography variant="h6" gutterBottom className="sidebar-title">
      <span className="abhay"><TbTriangles /> Menu </span>
      </Typography>

      {/* Menu List */}
      <List>
        {[
          "Dashboard",
          "My Cases",
          "Activities",
          "Calendar",
          "Files",
          "Open a Dispute",
        ].map((item) => (
          <ListItem button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>

      {/* Image Box */}
      <Box className="box-image-wrapper">
        <img src={banda} alt="Banda" className="sidebar-image" />
      </Box>
    </div>
  );
};

export default Sidebar;
