import banner from "@/banner/contact-banner.jpeg";
import About from "@/components/about";
import Banner from "@/components/banner";
import Faqs from "@/components/faqs";
import founder from "@/partner/founder.jpg";
import { COLORS } from "@/utils/colors";
import { data } from "@/utils/data";
import { EMAILJS_CREDIENTIALS } from "@/utils/enum";
import { poppins400, poppins600 } from "@/utils/fonts";
import { blackTextField } from "@/utils/styles";
import { partnerValidationSchema } from "@/utils/validation";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import ThankYouModal from "@/components/thankyou";
const PartnerEnquiry = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      city: "",
      state: "",
      pinCode: "",
    },
    validationSchema: partnerValidationSchema,
    onSubmit: (values) => {
      setLoading(true);

      emailjs
        .send(
          EMAILJS_CREDIENTIALS.SERVICE_ID,
          EMAILJS_CREDIENTIALS.PARTNER_TEMPLATE,
          values,
          EMAILJS_CREDIENTIALS.PUBLIC_KEY
        )
        .then((res) => {
          //   console.log("res", res);
          setLoading(false);
          setOpen(true);
          formik.resetForm();
        })
        .catch((err) => {
          console.log("err", err);
          setLoading(false);
        });
    },
  });
  return (
    <div>
      <Banner img={banner.src} heading="Partner Enquiry" />
      <ThankYouModal open={open} setOpen={setOpen} />
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
        <form onSubmit={formik.handleSubmit}>
          <Grid2 container spacing={5} mt={4}>
            <Grid2 size={{ lg: 4, xs: 12 }}>
              <TextField
                sx={{
                  ...blackTextField,
                }}
                fullWidth
                label="Full Name"
                id="fullName"
                onChange={formik.handleChange}
                value={formik.values.fullName}
                error={
                  formik.touched.fullName && Boolean(formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </Grid2>
            <Grid2 size={{ lg: 4, xs: 12 }}>
              <TextField
                sx={{
                  ...blackTextField,
                }}
                fullWidth
                label="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                id="email"
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
                onChange={formik.handleChange}
                value={formik.values.mobileNumber}
                error={
                  formik.touched.mobileNumber &&
                  Boolean(formik.errors.mobileNumber)
                }
                helperText={
                  formik.touched.mobileNumber && formik.errors.mobileNumber
                }
                id="mobileNumber"
              />
            </Grid2>
            <Grid2 size={{ lg: 4, xs: 12 }}>
              <TextField
                sx={{
                  ...blackTextField,
                }}
                fullWidth
                label="City"
                onChange={formik.handleChange}
                value={formik.values.city}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                id="city"
              />
            </Grid2>
            <Grid2 size={{ lg: 4, xs: 12 }}>
              <TextField
                sx={{
                  ...blackTextField,
                }}
                fullWidth
                label="State"
                onChange={formik.handleChange}
                value={formik.values.state}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
                id="state"
              />
            </Grid2>
            <Grid2 size={{ lg: 4, xs: 12 }}>
              <TextField
                sx={{
                  ...blackTextField,
                }}
                fullWidth
                label="Pin Code"
                onChange={formik.handleChange}
                value={formik.values.pinCode}
                error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
                helperText={formik.touched.pinCode && formik.errors.pinCode}
                id="pinCode"
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
                type="submit"
              >
                {loading ? (
                  <CircularProgress sx={{ color: COLORS.WHITE }} size={20} />
                ) : (
                  "Send Now"
                )}
              </Button>
            </Grid2>
          </Grid2>
        </form>

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
        <Box sx={{ pt: 8, pb: 5 }}>
          <Faqs data={data.faqData} />
        </Box>
      </Container>
    </div>
  );
};

export default PartnerEnquiry;
