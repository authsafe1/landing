import constants from '@/config/constants';
import { ArrowRight } from '@mui/icons-material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage = () => {
  return (
    <main>
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box component="section" sx={{ mb: 4 }}>
          <Box
            sx={{
              background: `
        linear-gradient(135deg, #14082f, #292f6e), 
        url(/images/aboutpage-hero.png)
      `,
              backgroundBlendMode: 'overlay',
              padding: '60px',
              textAlign: 'center',
              position: 'relative',
              borderRadius: '2.5rem',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography
                component="h1"
                variant="h2"
                gutterBottom
                sx={{ color: 'common.white' }}
              >
                Empowering Secure Digital Experiences, One Identity at a Time
              </Typography>
              <Typography component="p" sx={{ color: grey[200] }}>
                At AuthSafe, we are revolutionizing the way businesses handle
                authentication and authorization. With a focus on seamless
                integration, custom branding, and robust security, our identity
                solutions empower organizations to scale with confidence and
                trust.
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowRight />}
              href={process.env.NEXT_PUBLIC_DASHBOARD_URL}
            >
              Get started
            </Button>
          </Box>
        </Box>
        <Box component="section">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography component="h2" variant="h4" gutterBottom>
                How AuthSafe works?
              </Typography>
              <Typography>
                AuthSafe streamlines authentication and user management with a
                secure, customizable, and developer-friendly approach. Here’s
                how it works:
              </Typography>
              <ul>
                <li>
                  <strong>Seamless Integration:</strong> Easily integrate
                  AuthSafe into your application using our SDKs and APIs for
                  Node.js and other platforms.
                </li>
                <li>
                  <strong>Universal Login:</strong> Implement a single,
                  centralized login system for users across multiple
                  applications with OAuth 2.0 and OpenID Connect support.
                </li>
                <li>
                  <strong>Customizable User Journeys:</strong> Tailor login
                  flows, branding, and user experiences to match your product’s
                  identity.
                </li>
                <li>
                  <strong>Advanced Security Measures:</strong> Protect user data
                  with features like encryption, password hashing, and
                  multi-factor authentication.
                </li>
                <li>
                  <strong>Authorization Management:</strong> Manage roles,
                  permissions, and access policies with ease, ensuring
                  fine-grained control over your app’s resources.
                </li>
                <li>
                  <strong>Scalable Architecture:</strong> AuthSafe adapts to the
                  needs of growing applications, ensuring high availability and
                  reliability.
                </li>
              </ul>
              <Typography>
                From secure login to advanced access management, AuthSafe
                simplifies authentication while keeping user data protected.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Timeline position="alternate-reverse">
                {constants.aboutTimeline.map(({ title }, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot color="primary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>{title}</TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  );
};

export default AboutPage;
