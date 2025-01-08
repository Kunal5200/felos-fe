import { COLORS } from "./colors";
import { poppins500 } from "./fonts";

export const textField = {
  "& label": {
    fontSize: 12,
    fontFamily: poppins500.style,
  },
};

export const loginTextField = {
  "& label.Mui-focused": {
    color: "#ffffff",
  },
  "& label": {
    fontSize: "15px",
    fontFamily: poppins500.style,
    color: "#ffffff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #d7d7d7",
      borderRadiu: 8,
    },
    "&:hover fieldset": {
      borderColor: COLORS.PRIMARY,
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #f2940c",
    },
    color: COLORS.WHITE,
    borderRadius: 8,
  },

  "& .Mui-error": {
    "& fieldset": {
      border: "1px solid #d32f2f",
    },
    "&:hover fieldset": {
      border: "1px solid #d32f2f",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #d32f2f",
    },
    "& label.Mui-focused": {
      color: "#d32f2f",
    },
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: "#d32f2f",
  },
};

export const blackTextField = {
  "& label.Mui-focused": {
    color: COLORS.BLACK,
  },
  "& label": {
    fontSize: "15px",
    fontFamily: poppins500.style,
    color: COLORS.BLACK,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #d7d7d7",
      borderRadiu: 8,
    },
    "&:hover fieldset": {
      borderColor: COLORS.PRIMARY,
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #f2940c",
    },
    color: COLORS.BLACK,
    borderRadius: 8,
  },

  "& .Mui-error": {
    "& fieldset": {
      border: "1px solid #d32f2f",
    },
    "&:hover fieldset": {
      border: "1px solid #d32f2f",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #d32f2f",
    },
    "& label.Mui-focused": {
      color: "#d32f2f",
    },
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: "#d32f2f",
  },
};
