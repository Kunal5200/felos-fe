import { poppins } from "@/utils/fonts";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";

const Collapsable = () => {
  return (
    <div>
      <Accordion sx={{ boxShadow: "none" }}>
        <AccordionSummary>
          <Typography sx={{ fontSize: 20, fontFamily: poppins.style }}>
            Personal Finance & Business{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Collapsable;
