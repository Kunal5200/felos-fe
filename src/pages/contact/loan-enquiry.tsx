import banner from "@/banner/contact-banner.jpeg";
import About from "@/components/about";
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
  Typography,
} from "@mui/material";
import founder from "@/partner/founder.jpg";
const LoanEnquiry = () => {
  return (
    <div>
      <Banner img={banner.src} heading="Loan Enquiry" />

      <Box sx={{ pt: 10 }}></Box>

      <Container sx={{ mt: 7, pb: 10 }}>
        <Grid2 container spacing={5}>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Grid2 container>
              <Grid2 size={{ lg: 12, xs: 12 }} margin="auto">
                <Typography
                  sx={{
                    fontSize: 30,
                    fontFamily: poppins400.style,
                    textAlign: "center",
                    mt: 2,
                  }}
                >
                  Enquire About {" "}
                  <Typography
                    component={"span"}
                    sx={{
                      fontSize: 30,
                      color: COLORS.BLUE,
                      fontFamily: poppins600.style,
                    }}
                  >
                    Loan{" "}
                  </Typography>
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2 container spacing={5} mt={4}>
              <Grid2 size={{ lg: 6, xs: 12 }}>
                <TextField
                  sx={{
                    ...blackTextField,
                  }}
                  fullWidth
                  label="Full Name"
                />
              </Grid2>
              <Grid2 size={{ lg: 6, xs: 12 }}>
                <TextField
                  sx={{
                    ...blackTextField,
                  }}
                  fullWidth
                  label="Email"
                />
              </Grid2>
              <Grid2 size={{ lg: 6, xs: 12 }}>
                <TextField
                  sx={{
                    ...blackTextField,
                  }}
                  fullWidth
                  label="Mobile Number"
                />
              </Grid2>
              <Grid2 size={{ lg: 6, xs: 12 }}>
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
              <Grid2 size={{ lg: 6, xs: 12 }}>
                <TextField
                  sx={{
                    ...blackTextField,
                  }}
                  fullWidth
                  label="Amount"
                  type="number"
                />
              </Grid2>
              <Grid2 size={{ lg: 6, xs: 12 }}>
                <TextField
                  sx={{
                    ...blackTextField,
                  }}
                  fullWidth
                  label="City"
                />
              </Grid2>
              <Grid2 size={{ lg: 6, xs: 12 }}>
                <TextField
                  sx={{
                    ...blackTextField,
                  }}
                  fullWidth
                  label="State"
                />
              </Grid2>
              <Grid2 size={{ lg: 6, xs: 12 }}>
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
          </Grid2>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <LoanStep />
          </Grid2>
        </Grid2>

        <Box sx={{ pt: 5, pb: 5 }}>
          <Container>
            <Typography sx={{ fontSize: 25, fontFamily: poppins600.style }}>
              {" "}
              Founder’s Message
            </Typography>
            <Typography
              sx={{ fontSize: 15, fontFamily: poppins400.style, mt: 3 }}
            >
              {" "}
              Prefinn will serve as Preferred Finance Partner for all segments
              of Retail and Institutional Customers. Its Loan Distribution
              Platform has been created with a vision to offer multiple Loan
              Products to B2C Customers from any Bank or NBFCs as per their
              Choice. Prefinn Large Network of IBOs (Independent Business
              Owners) will assist Customers to find out Suitable Loan product &
              Bank Partners which will bridge the gap of tailored finance
              options across the Country.
            </Typography>
          </Container>
        </Box>
      </Container>
    </div>
  );
};

export default LoanEnquiry;
