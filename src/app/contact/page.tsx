import { ArrowRight, Engineering, SupportAgent } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Paper,
  Typography,
} from '@mui/material';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
};

const Contact = () => {
  return (
    <main>
      <Container sx={{ pb: 8 }} maxWidth="xl">
        <Box sx={{ mb: 2 }}>
          <Typography variant="h2" component="h1">
            Need help?
          </Typography>
          <Typography color="textSecondary">
            Our team is ready to assist you with your sales inquiries, technical
            support, or product-related questions.
          </Typography>
        </Box>
        <Paper variant="outlined" sx={{ p: 8, textAlign: 'center' }}>
          <Grid container justifyContent="space-between">
            <Grid size={{ sm: 12, md: 6 }}>
              <Box sx={{ mb: 4 }}>
                <SupportAgent sx={{ fontSize: 100 }} />
                <Typography gutterBottom variant="h4">
                  Sales
                </Typography>
                <Typography>
                  Get in touch to discuss pricing, plans, enterprise options, or
                  to schedule a demo.
                </Typography>
              </Box>
              <Button
                LinkComponent={Link}
                variant="contained"
                endIcon={<ArrowRight />}
                href="/contact/sales"
              >
                Explore more
              </Button>
            </Grid>
            <Grid size={{ sm: 12, md: 6 }}>
              <Box sx={{ mb: 4 }}>
                <Engineering sx={{ fontSize: 100 }} />
                <Typography gutterBottom variant="h4">
                  Engineering
                </Typography>
                <Typography>
                  Submit a support ticket or email support@authsafe.in for quick
                  assistance.
                </Typography>
              </Box>
              <Button
                LinkComponent={Link}
                variant="contained"
                endIcon={<ArrowRight />}
                href="/contact/engineering"
              >
                Ask for help
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </main>
  );
};

export default Contact;
