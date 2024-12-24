import { Footer, Header } from '@/components';
import constants from '@/config/constants';
import { AutoAwesome, CheckCircleRounded } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Divider,
  Grid2 as Grid,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { Fragment } from 'react';

const Pricing = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Container sx={{ py: 8 }} id="pricing">
          <Box
            sx={{
              mb: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h2" component="h1">
              Pick your plan!
            </Typography>
            <Typography color="textSecondary">
              Find the right option for your needs—start free and upgrade as you
              go.
            </Typography>
          </Box>
          <Grid
            container
            spacing={3}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            {constants.pricingTiers.map((tier) => (
              <Grid key={tier.title}>
                <Card
                  variant={
                    tier.title === 'Professional' ? 'elevation' : 'outlined'
                  }
                  sx={[
                    {
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 4,
                    },
                    tier.title === 'Professional' && {
                      background:
                        'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
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
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2,
                          },
                          tier.title === 'Professional'
                            ? { color: 'grey.100' }
                            : { color: '' },
                        ]}
                      >
                        <Typography component="h3" variant="h6">
                          {tier.title}
                        </Typography>
                        {tier.title === 'Professional' && (
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
                          display: 'flex',
                          alignItems: 'baseline',
                        },
                        tier.title === 'Professional'
                          ? { color: 'grey.50' }
                          : { color: null },
                      ]}
                    >
                      <Typography component="span" variant="h3">
                        ₹{tier.totalPrice}
                      </Typography>
                      <Typography component="span">&nbsp; per month</Typography>
                    </Box>
                    <Divider
                      sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }}
                    />
                    {tier.description.map((line) => (
                      <Box
                        key={line}
                        sx={{
                          py: 1,
                          display: 'flex',
                          gap: 1.5,
                          alignItems: 'center',
                        }}
                      >
                        <CheckCircleRounded
                          sx={[
                            {
                              width: 20,
                            },
                            tier.title === 'Professional'
                              ? { color: 'primary.light' }
                              : { color: 'primary.main' },
                          ]}
                        />
                        <Typography
                          variant="subtitle2"
                          component={'span'}
                          sx={[
                            tier.title === 'Professional'
                              ? { color: 'grey.50' }
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
                      variant={tier.buttonVariant as 'outlined' | 'contained'}
                      color={tier.buttonColor as 'primary' | 'secondary'}
                      LinkComponent={Link}
                      href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}${tier.redirectUrl}`}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Divider />

        <Container sx={{ py: 8 }}>
          <Box
            sx={{
              background: 'linear-gradient(135deg, #14082f, #292f6e)',
              padding: '60px',
              borderRadius: '20px',
              position: 'relative',
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography variant="h3">Still have questions?</Typography>
              <Typography color="textSecondary">
                Let AuthSafe handle your authentication needs while you unlock
                your app&apos;s full potential.
              </Typography>
            </Box>
            <Button
              variant="contained"
              href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/auth/register`}
            >
              Start Now
            </Button>
          </Box>
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Pricing;
