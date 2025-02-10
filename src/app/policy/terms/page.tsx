import { Box, Container, Divider, Typography } from '@mui/material';
import { FC } from 'react';

const Terms: FC = () => {
  return (
    <main>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography component="h1" variant="h3" gutterBottom>
          Terms and Conditions
        </Typography>
        <Divider />
        <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Introduction
            </Typography>
            <Typography component="p" gutterBottom>
              Welcome to AuthSafe, an identity and access management (IAM)
              platform designed to secure applications and streamline
              authentication processes. By accessing or using our services, you
              agree to abide by these Terms and Conditions.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Acceptance of Terms
            </Typography>
            <Typography component="p">
              By using AuthSafe, you confirm that you have read, understood, and
              agree to these Terms. If you do not agree, please refrain from
              using our services.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Services Provided
            </Typography>
            <Typography component="p">
              AuthSafe offers authentication, authorization, and security APIs,
              including:
            </Typography>
            <ul>
              <li>
                <Typography component="p">
                  OAuth2.0 & OpenID Connect-based authentication
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  User management & role-based access control
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  API security & token-based authentication
                </Typography>
              </li>
            </ul>
            <Typography component="p">
              We may modify, suspend, or discontinue any part of our service at
              our discretion.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              User Responsibilities
            </Typography>
            <Typography component="p">To use AuthSafe, you must:</Typography>
            <ul>
              <li>
                <Typography component="p">
                  Provide accurate and complete information during registration.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  Maintain the confidentiality of your credentials.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  Not engage in fraudulent, illegal, or unauthorized activities
                  using our platform.
                </Typography>
              </li>
            </ul>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Payments, Subscriptions & Downgrades
            </Typography>
            <ul>
              <li>
                <Typography component="p">
                  AuthSafe offers both free and paid plans.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  Paid subscriptions are processed securely via Razorpay.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  Users can cancel their subscription anytime by downgrading to
                  the free version through their account settings.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  No refunds are provided for the current billing cycle upon
                  cancellation (see Refund Policy).
                </Typography>
              </li>
            </ul>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Intellectual Property
            </Typography>
            <Typography component="p">
              All content, trademarks, and software on AuthSafe are the
              exclusive property of AuthSafe Inc. Unauthorized use is
              prohibited.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Limitation of Liability
            </Typography>
            <Typography component="p">AuthSafe is not liable for:</Typography>
            <ul>
              <li>
                <Typography component="p">
                  Data breaches caused by user negligence.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  Data breaches caused by user negligence.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  Business losses resulting from service interruptions.
                </Typography>
              </li>
            </ul>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Termination & Suspension
            </Typography>
            <Typography component="p">
              We may suspend or terminate accounts that:
            </Typography>
            <ul>
              <li>
                <Typography component="p">
                  Violate our terms or engage in abuse.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  Use the platform for fraudulent purposes.
                </Typography>
              </li>
            </ul>
            <Typography component="p">
              For queries, contact us at support@authsafe.com.
            </Typography>
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default Terms;
