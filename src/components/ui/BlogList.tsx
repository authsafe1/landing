'use client';

import { TypeBlogSkeleton } from '@/utils/blogHelper';
import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Grid2 as Grid,
  Pagination,
  Typography,
} from '@mui/material';
import { Entry } from 'contentful';
import dayjs from 'dayjs';
import Link from 'next/link';
import { ChangeEvent, FC, useMemo, useState } from 'react';

const BlogList: FC<{
  body: Entry<TypeBlogSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>[];
  total: number;
}> = ({ body, total }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const handlePaginationChange = (
    event: ChangeEvent<unknown>,
    page: number,
  ) => {
    setPage(page);
  };

  const filteredBody = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return body.slice(startIndex, endIndex);
  }, [page, body]);

  return (
    <Grid container spacing={4}>
      <Grid container spacing={2}>
        {filteredBody.map(({ fields, sys }) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={sys.id}>
            <Card variant="outlined" elevation={2} sx={{ height: '100%' }}>
              <CardActionArea
                LinkComponent={Link}
                href={`/blog/${fields.slug}`}
                sx={{ p: 2, height: '100%' }}
              >
                <Chip
                  label={dayjs(sys.createdAt).format('MMM DD, YYYY')}
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
            count={Math.ceil(total / itemsPerPage)}
            onChange={handlePaginationChange}
          />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default BlogList;
