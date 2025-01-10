import {
  Box,
  Container,
  Grid2,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import bgFooter from "@/banner/bg_footer.png";
import { poppins500, poppins600 } from "@/utils/fonts";
import { COLORS } from "@/utils/colors";
import { textField } from "@/utils/styles";
import { Send } from "@mui/icons-material";
const SubFooter = () => {
  return (
    <div>
      <Box
        sx={{
          // backgroundImage: `url(${bgFooter.src})`,
          height: 200,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "Center",
          justifyContent: "Center",
          backgroundColor: COLORS.BLUE,
        }}
      >
        <Container>
          <Grid2 container alignItems={"center"}>
            <Grid2 size={{ lg: 6, xs: 12 }}>
              <Typography
                sx={{
                  fontSize: 18,
                  fontFamily: poppins500.style,
                  color: COLORS.WHITE,
                }}
              >
                Subscribe for recieve
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: 30, xs: 20 },
                  fontFamily: poppins600.style,
                  color: COLORS.WHITE,
                }}
              >
                Subscribe our Company Updates
              </Typography>
            </Grid2>
            <Grid2 size={{ lg: 6, xs: 12 }}>
              <TextField
                variant="standard"
                sx={{
                  "& label.Mui-focused": {
                    color: "#ffffff",
                  },
                  "& label": {
                    fontSize: "15px",
                    fontFamily: poppins500.style,
                    color: "#ffffff",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#ffffff",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderBottom: "1px solid #d7d7d7",
                    },
                    "&:hover fieldset": {
                      borderColor: COLORS.PRIMARY,
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #f2940c",
                    },
                    color: COLORS.WHITE,
                    borderRadius: 8,
                  },
                }}
                label="Email"
                fullWidth
                slotProps={{
                  input: {
                    endAdornment: (
                      <IconButton>
                        <Send sx={{ color: COLORS.WHITE }} />
                      </IconButton>
                    ),
                  },
                }}
              />
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};

export default SubFooter;
