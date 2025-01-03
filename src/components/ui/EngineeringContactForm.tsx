'use client';

import constants from '@/config/constants';
import { Engineering } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
  Alert,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from '@mui/material';
import { FormEventHandler, useState } from 'react';

const EngineeringContactForm = () => {
  const [body, setBody] = useState({
    name: '',
    email: '',
    type: 'Free',
    message: '',
  });
  const [apiResponse, setApiResponse] = useState({
    success: false,
    error: false,
    loading: false,
    message: '',
  });

  const handleChange = (name: string, value: string) => {
    setBody({ ...body, [name]: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setApiResponse({ ...apiResponse, loading: true });
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact/engineering`,
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.ok) {
        setApiResponse({
          ...apiResponse,
          loading: false,
          success: true,
          message: 'Engineering ticket raised',
        });
      } else {
        constants.fetchError(response.status);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setApiResponse({
        ...apiResponse,
        loading: false,
        error: true,
        message: err.message,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Snackbar
        open={apiResponse.success || apiResponse.error}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={() => {
          setApiResponse({ ...apiResponse, success: false, error: false });
        }}
      >
        <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
          {apiResponse.message}
        </Alert>
      </Snackbar>
      <Card
        variant="elevation"
        elevation={5}
        sx={{
          p: 2,
          maxWidth: 500,
          boxShadow: `0px 6px 14px rgba(91, 25, 145, 0.25), 0px 2px 8px rgba(0, 0, 0, 0.15), 0px 12px 25px 8px rgba(177, 83, 254, 0.18)`,
          borderRadius: 3,
        }}
      >
        <Engineering fontSize="large" />
        <CardHeader
          title="Contact Engineering"
          subheader="Get in touch with our support staff to get answers to your burning questions"
        />
        <CardContent>
          <Grid container spacing={3}>
            <Grid width="100%">
              <TextField
                label="Name"
                name="name"
                value={body.name}
                onChange={(event) => handleChange('name', event.target.value)}
                required
                fullWidth
              />
            </Grid>
            <Grid width="100%">
              <TextField
                label="Email"
                name="email"
                value={body.email}
                onChange={(event) => handleChange('email', event.target.value)}
                required
                fullWidth
                type="email"
              />
            </Grid>
            <Grid width="100%">
              <FormControl fullWidth>
                <InputLabel id="country-select-label">Account Type</InputLabel>
                <Select
                  labelId="country-select-label"
                  label="Account Type"
                  name="type"
                  value={body.type}
                  onChange={(event) => handleChange('type', event.target.value)}
                  MenuProps={{
                    style: {
                      maxHeight: 400,
                    },
                  }}
                >
                  {constants.instanceType.map(({ title }, index) => (
                    <MenuItem key={`${title}-${index}`} value={title}>
                      {title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid width="100%">
              <TextField
                label="Message"
                name="message"
                value={body.message}
                onChange={(event) =>
                  handleChange('message', event.target.value)
                }
                multiline
                rows={5}
                fullWidth
                required
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <LoadingButton
            loading={apiResponse.loading}
            variant="contained"
            type="submit"
          >
            Submit
          </LoadingButton>
        </CardActions>
      </Card>
    </form>
  );
};

export default EngineeringContactForm;
