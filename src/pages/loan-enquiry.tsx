import banner from "@/banner/contact-banner.jpeg";
import Banner from "@/components/banner";
import LoanStep from "@/components/loanSteps";
import { COLORS } from "@/utils/colors";
import { data } from "@/utils/data";
import { poppins400, poppins500, poppins600 } from "@/utils/fonts";
import { blackTextField } from "@/utils/styles";
import { LOANPRODUCTS } from "@/utils/types";
import { loanValidationSchema } from "@/utils/validation";
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { SyntheticEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CREDIENTIALS } from "@/utils/enum";
import ThankYouModal from "@/components/thankyou";
const LoanEnquiry = () => {
  const [loading, setLoading] = useState(false);
  const [loanType, setLoanType] = useState<LOANPRODUCTS | null | undefined>(
    null
  );
  const [open, setOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      loanType: "",
      amount: "",
      city: "",
      state: "",
      pinCode: "",
    },
    validationSchema: loanValidationSchema,
    onSubmit: (values) => {
      setLoading(true);

      emailjs
        .send(
          EMAILJS_CREDIENTIALS.SERVICE_ID,
          EMAILJS_CREDIENTIALS.TEMPLATE_ID,
          values,
          EMAILJS_CREDIENTIALS.PUBLIC_KEY
        )
        .then((res) => {
          //   console.log("res", res);
          setLoading(false);
          setOpen(true);
          formik.resetForm();
          setLoanType(null);
        })
        .catch((err) => {
          console.log("err", err);
          setLoading(false);
        });
    },
  });

  const loanTypeHandler = (
    event: SyntheticEvent,
    newValue: LOANPRODUCTS | null
  ) => {
    setLoanType(newValue);

    if (newValue) {
      
      formik.values.loanType = newValue.label;
      formik.errors.loanType = "";
    }
  };

  return (
    <div>
      <Banner img={banner.src} heading="Loan Enquiry" />

      <Box sx={{ pt: 10 }}></Box>
      <ThankYouModal open={open} setOpen={setOpen} />
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
            <form onSubmit={formik.handleSubmit}>
              <Grid2 container spacing={5} mt={4}>
                <Grid2 size={{ lg: 6, xs: 12 }}>
                  <TextField
                    sx={{
                      ...blackTextField,
                    }}
                    fullWidth
                    id="fullName"
                    label="Full Name"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.fullName && Boolean(formik.errors.fullName)
                    }
                    helperText={
                      formik.touched.fullName && formik.errors.fullName
                    }
                    value={formik.values.fullName}
                  />
                </Grid2>
                <Grid2 size={{ lg: 6, xs: 12 }}>
                  <TextField
                    sx={{
                      ...blackTextField,
                    }}
                    fullWidth
                    label="Email"
                    id="email"
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </Grid2>
                <Grid2 size={{ lg: 6, xs: 12 }}>
                  <TextField
                    sx={{
                      ...blackTextField,
                    }}
                    fullWidth
                    label="Mobile Number"
                    id="mobileNumber"
                    error={
                      formik.touched.mobileNumber &&
                      Boolean(formik.errors.mobileNumber)
                    }
                    helperText={
                      formik.touched.mobileNumber && formik.errors.mobileNumber
                    }
                    onChange={formik.handleChange}
                    value={formik.values.mobileNumber}
                  />
                </Grid2>
                <Grid2 size={{ lg: 6, xs: 12 }}>
                  <Autocomplete
                    onChange={loanTypeHandler}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Loan Type"
                        sx={{
                          ...blackTextField,
                        }}
                        id="loanType"
                        error={
                          formik.touched.loanType &&
                          Boolean(formik.errors.loanType)
                        }
                        helperText={
                          formik.touched.loanType && formik.errors.loanType
                        }
                        value={formik.values.loanType}
                      />
                    )}
                    value={loanType}
                    options={data.loanProducts}
                    getOptionLabel={(option) => option.label}
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
                    id="amount"
                    error={
                      formik.touched.amount && Boolean(formik.errors.amount)
                    }
                    helperText={formik.touched.amount && formik.errors.amount}
                    onChange={formik.handleChange}
                    value={formik.values.amount}
                  />
                </Grid2>
                <Grid2 size={{ lg: 6, xs: 12 }}>
                  <TextField
                    sx={{
                      ...blackTextField,
                    }}
                    fullWidth
                    label="City"
                    id="city"
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                    onChange={formik.handleChange}
                    value={formik.values.city}
                  />
                </Grid2>
                <Grid2 size={{ lg: 6, xs: 12 }}>
                  <TextField
                    sx={{
                      ...blackTextField,
                    }}
                    fullWidth
                    label="State"
                    id="state"
                    error={formik.touched.state && Boolean(formik.errors.state)}
                    helperText={formik.touched.state && formik.errors.state}
                    onChange={formik.handleChange}
                    value={formik.values.state}
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
                    id="pinCode"
                    error={
                      formik.touched.pinCode && Boolean(formik.errors.pinCode)
                    }
                    helperText={formik.touched.pinCode && formik.errors.pinCode}
                    onChange={formik.handleChange}
                    value={formik.values.pinCode}
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
                      <CircularProgress
                        sx={{ color: COLORS.WHITE }}
                        size={20}
                      />
                    ) : (
                      "Send Now"
                    )}
                  </Button>
                </Grid2>
              </Grid2>
            </form>
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
