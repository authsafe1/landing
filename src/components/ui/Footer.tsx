import constants from '@/config/constants';
import { Email, GitHub } from '@mui/icons-material';
import {
  Box,
  Container,
  Divider,
  Grid2 as Grid,
  IconButton,
  Link as MuiLink,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
import AuthSafeIcon from '../icons/AuthSafeIcon';

const Footer: FC = () => {
  return (
    <Box component="footer" id="footer">
      <Divider sx={{ mb: 3 }} />
      <Container sx={{ py: 5 }}>
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          rowSpacing={2}
        >
          <Grid
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            aria-label="AuthSafe"
          >
            <AuthSafeIcon fontSize="large" />
            <Typography variant="h5" component="span" fontWeight="bold">
              AuthSafe
            </Typography>
          </Grid>
          <Grid
            container
            spacing={4}
            component="nav"
            aria-label="Footer Navigation"
          >
            <Grid component="section" aria-labelledby="Product">
              <Stack spacing={1}>
                <Typography variant="body2" fontWeight="bold">
                  Product
                </Typography>
                <MuiLink
                  color="text.secondary"
                  component={Link}
                  href="/#highlight"
                >
                  Highlight
                </MuiLink>
                <MuiLink
                  color="text.secondary"
                  component={Link}
                  href="/#feature"
                >
                  Feature
                </MuiLink>
                <MuiLink
                  color="text.secondary"
                  component={Link}
                  href="/#integration"
                >
                  Integration
                </MuiLink>
                <MuiLink
                  color="text.secondary"
                  component={Link}
                  href="/pricing"
                >
                  Pricing
                </MuiLink>
                <MuiLink color="text.secondary" component={Link} href="/#faq">
                  FAQ
                </MuiLink>
              </Stack>
            </Grid>
            <Grid component="section" aria-labelledby="Company">
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
                <MuiLink color="text.secondary" href="/sitemap.xml">
                  Sitemap
                </MuiLink>
              </Stack>
            </Grid>
            <Grid component="section" aria-labelledby="Developer">
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
                <MuiLink color="text.secondary" component={Link} href="/docs">
                  Documentation
                </MuiLink>
              </Stack>
            </Grid>
            <Grid component="section" aria-labelledby="Legal">
              <Stack spacing={1}>
                <Typography variant="body2" fontWeight="bold">
                  Legal
                </Typography>
                <MuiLink
                  component={Link}
                  color="text.secondary"
                  href="/policy/terms"
                >
                  Terms & Conditions
                </MuiLink>
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
                  href="/policy/compliance"
                >
                  Compliance
                </MuiLink>
                <MuiLink
                  component={Link}
                  color="text.secondary"
                  href="/policy/shipping"
                >
                  Shipping
                </MuiLink>
                <MuiLink
                  component={Link}
                  color="text.secondary"
                  href="/policy/cancellation"
                >
                  Cancellation
                </MuiLink>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 3, mb: 2 }} />
        <Grid container component="section" width="100%" alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              component="small"
            >
              {`© ${new Date().getFullYear()} AuthSafe. All rights reserved.`}
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'flex-start', md: 'flex-end' },
            }}
          >
            <Stack spacing={2} direction="row">
              <IconButton href={constants.mailURL}>
                <Email />
              </IconButton>
              <IconButton href={constants.githubURL}>
                <GitHub />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
