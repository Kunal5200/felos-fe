import logo from "@/logo/logo-1.jpg";
import { COLORS } from "@/utils/colors";
import { poppins500 } from "@/utils/fonts";
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
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
  const contactList = [
    {
      icon: LocationOnOutlined,
      label: "Head Office",
      value: "Plot No.77, Sector-37, Gurugram, Haryana-122001",
    },
    {
      icon: PhoneAndroidOutlined,
      label: "Call Us",
      value: "+91-9650812333",
    },
  ];

  return (
    <Box sx={{ p: 1 }}>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Link href={"/"}>
            <Image src={logo} alt="" width={250} />
          </Link>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
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
                          fontFamily: poppins500.style,
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
                          fontFamily: poppins500.style,
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
