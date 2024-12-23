'use client';

import {
  Container,
  Divider,
  Grid2 as Grid,
  Link as MuiLink,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import { FC, Fragment } from 'react';
import AuthSafeIcon from '../icons/AuthSafeIcon';

const Footer: FC = () => {
  const theme = useTheme();
  return (
    <Fragment>
      <Divider sx={{ mb: 3 }} />
      <Container component="footer" sx={{ py: 5 }} id="footer">
        <Grid
          container
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
              gap: 4,
            },
          })}
        >
          <Grid sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AuthSafeIcon theme={theme.palette.mode} fontSize="large" />
            <Typography variant="h5" fontWeight="bold">
              AuthSafe
            </Typography>
          </Grid>
          <Grid container spacing={4}>
            <Grid>
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
                <MuiLink
                  color="text.secondary"
                  component={Link}
                  href="/pricing"
                >
                  Pricing
                </MuiLink>
                <MuiLink color="text.secondary" href="#faq">
                  FAQ
                </MuiLink>
              </Stack>
            </Grid>
            <Grid>
              <Stack spacing={1}>
                <Typography variant="body2" fontWeight="bold">
                  Company
                </Typography>
                <MuiLink component={Link} color="text.secondary" href="/about">
                  About
                </MuiLink>
                <MuiLink component={Link} color="text.secondary" href="/blog">
                  Blog
                </MuiLink>
                <MuiLink
                  component={Link}
                  color="text.secondary"
                  href="/contact"
                >
                  Contact
                </MuiLink>
              </Stack>
            </Grid>
            <Grid>
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
            </Grid>
            <Grid>
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
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 3, mb: 2 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          {`© ${new Date().getFullYear()} AuthSafe. All rights reserved.`}
        </Typography>
      </Container>
    </Fragment>
  );
};

export default Footer;
