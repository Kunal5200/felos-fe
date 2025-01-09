import { poppins400, poppins500, poppins600 } from "@/utils/fonts";
import { FAQDATA, FAQPROPS } from "@/utils/types";
import { ArrowForward, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Faqs = ({ data }: FAQDATA) => {
  return (
    <div>
      <Container>
        <Typography sx={{ fontSize: 25, fontFamily: poppins600.style }}>
          Loan partners FAQ
        </Typography>
        <Typography sx={{ fontSize: 14, fontFamily: poppins500.style, mt: 1 }}>
          Answers to common questions about Loan Requirements.
        </Typography>

        <Grid2 container spacing={4} mt={5}>
          {data.map((val, i) => (
            <Grid2 size={{ lg: 6, xs: 12 }} key={i}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography
                    sx={{ fontSize: 14, fontFamily: poppins600.style }}
                  >
                    {i + 1}. {val.label}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {val.value ? (
                    <Typography
                      sx={{ fontSize: 14, fontFamily: poppins400.style }}
                    >
                      {val.value}
                    </Typography>
                  ) : (
                    <List>
                      {val.list?.map((item, index) => (
                        <ListItem key={index} disablePadding>
                          <ListItemAvatar>
                            <ArrowForward />
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography
                                sx={{
                                  fontSize: 14,
                                  fontFamily: poppins400.style,
                                }}
                              >
                                {item.label}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  )}
                </AccordionDetails>
              </Accordion>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
};

export default Faqs;
