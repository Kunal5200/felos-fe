import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { MODALPROPS } from "@/utils/types";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "12px",
  p: 4,
  textAlign: "center",
};

const ThankYouModal= ({ open, setOpen }: MODALPROPS) => {

  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <CheckCircleOutlineIcon
            color="success"
            sx={{ fontSize: 60, mb: 2 }}
          />
          <Typography variant="h5" component="h2" gutterBottom>
            Thank You!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your submission has been received. We appreciate your feedback!
          </Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ mt: 3 }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ThankYouModal;
