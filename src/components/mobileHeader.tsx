import { Close, ExpandMore, Menu, Search } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Collapse,
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
import React, { SyntheticEvent, useEffect, useState } from "react";
import logo from "@/logo/logo.png";
import { data } from "@/utils/data";
import { useRouter } from "next/router";
import Link from "next/link";
import { COLORS } from "@/utils/colors";
import { DataItem } from "@/utils/types";
import { DetailedData } from "@/utils/detailedData";
const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const changePath = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  const [isScrolling, setIsScrolling] = useState(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [accordionData, setAccordionData] = useState<DataItem[] | []>([]);

  const [expanded, setExpanded] = useState<string | false>();
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
      // console.log("panel", panel);
      if (panel === "panel2") {
        setAccordionData(DetailedData.services);
      }
      if (panel === "panel3") {
        setAccordionData(DetailedData.contactPage);
      }
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
          {data.headerLinks.map((val, i) =>
            val.icon ? (
              <Accordion
                sx={{
                  boxShadow: "none !important",
                  "::before": {
                    backgroundColor: "transparent",
                  },
                }}
                onChange={handleChange(`panel${i}`)}
                expanded={expanded === `panel${i}`}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: 25,
                      textTransform: "uppercase",
                    }}
                  >
                    {val.label}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {accordionData.map((value, index) => (
                    <ListItemButton
                      key={index}
                      onClick={() => changePath(value.url)}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              textAlign: "start",
                              fontSize: 18,
                              textTransform: "uppercase",
                            }}
                          >
                            {value.label}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  ))}
                </AccordionDetails>
              </Accordion>
            ) : (
              <>
                <ListItemButton key={i} onClick={() => changePath(val.url)}>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          textAlign: "start",
                          fontSize: 25,
                          textTransform: "uppercase",
                        }}
                      >
                        {val.label}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </>
            )
          )}
        </List>
        <List>

        <ListItemButton onClick={() => changePath("/partner-enquiry")}>
          <ListItemText
            primary={
              <Typography
                sx={{
                  textAlign: "start",
                  fontSize: 25,
                  textTransform: "uppercase",
                }}
              >
                Become a Partner
              </Typography>
            }
          />
        </ListItemButton>
        <ListItemButton onClick={() => changePath("/loan-enquiry")}>
          <ListItemText
            primary={
              <Typography
                sx={{
                  textAlign: "start",
                  fontSize: 25,
                  textTransform: "uppercase",
                }}
              >
                Apply for a Loan
              </Typography>
            }
          />
        </ListItemButton>
        </List>
      </Drawer>

      <Collapse in={isOpen}>
        <Typography>teste</Typography>
      </Collapse>
    </div>
  );
};

export default MobileHeader;
