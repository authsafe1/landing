'use client';

import { TypeBlogSkeleton } from '@/utils/blogHelper';
import { Search } from '@mui/icons-material';
import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Grid2 as Grid,
  InputAdornment,
  OutlinedInput,
  Pagination,
  Typography,
} from '@mui/material';
import { Entry } from 'contentful';
import dayjs from 'dayjs';
import Link from 'next/link';
import { ChangeEvent, ChangeEventHandler, FC, useMemo, useState } from 'react';

const BlogList: FC<{
  body: Entry<TypeBlogSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>[];
  total: number;
}> = ({ body, total }) => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const itemsPerPage = 6;

  const handlePaginationChange = (
    event: ChangeEvent<unknown>,
    page: number,
  ) => {
    setPage(page);
  };

  const handleQueryChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };

  const filteredBlogs = useMemo(() => {
    return body.filter((blog) =>
      blog.fields.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, body]);

  const paginatedBlogs = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredBlogs.slice(startIndex, endIndex);
  }, [filteredBlogs, page]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredBlogs.length / itemsPerPage);
  }, [filteredBlogs]);

  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, md: 6 }}>
        <OutlinedInput
          placeholder="Search blogs"
          onChange={handleQueryChange}
          endAdornment={
            <InputAdornment position="end">
              <Search color="primary" />
            </InputAdornment>
          }
          fullWidth
        />
      </Grid>
      <Grid container spacing={2}>
        {paginatedBlogs.map(({ fields, sys }) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={sys.id}>
            <Card variant="outlined" elevation={2} sx={{ height: '100%' }}>
              <CardActionArea
                LinkComponent={Link}
                href={`/blog/${fields.slug}`}
                sx={{ p: 2, height: '100%' }}
              >
                <Chip
                  label={dayjs(sys.updatedAt).format('MMM DD, YYYY')}
                  variant="filled"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {fields.title}
                  </Typography>
                  <Typography variant="body2">{fields.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      {total >= itemsPerPage ? (
        <Grid width="100%" display="flex" justifyContent="center">
          <Pagination
            color="primary"
            page={page}
            count={totalPages}
            onChange={handlePaginationChange}
          />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default BlogList;
