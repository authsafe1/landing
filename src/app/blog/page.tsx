import { Header } from '@/components';
import { fetchBlogPosts } from '@/utils/blogHelper';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid2 as Grid,
  Paper,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import Link from 'next/link';
import { Fragment } from 'react';

const Blogs = async () => {
  const first3Blogs = await fetchBlogPosts(['sys.createdAt'], 0, 3);
  const blogs = await fetchBlogPosts();

  return (
    <Fragment>
      <Header />
      <main>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Box sx={{ mb: 2 }}>
            <Typography variant="h2" component="h1">
              Blog: News & Updates
            </Typography>
            <Typography color="textSecondary">
              Explore the latest in security, learn about our authentication
              solutions, and stay updated with AuthSafe&apos;s journey.
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Grid container spacing={2}>
              {first3Blogs &&
                first3Blogs.items.map(({ fields, sys }) => (
                  <Grid key={sys.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                      <CardActionArea
                        LinkComponent={Link}
                        href={`/blog/${fields.slug}`}
                        sx={{ height: '100%' }}
                      >
                        <CardMedia
                          component="img"
                          src={`https:${
                            (
                              fields.photo?.fields?.file as unknown as {
                                url: string;
                              }
                            )?.url
                          }`}
                          alt={fields.photo?.fields.title}
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Box>
          <Box sx={{ mt: 4, mb: 4 }}>
            <Divider />
          </Box>
          <Box>
            <Grid container spacing={2}>
              {blogs &&
                blogs.items.map(({ fields, sys }) => (
                  <Grid key={sys.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <Paper
                      variant="outlined"
                      sx={{
                        height: '100%',
                        backdropFilter: 'blur(16px) saturate(200%)',
                        WebkitBackdropFilter: 'blur(16px) saturate(200%)',
                        backgroundColor: 'rgba(177, 83, 254, 0.77)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.125)',
                      }}
                    >
                      <CardActionArea
                        LinkComponent={Link}
                        href={`/blog/${fields.slug}`}
                        sx={{ p: 2, height: '100%' }}
                      >
                        <Chip
                          label={dayjs(sys.createdAt).format('MMM DD, YYYY')}
                          variant="filled"
                          sx={{ backgroundColor: '#000 !important' }}
                        />
                        <Typography variant="h6" gutterBottom>
                          {fields.title}
                        </Typography>
                        <Typography variant="body2">
                          {fields.description}
                        </Typography>
                      </CardActionArea>
                    </Paper>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Container>
      </main>
    </Fragment>
  );
};

export default Blogs;
