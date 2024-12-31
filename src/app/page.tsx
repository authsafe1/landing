'use client';

import {
  AuthSafeIcon,
  BackgroundWrapper,
  CodePreview,
  FAQ,
  IconWrapper,
} from '@/components';
import constants from '@/config/constants';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid2 as Grid,
  InputBase,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';

const Homepage = () => {
  return (
    <main>
      <Container component="section" maxWidth={false}>
        <BackgroundWrapper id="highlight">
          <Grid container rowSpacing={6} p={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <AuthSafeIcon sx={{ fontSize: 96 }} />
              </Box>
              <Typography
                component="h1"
                sx={(theme) => ({
                  fontWeight: 'bold',
                  mt: 2,
                  fontSize: theme.typography.h2.fontSize,
                  [theme.breakpoints.down('md')]: {
                    fontSize: theme.typography.h3.fontSize,
                  },
                })}
              >
                {`The Future of Authentication, `}
                <Typography
                  component="span"
                  sx={(theme) => ({
                    background:
                      'linear-gradient(165deg, rgba(11,246,228,1) 30%, rgba(195,130,255,1) 76%)',
                    filter: `progid:DXImageTransform.Microsoft.gradient(startColorstr="#0bf6e4",endColorstr="#c382ff",GradientType=1)`,
                    backgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: theme.typography.h2.fontSize,
                    [theme.breakpoints.down('md')]: {
                      fontSize: theme.typography.h3.fontSize,
                    },
                  })}
                >
                  Today
                </Typography>
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="primary"
                sx={{ mt: 2 }}
              >
                Secure, Simple, Seamless.
              </Typography>
              <Typography
                sx={(theme) => ({
                  mx: 'auto',
                  mt: 3,
                  maxWidth: 'sm',
                  ...theme.applyStyles('dark', {
                    color: 'text.secondary',
                  }),
                  fontSize: 'large',
                  [theme.breakpoints.down('md')]: {
                    fontSize: 'medium',
                  },
                })}
                component="p"
              >
                Empower applications with seamless user authentication and
                robust security. From single sign-on to fine-grained
                permissions, AuthSafe prioritizes convenience without
                compromising privacy. Protect your resources, enhance user
                experiences, and let your developers focus on what matters.
              </Typography>
              <Box
                component="form"
                action={(formData) => {
                  const email = formData.get('email');
                  window.location.replace(
                    `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/auth/register?email=${email}`,
                  );
                }}
                sx={(theme) => ({
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  mt: 5,
                  [theme.breakpoints.up('md')]: {
                    display: 'none',
                  },
                })}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 1,
                    borderRadius: 2,
                    minWidth: 300,
                  }}
                >
                  <InputBase
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Your work email"
                    fullWidth
                  />
                </Paper>
                <Button type="submit" variant="contained" fullWidth>
                  Get started
                </Button>
              </Box>
              <Box
                sx={(theme) => ({
                  display: 'inline-flex',
                  gap: 2,
                  mt: 5,
                  [theme.breakpoints.down('md')]: {
                    display: 'none',
                  },
                })}
              >
                <Paper
                  component="form"
                  action={(formData) => {
                    const email = formData.get('email');
                    window.location.replace(
                      `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/auth/register?email=${email}`,
                    );
                  }}
                  variant="outlined"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2,
                    borderRadius: 2,
                    minWidth: 300,
                  }}
                >
                  <InputBase
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Your work email"
                  />
                  <Button type="submit" variant="contained">
                    Get started
                  </Button>
                </Paper>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="/images/dashboard-preview.png"
                alt="AuthSafe dashboard preview"
                loading="eager"
                sx={{
                  width: {
                    xs: '500px',
                    md: '600px',
                    xl: '750px',
                  },
                  height: 'auto',
                }}
              />
            </Grid>
          </Grid>
        </BackgroundWrapper>
      </Container>

      <Container component="section" sx={{ py: 8 }} id="feature">
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 'bold', textAlign: 'center', mb: 5 }}
        >
          Why Choose AuthSafe?
        </Typography>
        <Grid container spacing={4}>
          {constants.features.map(({ Icon, header, description }, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, md: 4 }}
              textAlign="center"
              component="article"
            >
              <Stack spacing={2} alignItems="center">
                <IconWrapper>
                  <Icon fontSize="large" />
                </IconWrapper>
                <Typography variant="h6" component="h3" fontWeight="bold">
                  {header}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  {description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider />

      <Container component="section" sx={{ py: 8 }} id="implementation">
        <Paper>
          <Grid container width="100%" justifyContent="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                component="h2"
                fontWeight={500}
                gutterBottom
                sx={(theme) => ({
                  fontSize: theme.typography.h2.fontSize,
                  [theme.breakpoints.down('md')]: {
                    fontSize: theme.typography.h4.fontSize,
                  },
                })}
              >
                Secure Your Application with AuthSafe
              </Typography>
              <Typography
                gutterBottom
                component="p"
                sx={(theme) => ({
                  fontSize: 'large',
                  [theme.breakpoints.down('md')]: {
                    fontSize: 'medium',
                  },
                })}
              >
                OAuth 2.0 and OpenID Connect provide powerful frameworks to
                protect your applications by enabling secure, scalable
                authentication and authorization. They help ensure trust and
                user satisfaction while adhering to the highest security
                standards.
              </Typography>
              <Box
                component="img"
                src={'/images/flow-light.svg'}
                alt="OAuth 2.0 flow diagram"
                loading="lazy"
                sx={(theme) => ({
                  width: '100%',
                  height: 'auto',
                  [theme.breakpoints.up('md')]: {
                    display: 'none',
                  },
                  ...theme.applyStyles('dark', {
                    display: 'none',
                  }),
                })}
              />
              <Box
                component="img"
                src={'/images/flow-dark.svg'}
                alt="OAuth 2.0 flow diagram"
                loading="lazy"
                sx={(theme) => ({
                  width: '100%',
                  height: 'auto',
                  [theme.breakpoints.up('md')]: {
                    display: 'none',
                  },
                  ...theme.applyStyles('light', {
                    display: 'none',
                  }),
                })}
              />
              <ul>
                <li>
                  <strong>Universal Login:</strong> Enable a seamless user login
                  experience across web, mobile, and enterprise platforms.
                </li>
                <li>
                  <strong>Single Sign-On (SSO):</strong> Reduce password fatigue
                  by allowing users to authenticate once and access multiple
                  applications securely.
                </li>
                <li>
                  <strong>Data Protection:</strong> Safeguard sensitive user
                  information with tokenized access and end-to-end encryption.
                </li>
                <li>
                  <strong>Ease of Integration:</strong> Compatible with popular
                  frameworks, making implementation quick and
                  developer-friendly.
                </li>
                <li>
                  <strong>Scalability:</strong> Built to handle growing user
                  bases without compromising performance.
                </li>
              </ul>

              <Button
                size="large"
                variant="contained"
                sx={{ mt: 4 }}
                LinkComponent={Link}
                href="/contact"
              >
                Contact Us
              </Button>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              display="flex"
              textAlign="center"
              alignItems="center"
              sx={(theme) => ({
                mt: 0,
                [theme.breakpoints.down('md')]: {
                  mt: 4,
                },
              })}
            >
              <Box
                component="img"
                src={'/images/flow-light.svg'}
                alt="OAuth 2.0 flow diagram"
                loading="lazy"
                sx={(theme) => ({
                  width: '100%',
                  height: 'auto',
                  [theme.breakpoints.down('md')]: {
                    display: 'none',
                  },
                  ...theme.applyStyles('dark', {
                    display: 'none',
                  }),
                })}
              />
              <Box
                component="img"
                src={'/images/flow-dark.svg'}
                alt="OAuth 2.0 flow diagram"
                loading="lazy"
                sx={(theme) => ({
                  width: '100%',
                  height: 'auto',
                  [theme.breakpoints.down('md')]: {
                    display: 'none',
                  },
                  ...theme.applyStyles('light', {
                    display: 'none',
                  }),
                })}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <Divider />

      <Container component="section" sx={{ py: 8 }} id="integration">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <CodePreview />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              component="h2"
              fontWeight={500}
              gutterBottom
              sx={(theme) => ({
                fontSize: theme.typography.h2.fontSize,
                [theme.breakpoints.down('md')]: {
                  fontSize: theme.typography.h4.fontSize,
                },
              })}
            >
              Seamless Integration for Your Applications
            </Typography>
            <Typography
              gutterBottom
              sx={(theme) => ({
                fontSize: 'large',
                [theme.breakpoints.down('md')]: {
                  fontSize: 'medium',
                },
              })}
              component="p"
            >
              Simplify secure user authentication in your application with OAuth
              2.0 and OpenID Connect, ensuring reliable logins and Single
              Sign-On (SSO) across platforms like web, mobile, and enterprise.{' '}
            </Typography>
            <Typography
              gutterBottom
              sx={(theme) => ({
                fontSize: 'large',
                [theme.breakpoints.down('md')]: {
                  fontSize: 'medium',
                },
              })}
              component="h3"
            >
              Key benefits include:
            </Typography>
            <ul>
              <li>
                Seamless integration with diverse frameworks and tech stacks.
              </li>
              <li>Enhanced security for sensitive user data.</li>
              <li>Smooth cross-platform login experiences.</li>
              <li>Scalable solutions that prioritize speed and reliability.</li>
              <li>
                Comprehensive support for various authentication flows and use
                cases.
              </li>
              <li>
                Customizable options to match your application&apos;s specific
                requirements.
              </li>
              <li>
                Robust protection against common vulnerabilities like token
                misuse and session hijacking.
              </li>
              <li>
                Extensive developer documentation and support for faster
                implementation.
              </li>
            </ul>
            <Typography
              sx={(theme) => ({
                fontSize: 'large',
                [theme.breakpoints.down('md')]: {
                  fontSize: 'medium',
                },
              })}
            >
              Enable your team to deliver trusted, high-performance applications
              effortlessly.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container component="section" sx={{ py: 8 }} id="faq">
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 'bold', textAlign: 'center', mb: 5 }}
        >
          Frequently Asked Questions
        </Typography>
        <FAQ body={constants.faq} />
      </Container>
    </main>
  );
};

export default Homepage;
