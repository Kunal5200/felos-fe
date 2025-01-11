import { COLORS } from "@/utils/colors";
import { data } from "@/utils/data";
import { poppins400, poppins500, poppins600 } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import { partnerValidationSchema } from "@/utils/validation";
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CREDIENTIALS } from "@/utils/enum";
import ThankYouModal from "../thankyou";
const Form = () => {
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
      <ThankYouModal open={open} setOpen={setOpen} />
      <Typography
        sx={{
          color: COLORS.WHITE,
          fontSize: { lg: 20, xs: 12 },
          fontFamily: poppins500.style,
          letterSpacing: 4,
        }}
      >
        Contact Us
      </Typography>
      <Box
        sx={{ borderBottom: `2px solid ${COLORS.PRIMARY}`, width: 50, mt: 2 }}
      ></Box>
      <Typography
        sx={{
          color: COLORS.WHITE,
          fontFamily: poppins400.style,
          letterSpacing: 4,
          fontSize: { lg: 35, xs: 20 },
          mt: 3,
        }}
      >
        to become our{" "}
        <Typography
          sx={{
            fontFamily: poppins600.style,
            fontSize: { lg: 35, xs: 20 },
            color: COLORS.PRIMARY,
          }}
          component={"span"}
        >
          preferred partner
        </Typography>{" "}
        for loan distribution
      </Typography>

      <Box sx={{ mt: 5 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid2 container spacing={3}>
            <Grid2 size={12}>
              <TextField
                sx={{
                  ...loginTextField,
                }}
                fullWidth
                label="Full Name*"
                id="fullName"
                onChange={formik.handleChange}
                value={formik.values.fullName}
                error={
                  formik.touched.fullName && Boolean(formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                sx={{
                  ...loginTextField,
                }}
                fullWidth
                label="Mobile Number*"
                id="mobileNumber"
                onChange={formik.handleChange}
                value={formik.values.mobileNumber}
                error={
                  formik.touched.mobileNumber &&
                  Boolean(formik.errors.mobileNumber)
                }
                helperText={
                  formik.touched.mobileNumber && formik.errors.mobileNumber
                }
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                sx={{
                  ...loginTextField,
                }}
                fullWidth
                label="Email*"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid2>
            <Grid2 size={{ lg: 6, xs: 12 }}>
              <TextField
                sx={{
                  ...loginTextField,
                }}
                fullWidth
                label="City*"
                onChange={formik.handleChange}
                value={formik.values.city}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                id="city"
              />
            </Grid2>
            <Grid2 size={{ lg: 6, xs: 12 }}>
              <TextField
                sx={{
                  ...loginTextField,
                }}
                fullWidth
                label="state*"
                onChange={formik.handleChange}
                value={formik.values.state}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
                id="state"
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                sx={{
                  ...loginTextField,
                }}
                fullWidth
                label="Pin code*"
                onChange={formik.handleChange}
                value={formik.values.pinCode}
                error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
                helperText={formik.touched.pinCode && formik.errors.pinCode}
                id="pinCode"
              />
            </Grid2>
            <Grid2 size={12}>
              <Button
                sx={{
                  color: COLORS.WHITE,
                  backgroundColor: COLORS.PRIMARY,
                  fontSize: 12,
                  fontFamily: poppins500.style,
                  borderRadius: 8,
                  p: 1,
                }}
                fullWidth
                type="submit"
              >
                {loading ? (
                  <CircularProgress sx={{ color: COLORS.WHITE }} size={20} />
                ) : (
                  "submit now"
                )}
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </Box>
    </div>
  );
};

export default Form;
