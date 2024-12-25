import { Header } from '@/components';
import { fetchAllBlogSlugs, fetchBlogPost } from '@/utils/blogHelper';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ArrowLeft } from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { Metadata } from 'next';
import Link from 'next/link';
import { Fragment } from 'react';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return fetchAllBlogSlugs();
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchBlogPost(slug);

  return {
    title: blog.fields.title,
    description: blog.fields.description,
    openGraph: {
      images: `https:${
        (
          blog.fields.photo?.fields?.file as unknown as {
            url: string;
          }
        )?.url
      }`,
      title: blog.fields.photo?.fields.title,
      description: blog.fields.photo?.fields.description,
    },
    twitter: {
      images: `https:${
        (
          blog.fields.photo?.fields?.file as unknown as {
            url: string;
          }
        )?.url
      }`,
      title: blog.fields.photo?.fields.title,
      description: blog.fields.photo?.fields.description,
    },
  };
}

const Blog = async ({ params }: BlogPageProps) => {
  const { slug } = await params;
  const blog = await fetchBlogPost(slug);

  return (
    <Fragment>
      <Header />
      <main>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <Button LinkComponent={Link} href="/blog" startIcon={<ArrowLeft />}>
              Back to blog
            </Button>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2">
              {dayjs(blog.sys.createdAt).format('MMM DD, YYYY')}
            </Typography>
            <Typography variant="h2" component="h1">
              {blog.fields.title}
            </Typography>
            <Typography color="textSecondary">
              {blog.fields.description}
            </Typography>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Box
              component="img"
              src={`https:${
                (
                  blog.fields.photo?.fields?.file as unknown as {
                    url: string;
                  }
                )?.url
              }`}
              alt={blog.fields.photo?.fields.title}
              sx={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Box>{documentToReactComponents(blog.fields.content)}</Box>
        </Container>
      </main>
    </Fragment>
  );
};

export default Blog;
