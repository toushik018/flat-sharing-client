// pages/register.tsx
"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/services/actions/registerUser";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.service";
import FInput from "@/components/Forms/FInput";
import FForm from "@/components/Forms/FForms";

export const userValidationSchema = z.object({
  username: z.string().min(1, "Please enter your username!"),
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
  profilePhoto: z.string().url("Please enter a valid URL!").optional(),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "Please enter a valid contact number"),
});

const defaultValues = {
  username: "",
  email: "",
  password: "",
  profilePhoto: "",
  contactNumber: "",
};

const RegisterUserPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    try {
      const res = await registerUser(values);
      console.log(res?.data.id);
      if (res?.data.id) {
        toast.success("User registered successfully!");
        const result = await userLogin({
          email: values.email,
          password: values.password,
        });
        if (result?.data?.token) {
          storeUserInfo({ accessToken: result?.data?.token });
          router.push("/dashboard");
        }
      } else {
        const errorMessage = res.message || "Registration failed!";
        toast.error(errorMessage);
        console.log("Error:", res);
      }
    } catch (err: any) {
      toast.error(err.message);
      console.error("Exception:", err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight={600}>
                User Registration
              </Typography>
            </Box>
          </Stack>

          <Box>
            <FForm
              onSubmit={handleRegister}
              resolver={zodResolver(userValidationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item xs={12}>
                  <FInput name="username" label="Username" fullWidth={true} />
                </Grid>
                <Grid item xs={12}>
                  <FInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FInput
                    name="profilePhoto"
                    label="Profile Photo URL"
                    type="url"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FInput
                    name="contactNumber"
                    label="Contact Number"
                    type="tel"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Button
                sx={{ margin: "10px 0px" }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Already have an account? <Link href="/login">Login</Link>
              </Typography>
            </FForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterUserPage;
