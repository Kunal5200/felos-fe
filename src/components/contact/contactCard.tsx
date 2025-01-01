import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import london from "@/banner/london.jpg";
import { COLORS } from "@/utils/colors";
import { poppins300, poppins500, poppins600 } from "@/utils/fonts";
import { LocationOn } from "@mui/icons-material";
import { CONTACTDATA } from "@/utils/types";
const ContactCard = ({
  img,
  location,
  officeType,
  data,
  height,
}: CONTACTDATA) => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          height: height,
          backgroundPosition: "center",
          backroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(0deg,#0a2c4e 0%,rgba(255,255,255,0) 100%)",
            height: "100%",
            display: "flex",
            alignItems: "end",
            justifyContent: "flex-start",
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography
              sx={{
                color: COLORS.WHITE,
                fontSize: 20,
                fontFamily: poppins600.style,
              }}
            >
              {location}
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontFamily: poppins300.style,
                fontSize: 12,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: COLORS.PRIMARY,
              }}
            >
              {officeType}
            </Typography>

            <List>
              {data.map((val, i) => (
                <ListItem sx={{ padding: 1 }} key={i}>
                  <ListItemAvatar sx={{ minWidth: 30 }}>
                    <val.icon sx={{ color: COLORS.PRIMARY, fontSize: 15 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: 12,
                          fontFamily: poppins500.style,
                          color: COLORS.WHITE,
                        }}
                      >
                        {val.contact}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ContactCard;
