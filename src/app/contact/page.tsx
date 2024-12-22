import { LoadingButton } from '@mui/lab';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid2 as Grid,
  MenuItem,
  TextField,
} from '@mui/material';

const Contact = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="sm">
      <Card>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <CardHeader title="Contact Us" subheader="Get in touch with us to " />
        </Box>
        <CardContent>
          <Grid container component="form" alignItems="center" spacing={4}>
            <Grid width="100%">
              <TextField label="Name" required fullWidth />
            </Grid>
            <Grid width="100%">
              <TextField label="Email" required fullWidth />
            </Grid>
            <Grid width="100%">
              <TextField label="Website" fullWidth />
            </Grid>
            <Grid width="100%">
              <TextField label="Type" fullWidth select>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </TextField>
            </Grid>
            <Grid width="100%">
              <TextField label="Message" fullWidth multiline minRows={6} />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <LoadingButton variant="contained">Submit</LoadingButton>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Contact;
