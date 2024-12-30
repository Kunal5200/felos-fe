import logo from "@/logo/logo.svg";
import { COLORS } from "@/utils/colors";
import { poppins } from "@/utils/fonts";
import { LocationOnOutlined, PhoneAndroidOutlined } from "@mui/icons-material";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
const Header = () => {
  const contactList = [
    {
      icon: LocationOnOutlined,
      label: "Head Office",
      value: "325 admiral unit, North cost, USA",
    },
    {
      icon: PhoneAndroidOutlined,
      label: "Call Us",
      value: "+2-0100 843 1112",
    },
  ];
  return (
    <Box sx={{ p: 2 }}>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Image src={logo} alt="" width={150} />
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            {contactList.map((val, i) => (
              <List key={i}>
                <ListItem>
                  <ListItemAvatar>
                    {<val.icon sx={{ color: COLORS.PRIMARY, fontSize: 40 }} />}
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontFamily: poppins.style,
                          color: COLORS.GREY,
                          fontWeight: "300 !important",
                        }}
                      >
                        {val.label}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontFamily: poppins.style,
                          fontWeight: "500 !important",
                        }}
                      >
                        {val.value}
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
