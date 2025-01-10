import { poppins400, poppins500, poppins600 } from "@/utils/fonts";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const FounderMessage = () => {
  return (
    <div>
      <Box sx={{ pt: 5, pb: 5 }}>
        <Container>
          <Typography sx={{ fontSize: 25, fontFamily: poppins600.style }}>``
            {" "}
            Founder’s Message
          </Typography>
          <Typography
            sx={{ fontSize: 15, fontFamily: poppins400.style, mt: 3 }}
          >
            {" "}
            Prefinn will serve as Preferred Finance Partner for all segments of
            Retail and Institutional Customers. Its Loan Distribution Platform
            has been created with a vision to offer multiple Loan Products to
            B2C Customers from any Bank or NBFCs as per their Choice. Prefinn
            Large Network of IBOs (Independent Business Owners) will assist
            Customers to find out Suitable Loan product & Bank Partners which
            will bridge the gap of tailored finance options across the Country.
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default FounderMessage;
