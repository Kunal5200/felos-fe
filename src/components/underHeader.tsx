import { COLORS } from "@/utils/colors";
import { data } from "@/utils/data";
import { poppins500 } from "@/utils/fonts";
import { LocalMallOutlined, Person, SearchOutlined } from "@mui/icons-material";
import {
  Badge,
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const UnderHeader = () => {
  const router = useRouter();
  const [isScrolling, setIsScrolling] = useState(false);
  const changePath = (path: string) => {
    router.push(path);
  };

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
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          backgroundColor: COLORS.BLUE,
          p: 2,
          position: isScrolling ? "fixed" : "absolute",
          top: 0,
          zIndex: 999,
          width: isScrolling ? "100%" : "97.6%",
          transition: "all 0.5s ease",
          backdropFilter: isScrolling ? "blur(5px)" : "none",
        }}
      >
        <Container>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={4}>
              {data.headerLinks.map((val, i) => (
                <Typography
                  sx={{
                    fontSize: 14,
                    fontFamily: poppins500.style,
                    color: COLORS.WHITE,
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                  key={i}
                  onClick={() => changePath(val.url)}
                >
                  {val.label}
                </Typography>
              ))}
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={4}>
              {/* <Badge
                badgeContent={1}
                sx={{
                  "& .MuiBadge-badge": {
                    color: COLORS.WHITE,
                    backgroundColor: COLORS.PRIMARY,
                  },
                }}
                anchorOrigin={{
                  vertical: "bottom",
                }}
              >
                <LocalMallOutlined sx={{ color: COLORS.WHITE }} />
              </Badge> */}
              <IconButton>
                <Person sx={{ color: COLORS.WHITE }} />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default UnderHeader;
