import { CodeViewer } from '@/components';
import { fetchAllBlogSlugs, fetchBlogPost } from '@/utils/blogHelper';
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { Metadata } from 'next';
import Link from 'next/link';

const renderOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <Typography component="span" fontWeight="bold">
        {text}
      </Typography>
    ),
    [MARKS.ITALIC]: (text) => (
      <Typography component="span" fontStyle="italic">
        {text}
      </Typography>
    ),
    [MARKS.UNDERLINE]: (text) => (
      <Typography component="span" sx={{ textDecoration: 'underline' }}>
        {text}
      </Typography>
    ),
    [MARKS.CODE]: (text) => <CodeViewer code={text?.toString() as string} />,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <Typography
        component="h1"
        variant="h2"
        gutterBottom
        sx={{
          mt: 4,
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <Typography
        component="h2"
        variant="h3"
        gutterBottom
        sx={{
          mt: 3,
          fontWeight: 600,
          lineHeight: 1.3,
        }}
      >
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <Typography
        component="h3"
        variant="h4"
        gutterBottom
        sx={{
          mt: 2.5,
          fontWeight: 500,
          lineHeight: 1.4,
        }}
      >
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <Typography
        component="h4"
        variant="h5"
        gutterBottom
        sx={{
          mt: 2,
          fontWeight: 500,
        }}
      >
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <Typography
        component="h5"
        variant="h6"
        gutterBottom
        sx={{
          mt: 1.5,
          fontWeight: 400,
        }}
      >
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <Typography
        component="h6"
        variant="subtitle1"
        gutterBottom
        sx={{
          mt: 1,
          fontWeight: 400,
        }}
      >
        {children}
      </Typography>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Typography
        component="p"
        variant="body1"
        sx={{
          lineHeight: 1.6,
          mb: 2,
          color: 'text.secondary',
        }}
      >
        {children}
      </Typography>
    ),
    [BLOCKS.HR]: () => (
      <Divider
        sx={{
          my: 3,
          borderColor: 'divider',
        }}
      />
    ),
    [BLOCKS.TABLE]: (node, children) => (
      <TableContainer
        component="div"
        sx={{
          my: 3,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
        }}
      >
        <Table>
          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
    ),
    [BLOCKS.TABLE_ROW]: (node, children) => <TableRow>{children}</TableRow>,
    [BLOCKS.TABLE_CELL]: (node, children) => (
      <TableCell
        sx={{
          px: 2,
          py: 1,
          border: '1px solid',
          borderColor: 'divider',
          fontSize: '0.875rem',
        }}
      >
        {children}
      </TableCell>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
      <TableCell
        sx={{
          px: 2,
          py: 1,
          backgroundColor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          fontWeight: 700,
          fontSize: 'large',
        }}
      >
        {children}
      </TableCell>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <List
        component="ol"
        sx={{
          listStyleType: 'decimal',
          pl: 4,
          my: 2,
        }}
      >
        {children}
      </List>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <List
        component="ul"
        sx={{
          listStyleType: 'disc',
          pl: 4,
          my: 2,
        }}
      >
        {children}
      </List>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <ListItem
        sx={{
          display: 'list-item',
          pl: 0,
          py: 0.5,
        }}
      >
        {children}
      </ListItem>
    ),
  },
};

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
    <main>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Box sx={{ mb: 2 }}>
          <Button LinkComponent={Link} href="/blog" startIcon={<ArrowLeft />}>
            Back
          </Button>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Last updated on - {` `}
            <strong>{dayjs(blog.sys.updatedAt).format('MMM DD, YYYY')}</strong>
          </Typography>
          <Typography variant="h3" component="h1" fontWeight={700}>
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
            loading="eager"
            alt={blog.fields.photo?.fields.description}
            sx={{ width: '100%', height: 'auto' }}
          />
        </Box>
        <Box sx={{ mb: 4 }}>
          {documentToReactComponents(blog.fields.content, renderOptions)}
        </Box>
        <Box
          sx={{
            background: 'linear-gradient(135deg, #14082f, #292f6e)',
            padding: '60px',
            borderRadius: '20px',
            position: 'relative',
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography variant="h3" sx={{ color: 'common.white' }}>
              Get the best out of AuthSafe
            </Typography>
          </Box>
          <Button
            variant="contained"
            LinkComponent={Link}
            href="/docs"
            endIcon={<ArrowRight />}
          >
            Explore Docs
          </Button>
        </Box>
      </Container>
    </main>
  );
};

export default Blog;
