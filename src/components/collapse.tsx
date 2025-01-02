import { COLORS } from "@/utils/colors";
import { poppins400, poppins700 } from "@/utils/fonts";
import { ACCORDIONPROPS } from "@/utils/types";
import { Add, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";
const Collapsable = ({ data }: ACCORDIONPROPS) => {
  const [expanded, setExpanded] = useState("");
  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: Boolean) => {
      setExpanded(newExpanded ? panel : "");
    };
  return (
    <div>
      {data.map((val, i) => (
        <Accordion
          sx={{ boxShadow: "none", mt: 4, mb: 4 }}
          key={i}
          expanded={expanded === `panel${i}`}
          onChange={handleChange(`panel${i}`)}
          defaultExpanded
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel${i}` ? (
                <Remove htmlColor={COLORS.PRIMARY} />
              ) : (
                <Add htmlColor="#000" />
              )
            }
          >
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: poppins700.style,
                color: expanded === `panel${i}` ? COLORS.BLUE : COLORS.BLACK,
              }}
            >
              {val.label}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: 14,
                fontFamily: poppins400.style,
                color: COLORS.GREY,
              }}
            >
              {val.value}
            </Typography>
            <List>
              {val.list.map((item, index) => (
                <ListItem disablePadding>
                  <ListItemAvatar sx={{ minWidth: 25 }}>
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontFamily: poppins400.style,
                        color: COLORS.GREY,
                      }}
                    >
                      {index + 1}.
                    </Typography>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontFamily: poppins400.style,
                          color: COLORS.GREY,
                        }}
                      >
                        {item.label}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Collapsable;
