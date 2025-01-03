import { COLORS } from "@/utils/colors";
import { data } from "@/utils/data";
import { poppins400, poppins500, poppins600 } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import {
  Autocomplete,
  Box,
  Button,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";

const Form = () => {
  return (
    <div>
      <Typography
        sx={{
          color: COLORS.WHITE,
          fontSize: { lg: 14, xs: 12 },
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
        To explore how we can help to{" "}
        <Typography
          sx={{
            fontFamily: poppins600.style,
            fontSize: { lg: 35, xs: 20 },
            color: COLORS.PRIMARY,
          }}
          component={"span"}
        >
          transform your fintech
        </Typography>{" "}
        journey!
      </Typography>

      <Box sx={{ mt: 5 }}>
        <form>
          <Grid2 container spacing={3}>
            <Grid2 size={12}>
              <TextField
                sx={{
                  ...loginTextField,
                }}
                fullWidth
                label="Full Name*"
              />
            </Grid2>
            <Grid2 size={12}>
              <Autocomplete
                renderInput={(params) => (
                  <TextField
                    label="I would like to discuss"
                    {...params}
                    sx={{ ...loginTextField }}
                    fullWidth
                  />
                )}
                options={data.dataOptions}
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                sx={{
                  ...loginTextField,
                }}
                fullWidth
                label="Email*"
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                sx={{
                  ...loginTextField,
                }}
                fullWidth
                label="Mobile Number*"
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
              >
                submit now
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </Box>
    </div>
  );
};

export default Form;
