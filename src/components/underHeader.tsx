import { COLORS } from "@/utils/colors";
import { data } from "@/utils/data";
import { poppins500 } from "@/utils/fonts";
import { LocalMallOutlined, SearchOutlined } from "@mui/icons-material";
import { Badge, Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const UnderHeader = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: COLORS.BLUE, p: 2 }}>
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
                >
                  {val.label}
                </Typography>
              ))}
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={4}>
              <Badge
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
              </Badge>
              <SearchOutlined sx={{ color: COLORS.WHITE }} />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default UnderHeader;
