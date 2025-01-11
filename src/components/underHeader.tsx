import { COLORS } from "@/utils/colors";
import { data } from "@/utils/data";
import { DetailedData } from "@/utils/detailedData";
import { poppins500 } from "@/utils/fonts";
import { Data, DataItem } from "@/utils/types";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Person,
} from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  List,
  ListItemButton,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useEffect, useState } from "react";

const UnderHeader = () => {
  const router = useRouter();
  const [isScrolling, setIsScrolling] = useState(false);

  const changePath = (path: string) => {
    router.push(path);
  };

  const [popoverData, setPopoverData] = useState<DataItem[] | []>([]);

  const dropDownPath = (path: string) => {
    router.push(path);
    // console.log("test",path)
    closePopover();
  };

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activePopover, setActivePopover] = useState<number | null>(null);

  const openPopover = (index: number, e: SyntheticEvent, label: string) => {
    setAnchorEl(e.currentTarget as HTMLElement);
    setActivePopover(index);
    // console.log("inndede", index);
    if (label === "Contact Us") {
      setPopoverData(DetailedData.contactPage);
    }
    if (label === "Services") {
      setPopoverData(DetailedData.services);
    }
  };

  const closePopover = () => {
    setAnchorEl(null);
    setActivePopover(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setIsScrolling(currentScroll > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          backgroundColor: COLORS.BLUE,
          p: 2,
          position: isScrolling ? "fixed" : "",
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
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={4}
              sx={{ mx: 3 }}
            >
              {data.headerLinks.map((val, i) =>
                val.icon ? (
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontFamily: poppins500.style,
                      color: COLORS.WHITE,
                      textTransform: "uppercase",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                    }}
                    key={i}
                    onClick={(e) => openPopover(i, e, val.label)}
                  >
                    {val.label}{" "}
                    {activePopover === i ? (
                      <KeyboardArrowUp />
                    ) : (
                      <KeyboardArrowDown />
                    )}
                  </Typography>
                ) : (
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
                )
              )}
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={4}>
              {/* <IconButton>
                <Person sx={{ color: COLORS.WHITE }} />
              </IconButton> */}
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: poppins500.style,
                  color: COLORS.WHITE,
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
                onClick={() => changePath("/partner-enquiry")}
              >
                Become a Partner
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: poppins500.style,
                  color: COLORS.WHITE,
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
                onClick={() => changePath("/loan-enquiry")}
              >
                Apply for Loan
              </Typography>
            </Stack>
          </Stack>
        </Container>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={closePopover}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          sx={{
            "& .MuiPaper-root": {
              boxShadow: "0px 0px 10px 10px rgb(0,0,0,0.10)",
            },
            mt: 2,
          }}
        >
          {activePopover !== null && (
            <List>
              {popoverData.map((value, i) => (
                <ListItemButton key={i} onClick={() => dropDownPath(value.url)}>
                  <Typography
                    sx={{ fontSize: 14, fontWeight: poppins500.style }}
                  >
                    {value.label}
                  </Typography>
                </ListItemButton>
              ))}
            </List>
          )}
        </Popover>
      </Box>
    </Box>
  );
};

export default UnderHeader;
