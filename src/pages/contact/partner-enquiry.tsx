import banner from "@/banner/contact-banner.jpeg";
import About from "@/components/about";
import Banner from "@/components/banner";
import Faqs from "@/components/faqs";
import founder from "@/partner/founder.jpg";
import { COLORS } from "@/utils/colors";
import { data } from "@/utils/data";
import { poppins400, poppins600 } from "@/utils/fonts";
import { blackTextField } from "@/utils/styles";
import {
  Box,
  Button,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
const PartnerEnquiry = () => {
  return (
    <div>
      <Banner img={banner.src} heading="Partner Enquiry" />

      <Container sx={{ mt: 4, pb: 10 }}>
        <Grid2 container>
          <Grid2 size={{ lg: 5, xs: 12 }} margin="auto">
            <Typography
              sx={{
                fontSize: 30,
                fontFamily: poppins400.style,
                textAlign: "center",
                mt: 2,
              }}
            >
              Become a{" "}
              <Typography
                component={"span"}
                sx={{
                  fontSize: 30,
                  color: COLORS.BLUE,
                  fontFamily: poppins600.style,
                }}
              >
                Partner{" "}
              </Typography>
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={5} mt={4}>
          <Grid2 size={{ lg: 4, xs: 12 }}>
            <TextField
              sx={{
                ...blackTextField,
              }}
              fullWidth
              label="Full Name"
            />
          </Grid2>
          <Grid2 size={{ lg: 4, xs: 12 }}>
            <TextField
              sx={{
                ...blackTextField,
              }}
              fullWidth
              label="Email"
            />
          </Grid2>
          <Grid2 size={{ lg: 4, xs: 12 }}>
            <TextField
              sx={{
                ...blackTextField,
              }}
              fullWidth
              label="Mobile Number"
              type="number"
            />
          </Grid2>
          <Grid2 size={{ lg: 4, xs: 12 }}>
            <TextField
              sx={{
                ...blackTextField,
              }}
              fullWidth
              label="City"
            />
          </Grid2>
          <Grid2 size={{ lg: 4, xs: 12 }}>
            <TextField
              sx={{
                ...blackTextField,
              }}
              fullWidth
              label="State"
            />
          </Grid2>
          <Grid2 size={{ lg: 4, xs: 12 }}>
            <TextField
              sx={{
                ...blackTextField,
              }}
              fullWidth
              label="Pin Code"
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

        <Box sx={{ pt: 8, pb: 5 }}>
          <About
            heading1="Our Founder"
            coloredHeading=""
            heading2=""
            description="Prefinn is founded by Mr. Rajesh Upadhyay, an IIM-C alumnus and seasoned Banker with over 20yrs of experience in finance and fintech business management. Throughout his BFSI career Mr. Upadhyay has held key business roles in leading organizations, including Axis Bank, Manipal Tech, Kotak Bank, HDFC Bank and ICICI Bank. "
            listDescription="With extensive expertise in Digital Lending, Fintech Business, Financial Inclusion Program and RBI Compliances, Mr. Upadhyay has played a pivotal role in driving Business growth and Innovation. His strategic vision and solutions empower fintech companies and financial institutions to achieve sustainable financial success."
            fontWeight="400"
            img={founder}
          />
        </Box>
        <Box sx={{ pt: 8, pb: 5 }}>
          <Faqs data={data.faqData} />
        </Box>
      </Container>
    </div>
  );
};

export default PartnerEnquiry;
