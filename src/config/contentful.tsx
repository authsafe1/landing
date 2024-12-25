import { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import {
  Divider,
  Grid2 as Grid,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { createClient as cfCreateClient } from 'contentful';
import Image from 'next/image';

const previewClient = cfCreateClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN as string,
  host: 'preview.contentful.com',
});

const productionClient = cfCreateClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN as string,
});

function createClient(isPreview: boolean) {
  if (isPreview) {
    return previewClient;
  } else {
    return productionClient;
  }
}

export const renderOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <Typography fontWeight="bold" component="span">
        {text}
      </Typography>
    ),
    [MARKS.ITALIC]: (text) => (
      <Typography fontStyle="italic" component="span">
        {text}
      </Typography>
    ),
    [MARKS.UNDERLINE]: (text) => (
      <Typography sx={{ textDecoration: 'underline' }} component="span">
        {text}
      </Typography>
    ),
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <Grid>
        <Typography component="span" variant="h1" sx={{ m: 2 }}>
          {children}
        </Typography>
      </Grid>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <Grid>
        <Typography component="span" variant="h2" sx={{ m: 2 }}>
          {children}
        </Typography>
      </Grid>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <Grid>
        <Typography component="span" variant="h3" sx={{ m: 2 }}>
          {children}
        </Typography>
      </Grid>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <Grid>
        <Typography component="span" variant="h4" sx={{ m: 2 }}>
          {children}
        </Typography>
      </Grid>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <Grid>
        <Typography component="span" variant="h5" sx={{ m: 2 }}>
          {children}
        </Typography>
      </Grid>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <Grid>
        <Typography component="span" variant="h6" sx={{ m: 2 }}>
          {children}
        </Typography>
      </Grid>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Grid>
        <Typography component="span">{children}</Typography>
      </Grid>
    ),
    [BLOCKS.HR]: () => (
      <Grid>
        <Divider />
      </Grid>
    ),
    [BLOCKS.TABLE]: (node, children) => (
      <Grid>
        <Table size="small">
          <TableBody>{children}</TableBody>
        </Table>
      </Grid>
    ),
    [BLOCKS.TABLE_ROW]: (node, children) => <TableRow>{children}</TableRow>,
    [BLOCKS.TABLE_CELL]: (node, children) => <TableCell>{children}</TableCell>,
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
      <TableCell
        sx={{
          backgroundColor: 'primary.main',
          color: 'black',
          fontWeight: 'bold',
          fontSize: 15,
        }}
        variant="head"
      >
        {children}
      </TableCell>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <List
        dense
        component="ol"
        sx={{
          listStyleType: 'decimal',
          pl: 4,
          '& .MuiListItem-root': {
            display: 'list-item',
          },
        }}
      >
        {children}
      </List>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <List
        dense
        component="ul"
        sx={{
          listStyleType: 'disc',
          pl: 4,
          '& .MuiListItem-root': {
            display: 'list-item',
          },
        }}
      >
        {children}
      </List>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <ListItem>
        <ListItemText primary={children} />
      </ListItem>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <Grid
        width="100%"
        sx={{
          position: 'relative',
          height: 400,
        }}
      >
        <Image
          src={`https:${node.data?.target?.fields?.file?.url}`}
          alt={node.data?.target?.fields?.title}
          fill
        />
      </Grid>
    ),
  },
};

export default createClient;
