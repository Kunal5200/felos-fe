import { COLORS } from "@/utils/colors";
import { data } from "@/utils/data";
import { poppins400, poppins500, poppins600, poppins700 } from "@/utils/fonts";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid2,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const LoanStep = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Container>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box sx={{textAlign:"center"}}>
            {/* <Typography sx={{ fontSize: 25, fontFamily: poppins600.style,textAlign:"center" }}>
              APPLY YOUR LOAN
            </Typography> */}
            <Typography
              sx={{ fontSize: 20, fontFamily: poppins700.style, mt: 2,textAlign:"center" }}
            >
              How to apply for a loan with Prefinn?
            </Typography>
          </Box>
          {/* <Stack direction={"row"} alignItems={"center"} spacing={10}>
            <Button
              sx={{
                borderTop: `2px solid ${COLORS.GREY}`,
                width: 58,
                position: "relative",
                height: 47,
                padding: "10px,3px",
                borderLeft: `2px solid ${COLORS.GREY}`,
                borderBottom: `2px solid ${COLORS.GREY}`,
                borderRadius: 0,
                borderRight: `2px solid ${COLORS.GREY}`,
              }}
              onClick={prevStep}
              disabled={activeStep === 0}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  position: "absolute",
                  letterSpacing: 6,
                  right: -25,

                  color: COLORS.GREY,
                  fontFamily: poppins500.style,
                  backgroundColor: COLORS.WHITE,
                }}
              >
                Prev
              </Typography>
            </Button>
            <Button
              sx={{
                borderTop: `2px solid ${COLORS.GREY}`,
                width: 58,
                position: "relative",
                height: 47,
                padding: "10px,3px",
                borderLeft: `2px solid ${COLORS.GREY}`,
                borderBottom: `2px solid ${COLORS.GREY}`,
                borderRadius: 0,
                borderRight: `2px solid ${COLORS.GREY}`,
              }}
              onClick={handleNextStep}
              disabled={activeStep === 3}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  position: "absolute",
                  letterSpacing: 6,
                  left: -25,
                  backgroundColor: COLORS.WHITE,

                  color: COLORS.GREY,
                  fontFamily: poppins500.style,
                }}
              >
                Next
              </Typography>
            </Button>
          </Stack> */}
        </Stack>
        {/* <Stepper sx={{ mt: 4 }} activeStep={activeStep} alternativeLabel>
          {data.stepData.map((val, i) => (
            <Step key={i}>
              <StepLabel></StepLabel>
              <StepContent sx={{ mt: 2 }}>
                <Typography sx={{ fontSize: 11, fontFamily: poppins400.style }}>
                  {val.description1}
                </Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper> */}
        <Grid2 container spacing={3} mt={4}>
          {data.stepData.map((val, i) => (
            <Grid2 size={{ lg: 6, xs: 12 }}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 2,
                  height: 180,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Avatar sx={{ backgroundColor: COLORS.BLUE, margin: "auto" }}>
                    {i + 1}
                  </Avatar>
                  <Typography
                    sx={{ fontSize: 11, fontFamily: poppins400.style, mt: 1 }}
                  >
                    {val.description1}
                  </Typography>
                </Box>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
};

export default LoanStep;
