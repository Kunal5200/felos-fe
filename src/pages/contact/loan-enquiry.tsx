import banner from "@/banner/contact-banner.jpeg";
import Banner from "@/components/banner";
import LoanStep from "@/components/loanSteps";
import { COLORS } from "@/utils/colors";
import { data } from "@/utils/data";
import { poppins400, poppins500, poppins600 } from "@/utils/fonts";
import { blackTextField } from "@/utils/styles";
import {
    Autocomplete,
    Box,
    Button,
    Container,
    Divider,
    Grid2,
    TextField,
    Typography
} from "@mui/material";
const LoanEnquiry = () => {
  return (
    <div>
      <Banner img={banner.src} heading="Loan Enquiry" />

      {/* <Container sx={{ pt: 10, pb: 10 }}>
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
          <Grid2 size={{ lg: 6, xs: 12 }}>
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
          </Grid2>
        </Grid2>
      </Container> */}
      <Box sx={{ pt: 10 }}>
        <LoanStep />
      </Box>
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
                  color: COLORS.BLUE,
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
            />
          </Grid2>
          <Grid2 size={{ lg: 4, xs: 12 }}>
            <Autocomplete
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Loan Type"
                  sx={{
                    ...blackTextField,
                  }}
                />
              )}
              options={data.loanProducts}
              renderOption={(props, option) => (
                <Box component={"li"} {...props}>
                  <Typography
                    sx={{ fontSize: 14, fontFamily: poppins500.style }}
                  >
                    {option.label}
                  </Typography>
                </Box>
              )}
            />
          </Grid2>
          <Grid2 size={{ lg: 4, xs: 12 }}>
            <TextField
              sx={{
                ...blackTextField,
              }}
              fullWidth
              label="Amount"
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
              type="number"
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

export default LoanEnquiry;
