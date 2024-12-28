import { BlogList } from '@/components';
import { fetchBlogPosts } from '@/utils/blogHelper';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Divider,
  Grid2 as Grid,
  Typography,
} from '@mui/material';
import Link from 'next/link';

const Blogs = async () => {
  const first3Blogs = await fetchBlogPosts(['-sys.updatedAt'], 0, 3);
  const blogs = await fetchBlogPosts(['-sys.updatedAt']);

  return (
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
                      sx={{
                        height: '100%',
                        transition:
                          'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          backgroundColor: 'rgba(0, 0, 0, 0.08)',
                        },
                      }}
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
                        sx={{
                          transition: 'opacity 0.6s ease',
                          '&:hover': {
                            opacity: 0.8,
                          },
                        }}
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
          <BlogList body={blogs?.items} total={blogs.total} />
        </Box>
      </Container>
    </main>
  );
};

export default Blogs;
