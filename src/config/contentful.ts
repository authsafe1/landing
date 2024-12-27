import { createClient as cfCreateClient } from 'contentful';

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

export default createClient;
