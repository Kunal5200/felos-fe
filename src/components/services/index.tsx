import { COLORS } from "@/utils/colors";
import { data } from "@/utils/data";
import { SERVICESTABS } from "@/utils/enum";
import { financeManagement } from "@/utils/financeManagement";
import { fintechConsultancy } from "@/utils/fintechConsultancy";
import { fintechSolutions } from "@/utils/fintechSolutions";
import { poppins500 } from "@/utils/fonts";
import { RBITraining } from "@/utils/RBITraining";
import { Container, Grid2, Tab, Tabs, Typography } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import TabPanel from "../tabPanel";
import ServicesCard from "./servicesCard";

const ServicesTab = () => {
  const [serviceData, setServiceData] = useState(fintechSolutions);
  const [value, setValue] = useState(0);
  const tabChangeHandler = (e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const target = e.target as HTMLElement;
    const text = target.innerText || "";

    if (text === SERVICESTABS.FINANCE_MANAGEMENT_SERVICES) {
      setServiceData(financeManagement);
    }
    if (text === SERVICESTABS.FINTECH_CONSULTANCY) {
      setServiceData(fintechConsultancy);
    }
    if (text === SERVICESTABS.FINTECH_SOLUTIONS) {
      setServiceData(fintechSolutions);
    }
    if (text === SERVICESTABS.RBI_TRAINING_CERTIFICATIONS) {
      setServiceData(RBITraining);
    }
  };
  return (
    <div>
      <Container>
        <Tabs
          onChange={tabChangeHandler}
          value={value}
          sx={{
            "& .Mui-selected": {
              "& .MuiTypography-root": {
                color: COLORS.PRIMARY,
              },
            },
            "& .MuiTabs-indicator": {
              backgroundColor: COLORS.PRIMARY,
            },
            "& .MuiTypography-root": {
              color: COLORS.GREY,
            },
            mb: 4,
            "& .MuiTabScrollButton-root": {
              color: { lg: COLORS.BLACK, xs: COLORS.WHITE },
            },
          }}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          {data.servicesTabs.map((val, i) => (
            <Tab
              label={
                <Typography
                  fontSize={14}
                  sx={{
                    fontFamily: poppins500.style,
                  }}
                >
                  {val.label}
                </Typography>
              }
              key={i}
            />
          ))}
        </Tabs>

        {data.servicesTabs.map((_, index) => (
          <TabPanel value={value} index={index}>
            <Grid2 container spacing={4}>
              {serviceData.map((val, i) => (
                <Grid2 size={{ lg: 4, xs: 12 }} key={i}>
                  <ServicesCard
                    heading={val.heading}
                    description={val.description}
                  />
                </Grid2>
              ))}
            </Grid2>
          </TabPanel>
        ))}
      </Container>
    </div>
  );
};

export default ServicesTab;
