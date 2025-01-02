import { fetchAllBlogSlugs } from '@/utils/blogHelper';
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await fetchAllBlogSlugs();
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact/sales`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact/engineering`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: new Date(),
      priority: 1,
    },
    ...slugs.map(({ slug }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/policy/privacy`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/policy/cookie`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/policy/compliance`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
