import banner from "@/banner/contact-banner.jpeg";
import london from "@/banner/london.jpg";
import Banner from "@/components/banner";
import ContactCard from "@/components/contact/contactCard";
import { data } from "@/utils/data";
import {
  Button,
  Container,
  Divider,
  Grid2,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import tokyo1 from "@/banner/tokyo-2.jpg";
import { poppins400, poppins600 } from "@/utils/fonts";
import { COLORS } from "@/utils/colors";
import { loginTextField } from "@/utils/styles";
const Contact = () => {
  return (
    <div>
      <Banner img={banner.src} heading="Contact Us" />

      <Container sx={{ pt: 10, pb: 10 }}>
        <Grid2 container spacing={5}>
          <Grid2 size={{ lg: 12, xs: 12 }}>
            <ContactCard
              img={london.src}
              location="Haryana, India"
              officeType="Head Office"
              data={data.londonData}
              height={550}
            />
          </Grid2>
          {/* <Grid2 size={{ lg: 6, xs: 12 }}>
            <Grid2 container spacing={5}>
              <Grid2 size={6}>
                <ContactCard
                  img={tokyo1.src}
                  location="Tokyo, Japan"
                  officeType="Asia branch"
                  height={250}
                  data={data.londonData}
                />
              </Grid2>
              <Grid2 size={6}>
                <ContactCard
                  img={tokyo1.src}
                  location="Tokyo, Japan"
                  officeType="Asia branch"
                  height={250}
                  data={data.londonData}
                />
              </Grid2>
              <Grid2 size={6}>
                <ContactCard
                  img={tokyo1.src}
                  location="Tokyo, Japan"
                  officeType="Asia branch"
                  height={250}
                  data={data.londonData}
                />
              </Grid2>
              <Grid2 size={6}>
                <ContactCard
                  img={tokyo1.src}
                  location="Tokyo, Japan"
                  officeType="Asia branch"
                  height={250}
                  data={data.londonData}
                />
              </Grid2>
            </Grid2>
          </Grid2> */}
        </Grid2>
      </Container>
      <Container sx={{ mt: 7, pb: 10 }}>
        <Grid2 container>
          <Grid2 size={{ lg: 5, xs: 12 }} margin="auto">
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: poppins400.style,
                textAlign: "center",
                letterSpacing: 4,
                color: COLORS.SECONDARY,
              }}
            >
              Contact Us
            </Typography>
            <Divider
              sx={{
                borderColor: COLORS.PRIMARY,
                width: 40,
                borderWidth: 1,
                margin: "auto",
                mt: 2,
              }}
            />

            <Typography
              sx={{
                fontSize: 30,
                fontFamily: poppins400.style,
                textAlign: "center",
                mt: 2,
              }}
            >
              Send Us Your{" "}
              <Typography
                component={"span"}
                sx={{
                  fontSize: 30,
                  color: COLORS.PRIMARY,
                  fontFamily: poppins600.style,
                }}
              >
                Message{" "}
              </Typography>
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={5} mt={4}>
          <Grid2 size={{ lg: 4, xs: 12 }}>
            <TextField
              sx={{
                ...loginTextField,
                "& label": {
                  color: COLORS.BLACK,
                  fontSize: 14,
                },
              }}
              fullWidth
              label="Full Name"
            />
          </Grid2>
          <Grid2 size={{ lg: 4, xs: 12 }}>
            <TextField
              sx={{
                ...loginTextField,
                "& label": {
                  color: COLORS.BLACK,
                  fontSize: 14,
                },
              }}
              fullWidth
              label="Email"
            />
          </Grid2>
          <Grid2 size={{ lg: 4, xs: 12 }}>
            <TextField
              sx={{
                ...loginTextField,
                "& label": {
                  color: COLORS.BLACK,
                  fontSize: 14,
                },
              }}
              fullWidth
              label="Mobile Number"
            />
          </Grid2>
          <Grid2 size={{lg:12,xs:11.5}}>
            <TextareaAutosize
              className="textArea_new"
              minRows={10}
              placeholder="Message"
            />
          </Grid2>
          <Grid2 size={12} textAlign={"center"}>
            <Button
              sx={{
                backgroundColor: COLORS.BLUE,
                color: COLORS.WHITE,
                borderRadius: 8,
                fontSize: 12,
                width: 150,
                p: 1,
              }}
            >
              Send Now
            </Button>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default Contact;
