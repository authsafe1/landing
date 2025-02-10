import { Box, Container, Divider, Typography } from '@mui/material';
import { FC } from 'react';

const Shipping: FC = () => {
  return (
    <main>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography component="h1" variant="h3" gutterBottom>
          Shipping Policy
        </Typography>
        <Divider />
        <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Digital Product & Service Delivery
            </Typography>
            <Typography component="p" gutterBottom>
              AuthSafe is a cloud-based IAM platform, and all services are
              delivered digitally.
            </Typography>
            <ul>
              <li>
                <Typography component="p">
                  No physical shipping is involved.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  Account activation happens instantly after successful payment.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  Subscription details and invoices are sent via email.
                </Typography>
              </li>
            </ul>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Access & Subscription Management
            </Typography>
            <ul>
              <li>
                <Typography component="p">
                  OAuth2.0 & OpenID Connect-based authentication
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  Users can access and manage their API keys, user data, and
                  billing settings via the AuthSafe dashboard.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  Downgrading to the free plan can be done at any time without
                  additional charges.
                </Typography>
              </li>
            </ul>
          </Box>

          <Box>
            <Typography component="p">
              For account issues, contact support@authsafe.com.
            </Typography>
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default Shipping;
