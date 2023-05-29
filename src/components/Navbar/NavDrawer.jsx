import { Box, List, ListItem, ListItemButton, Button } from "@mui/material";
import React from "react";
import Link from "next/link";

export const NavDrawer = ({ navLinks, setOpen }) => {
  return (
    <Box
      sx={{
        width: "300px",
      }}
    >
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton onClick={() => setOpen(false)}>
              <Link href={item.path} style={{ textDecoration: "none", color: "white" }}>
                <Button
                  variant={item.button ? "contained" : "text"}
                  color={item.button ? "primary" : "inherit"}
                  sx={{ borderRadius: 0 }}
                >
                  {item.title}
                </Button>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
