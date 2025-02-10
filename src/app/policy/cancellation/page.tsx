import { Box, Container, Divider, Typography } from '@mui/material';
import { FC } from 'react';

const Shipping: FC = () => {
  return (
    <main>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography component="h1" variant="h3" gutterBottom>
          Cancellation and Refund Policy
        </Typography>
        <Divider />
        <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box>
            <Typography component="p">
              At AuthSafe, we ensure a flexible and transparent cancellation and
              refund policy.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Subscription Cancellation & Downgrade
            </Typography>
            <Typography component="p">
              We issue refunds only in the following cases:
            </Typography>
            <ul>
              <li>
                <Typography component="p">
                  Duplicate payments due to billing errors.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  Service disruptions caused by AuthSafe lasting more than 24
                  hours.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  Failed transactions where the payment was deducted but
                  services were not activated.
                </Typography>
              </li>
            </ul>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              No Refund for Partial Usage
            </Typography>
            <ul>
              <li>
                <Typography component="p">
                  We do not offer refunds for partial use of a billing cycle.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  Users who cancel their subscription can continue using premium
                  features until the billing period ends.
                </Typography>
              </li>
            </ul>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Refund Processing Time
            </Typography>
            <ul>
              <li>
                <Typography component="p">
                  Approved refunds will be processed within 5-7 business days
                  via Razorpay.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  Refunds will be issued to the original payment method used for
                  the transaction.
                </Typography>
              </li>
            </ul>
          </Box>

          <Box>
            <Typography component="p">
              For immediate assistance, contact support@authsafe.com.
            </Typography>
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default Shipping;
