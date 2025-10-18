// src/components/LoginModal.tsx
import React, { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";

type SignupModalProps = {
  open: boolean;
  onClose: () => void;
};

const SignupModal: React.FC<SignupModalProps> = ({ open, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log({ username, password });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 360,
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 24,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 1,
            py: 1,
            mb:-2
          }}
        >
          <Box></Box>
          <Typography variant="h6" textAlign={"center"}>
            Login
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            bgcolor: "#EBEBEB",
            p: 1,
            minHeight: 500,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Typography
            variant="h4"
            textAlign={"center"}
            fontWeight={700}
            gutterBottom
          >
            BET<span style={{ color: "#FFD700" }}>JILI</span>
          </Typography>
          <Box component={Paper} elevation={2} p={1} my={2}>
            <Grid container spacing={2} mt={2}>
              <Grid size={12}>
                <TextField
                  size="small"
                  label="Username"
                  placeholder="4-15 Characters or Numbers"
                  variant="outlined"
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  size="small"
                  label="Password"
                  placeholder="6-20 characters and numbers"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "flex-end", my: 2 }}>
              <Link href="#" underline="hover" fontSize={14}>
                Forgot password?
              </Link>
            </Box>
          </Box>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ py: 1.5, fontWeight: 600 }}
            onClick={handleLogin}
            disabled={!username || !password} // simple validation
          >
            Login
          </Button>

          {/* Sign up */}
          <Box sx={{ textAlign: "center", mt: 1 }}>
            <Typography variant="body2">
              Do not have an account?{" "}
              <Link href="#" underline="hover">
                Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default SignupModal;