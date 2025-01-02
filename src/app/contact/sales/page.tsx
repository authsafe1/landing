import constants from '@/config/constants';
import { SupportAgent } from '@mui/icons-material';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  FormControl,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Sales',
};

const Sales = () => {
  return (
    <main>
      <Container
        sx={{ display: 'flex', justifyContent: 'center', py: 8 }}
        maxWidth="lg"
      >
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
          <SupportAgent fontSize="large" />
          <CardHeader
            title="Contact sales"
            subheader="Get in touch with our sales team. We'd love to hear more about your application's use-cases"
          />
          <CardContent>
            <Grid container spacing={3}>
              <Grid width="100%">
                <TextField label="Name" required fullWidth />
              </Grid>
              <Grid width="100%">
                <TextField label="Email" required fullWidth type="email" />
              </Grid>
              <Grid width="100%">
                <TextField label="Website" fullWidth type="url" />
              </Grid>
              <Grid width="100%">
                <FormControl fullWidth>
                  <InputLabel id="country-select-label">Country</InputLabel>
                  <Select
                    labelId="country-select-label"
                    label="Country"
                    MenuProps={{
                      style: {
                        maxHeight: 400,
                      },
                    }}
                  >
                    {constants.countryList.map((country, index) => (
                      <MenuItem key={`${country}-${index}`} value={country}>
                        {country}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid width="100%">
                <TextField label="Name" required fullWidth />
              </Grid>
              <Grid width="100%">
                <TextField label="Message" multiline rows={5} fullWidth />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button variant="contained">Submit</Button>
          </CardActions>
        </Card>
      </Container>
    </main>
  );
};

export default Sales;
