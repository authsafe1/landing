import { Footer, Header } from '@/components';
import { SupportAgent } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid2 as Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Fragment } from 'react';

const Contact = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Box sx={{ mb: 2 }}>
            <Typography variant="h2" component="h1">
              How can we help you?
            </Typography>
            <Typography color="textSecondary">
              Get in touch with our sales and support teams for demos,
              onboarding support, or product questions.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }} textAlign="center">
              <Paper variant="outlined" sx={{ p: 4 }}>
                <Stack direction="column" divider={<Divider />} spacing={4}>
                  <Box>
                    <Box sx={{ mb: 4 }}>
                      <Typography gutterBottom variant="h4">
                        Sales
                      </Typography>
                      <Typography>
                        Connect with our sales team to talk about pricing,
                        enterprise contracts, or to request a demo
                      </Typography>
                    </Box>
                    <Button variant="contained">Talk to Sales</Button>
                  </Box>
                  <Box>
                    <Box sx={{ mb: 4 }}>
                      <Typography gutterBottom variant="h4">
                        Support
                      </Typography>
                      <Typography>
                        Submit a ticket to our support team or email
                        support@clerk.dev directly
                      </Typography>
                    </Box>
                    <Button variant="contained">Submit a ticket</Button>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <SupportAgent sx={{ fontSize: 150 }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Contact;
