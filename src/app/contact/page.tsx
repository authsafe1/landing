import { SupportPageFade } from '@/components';
import { ArrowRight } from '@mui/icons-material';
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

const Contact = () => {
  return (
    <main>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Box sx={{ mb: 2 }}>
          <Typography variant="h2" component="h1">
            Need help?
          </Typography>
          <Typography color="textSecondary">
            Our team is ready to assist you with your sales inquiries, technical
            support, or product-related questions.
          </Typography>
        </Box>
        <Grid container rowSpacing={4} columnSpacing={6}>
          <Grid size={{ xs: 12, md: 6 }} textAlign="center">
            <Paper variant="outlined" sx={{ p: 4 }}>
              <Stack direction="column" divider={<Divider />} spacing={4}>
                <Box>
                  <Box sx={{ mb: 4 }}>
                    <Typography gutterBottom variant="h4">
                      Sales
                    </Typography>
                    <Typography>
                      Get in touch to discuss pricing, enterprise options, or to
                      schedule a demo.
                    </Typography>
                  </Box>
                  <Button variant="contained" endIcon={<ArrowRight />}>
                    Explore more
                  </Button>
                </Box>
                <Box>
                  <Box sx={{ mb: 4 }}>
                    <Typography gutterBottom variant="h4">
                      Engineering
                    </Typography>
                    <Typography>
                      Submit a support ticket or email support@authsafe.in for
                      quick assistance.
                    </Typography>
                  </Box>
                  <Button variant="contained" endIcon={<ArrowRight />}>
                    Ask for help
                  </Button>
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
              <SupportPageFade />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Contact;
