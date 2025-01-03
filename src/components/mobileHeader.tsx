import { Close, Menu, Search } from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/logo/logo.png";
import { data } from "@/utils/data";
import { useRouter } from "next/router";
import Link from "next/link";
import { COLORS } from "@/utils/colors";
const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const changePath = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        // setScrollPosition(currentScroll);
        setIsScrolling(currentScroll > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <div>
      <Box
        sx={{
          position: isScrolling ? "fixed" : "relative",
          width: "100%",
          backgroundColor: COLORS.WHITE,
          zIndex: 999,
          transition: "0.5s ease all",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton>
            <Search sx={{ fontSize: 30 }} />
          </IconButton>
          <Link href="/">
            <Image src={logo} alt="" width={100} />
          </Link>
          <IconButton onClick={() => setOpen(true)}>
            <Menu sx={{ fontSize: 30 }} />
          </IconButton>
        </Stack>
      </Box>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiPaper-root": {
            width: "100%",
          },
        }}
      >
        <Box sx={{ textAlign: "end" }}>
          <IconButton onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        <List sx={{ mt: 5 }}>
          {data.headerLinks.map((val, i) => (
            <ListItemButton key={i} onClick={() => changePath(val.url)}>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: 25,
                      textTransform: "uppercase",
                    }}
                  >
                    {val.label}
                  </Typography>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default MobileHeader;
