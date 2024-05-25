"use client";
// app/(withCommonLayout)/flats/[flatId]/page.tsx
import React from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useGetSingleFlatQuery } from "@/redux/api/flatApi";
import { useSubmitFlatRequestMutation } from "@/redux/api/requestFlatApi";
import FForm from "@/components/Forms/FForms";
import FInput from "@/components/Forms/FInput";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import { getUserInfo } from "@/services/auth.service";

const FlatRequestPage = () => {
  const router = useRouter();
  const params = useParams();
  const { flatId } = params;

  const {
    data: flat,
    error,
    isLoading,
  } = useGetSingleFlatQuery(flatId as string);

  const [submitFlatRequest, { isLoading: isSubmitting }] =
    useSubmitFlatRequestMutation();
  const userInfo = getUserInfo();

  const handleSubmit = async (values: FieldValues) => {
    try {
      await submitFlatRequest({
        flatId,
        moveInDate: values.moveInDate,
        lengthOfStay: values.lengthOfStay,
      }).unwrap();
      toast.success("Flat share request submitted successfully!");
      router.push(`/dashboard/${userInfo.role}/profile`);
    } catch (error) {
      console.error("Failed to submit flat share request:", error);
      toast.error("Failed to submit flat share request.");
    }
  };

  if (isLoading) return <CircularProgress />;

  if (error) return <Alert severity="error">Error loading flat details</Alert>;

  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {flat?.data.location}
      </Typography>
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h6" component="h2">
            Description
          </Typography>
          <Typography variant="body1">{flat?.data.description}</Typography>
          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
            Rent: ${flat?.data.rentAmount}
          </Typography>
          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
            Bedrooms: {flat?.data.bedrooms}
          </Typography>
          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
            Amenities
          </Typography>
          <Typography variant="body1">{flat?.data.amenities}</Typography>
        </CardContent>
      </Card>

      {userInfo ? (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Request to Share
          </Typography>
          <FForm
            onSubmit={handleSubmit}
            defaultValues={{ moveInDate: "", lengthOfStay: "" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FInput
                  name="moveInDate"
                  label="Move-In Date"
                  type="date"
                  required
                  fullWidth
                  sx={{ mt: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <FInput
                  name="lengthOfStay"
                  label="Length of Stay"
                  required
                  fullWidth
                  sx={{ mt: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{ mt: 4 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <CircularProgress size={24} />
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </Grid>
            </Grid>
          </FForm>
        </Box>
      ) : (
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          onClick={() => router.push(`/login`)}
        >
          Login to Request
        </Button>
      )}
    </Container>
  );
};

export default FlatRequestPage;
