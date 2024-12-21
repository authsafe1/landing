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
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Grid2 as Grid,
  InputBase,
  Link as MuiLink,
  Paper,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Link from 'next/link';

const Homepage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <main>
      <AppBar position="relative" color="transparent" elevation={0}>
        <Toolbar>
          <Box flex={1} />
          <Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button size="small">Register</Button>
              <Button variant="contained" size="small">
                Login
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Container component="section" maxWidth={false}>
        <BackgroundWrapper id="highlight">
          <Grid container rowSpacing={6} p={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <AuthSafeIcon sx={{ fontSize: 96 }} />
              </Box>
              <Typography
                variant={isMobile ? 'h3' : 'h2'}
                component="span"
                sx={{ fontWeight: 'bold', mt: 2 }}
              >
                {`The Future of Authentication, `}
                <Typography
                  variant={isMobile ? 'h3' : 'h2'}
                  component="span"
                  sx={{
                    background:
                      'linear-gradient(165deg, rgba(11,246,228,1) 30%, rgba(195,130,255,1) 76%)',
                    filter: `progid:DXImageTransform.Microsoft.gradient(startColorstr="#0bf6e4",endColorstr="#c382ff",GradientType=1)`,
                    backgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Today
                </Typography>
              </Typography>
              <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                Secure, Simple, Seamless.
              </Typography>
              <Typography
                fontSize={isMobile ? 'medium' : 'large'}
                color={
                  theme.palette.mode === 'dark' ? 'textSecondary' : undefined
                }
                sx={{ mx: 'auto', mt: 3, maxWidth: 'sm' }}
              >
                Empower applications with seamless user authentication and
                robust security. From single sign-on to fine-grained
                permissions, AuthSafe prioritizes convenience without
                compromising privacy. Protect your resources, enhance user
                experiences, and let your developers focus on what matters.
              </Typography>
              {isMobile ? (
                <Box
                  component="form"
                  action={(formData) => {
                    const email = formData.get('email');
                    window.location.replace(
                      `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/auth/register?email=${email}`,
                    );
                  }}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    mt: 5,
                  }}
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
              ) : (
                <Box sx={{ display: 'inline-flex', gap: 2, mt: 5 }}>
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
              )}
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                srcSet={`
            /images/dashboard-preview-1x.png 500w,
            /images/dashboard-preview-2x.png 800w,
            /images/dashboard-preview-4x.png 1200w
          `}
                sizes="
            (max-width: 400px) 200px,
            (max-width: 800px) 400px,
            (max-width: 1200px) 750px,
            1000px
          "
                alt="Dashboard Preview"
                loading="lazy"
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
            >
              <Stack spacing={2} alignItems="center">
                <IconWrapper>
                  <Icon fontSize="large" />
                </IconWrapper>
                <Typography variant="h6" fontWeight="bold">
                  {header}
                </Typography>
                <Typography variant="body2" color="textSecondary">
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
                variant={isMobile ? 'h4' : 'h2'}
                component="h3"
                fontWeight={500}
                gutterBottom
              >
                Secure Your Application with AuthSafe
              </Typography>
              <Typography fontSize={isMobile ? 'medium' : 'large'} gutterBottom>
                OAuth 2.0 and OpenID Connect provide powerful frameworks to
                protect your applications by enabling secure, scalable
                authentication and authorization. They help ensure trust and
                user satisfaction while adhering to the highest security
                standards.
              </Typography>
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
              <Button size="large" variant="contained" sx={{ mt: 4 }}>
                Contact Us
              </Button>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              textAlign="center"
              sx={{ mt: isMobile ? 4 : 0 }}
            >
              <Box
                component="img"
                src={
                  theme.palette.mode === 'dark'
                    ? '/images/flow-dark.svg'
                    : '/images/flow-light.svg'
                }
                alt="Dashboard Preview"
                loading="lazy"
                sx={{
                  width: {
                    xs: '500px',
                    sm: '400px',
                    xl: '750px',
                  },
                  height: 'auto',
                }}
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
              variant={isMobile ? 'h4' : 'h2'}
              component="h3"
              fontWeight={500}
              gutterBottom
            >
              Seamless Integration for Your Applications
            </Typography>
            <Typography fontSize={isMobile ? 'medium' : 'large'} gutterBottom>
              Simplify secure user authentication in your application with OAuth
              2.0 and OpenID Connect, ensuring reliable logins and Single
              Sign-On (SSO) across platforms like web, mobile, and enterprise.{' '}
            </Typography>
            <Typography fontSize={isMobile ? 'medium' : 'large'} gutterBottom>
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
            <Typography fontSize={isMobile ? 'medium' : 'large'}>
              Enable your team to deliver trusted, high-performance applications
              effortlessly.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* <Container sx={{ py: 8 }} id="pricing">
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}
        >
          Pricing
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{ alignItems: "center", justifyContent: "center", width: "100%" }}
        >
          {constants.pricingTiers.map(tier => (
            <Grid key={tier.title}>
              <Card
                variant={
                  tier.title === "Professional" ? "elevation" : "outlined"
                }
                sx={[
                  {
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  },
                  tier.title === "Professional" && {
                    background:
                      "radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))",
                    boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
                  },
                ]}
              >
                <CardHeader
                  title={
                    <Box
                      sx={[
                        {
                          mb: 1,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: 2,
                        },
                        tier.title === "Professional"
                          ? { color: "grey.100" }
                          : { color: "" },
                      ]}
                    >
                      <Typography component="h3" variant="h6">
                        {tier.title}
                      </Typography>
                      {tier.title === "Professional" && (
                        <Chip icon={<AutoAwesome />} label={tier.subheader} />
                      )}
                    </Box>
                  }
                  subheader={tier.subtitle}
                />
                <CardContent>
                  <Box
                    sx={[
                      {
                        display: "flex",
                        alignItems: "baseline",
                      },
                      tier.title === "Professional"
                        ? { color: "grey.50" }
                        : { color: null },
                    ]}
                  >
                    <Typography component="span" variant="h3">
                      ₹{tier.totalPrice}
                    </Typography>
                    <Typography component="span">&nbsp; per month</Typography>
                  </Box>
                  <Divider
                    sx={{ my: 2, opacity: 0.8, borderColor: "divider" }}
                  />
                  {tier.description.map(line => (
                    <Box
                      key={line}
                      sx={{
                        py: 1,
                        display: "flex",
                        gap: 1.5,
                        alignItems: "center",
                      }}
                    >
                      <CheckCircleRounded
                        sx={[
                          {
                            width: 20,
                          },
                          tier.title === "Professional"
                            ? { color: "primary.light" }
                            : { color: "primary.main" },
                        ]}
                      />
                      <Typography
                        variant="subtitle2"
                        component={"span"}
                        sx={[
                          tier.title === "Professional"
                            ? { color: "grey.50" }
                            : { color: null },
                        ]}
                      >
                        {line}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    onClick={() => navigate(tier.redirectUrl)}
                    variant={tier.buttonVariant as "outlined" | "contained"}
                    color={tier.buttonColor as "primary" | "secondary"}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider /> */}

      <Container component="section" sx={{ py: 8 }} id="faq">
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', textAlign: 'center', mb: 5 }}
        >
          Frequently Asked Questions
        </Typography>
        <FAQ body={constants.faq} />
      </Container>

      <Divider sx={{ mb: 3 }} />

      <Container component="footer" sx={{ py: 5 }} id="footer">
        <Box
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
              gap: 4,
            },
          })}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AuthSafeIcon theme={theme.palette.mode} fontSize="large" />
            <Typography variant="h5" fontWeight="bold">
              AuthSafe
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Stack spacing={1}>
              <Typography variant="body2" fontWeight="bold">
                Product
              </Typography>
              <MuiLink color="text.secondary" href="#highlight">
                Highlight
              </MuiLink>
              <MuiLink color="text.secondary" href="#feature">
                Feature
              </MuiLink>
              <MuiLink color="text.secondary" href="#integration">
                Integration
              </MuiLink>
              {/* <MuiLink color="text.secondary" href="#pricing">
                Pricing
              </MuiLink> */}
              <MuiLink color="text.secondary" href="#faq">
                FAQ
              </MuiLink>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="body2" fontWeight="bold">
                Developer
              </Typography>
              <MuiLink
                color="text.secondary"
                href={process.env.NEXT_PUBLIC_DASHBOARD_URL}
              >
                Dashboard
              </MuiLink>
              <MuiLink color="text.secondary" href="/docs">
                Documentation
              </MuiLink>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="body2" fontWeight="bold">
                Legal
              </Typography>
              <MuiLink
                component={Link}
                color="text.secondary"
                href="/policy/privacy"
              >
                Privacy
              </MuiLink>
              <MuiLink
                component={Link}
                color="text.secondary"
                href="/policy/cookie"
              >
                Cookies
              </MuiLink>
              <MuiLink
                component={Link}
                color="text.secondary"
                href="/policy/compliance"
              >
                Compliance
              </MuiLink>
            </Stack>
          </Box>
        </Box>
        <Divider sx={{ mt: 3, mb: 2 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          {`© ${new Date().getFullYear()} AuthSafe. All rights reserved.`}
        </Typography>
      </Container>
    </main>
  );
};

export default Homepage;
