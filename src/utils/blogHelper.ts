import createClient from '@/config/contentful';
import { EntryFieldType, EntryOrderFilterWithFields } from 'contentful';

import type {
  AssetFields,
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeBlogFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  content: EntryFieldTypes.RichText;
  photo: EntryFieldTypes.EntryLink<TypeAsset>;
}

type TypeAsset = EntrySkeletonType<AssetFields, 'asset'>;

export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, 'blog'>;

export type TypeBlog<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeBlogSkeleton, Modifiers, Locales>;

export async function fetchAllBlogSlugs() {
  const client = createClient(false);
  try {
    const blogs =
      await client.withoutUnresolvableLinks.getEntries<TypeBlogSkeleton>({
        content_type: 'blog',
        select: ['fields.slug'],
      });
    return blogs.items.map((value) => ({
      slug: value.fields.slug,
      lastModifed: value.sys.updatedAt,
    }));
  } catch {
    throw new Error('RESOURCE_UNAVAILABLE');
  }
}

export async function fetchBlogPosts(
  orderBy?: EntryOrderFilterWithFields<
    Record<string, EntryFieldType<TypeBlogSkeleton>>
  >['order'],
  skip?: number,
  limit?: number,
) {
  const client = createClient(false);
  try {
    const blogPosts =
      await client.withoutUnresolvableLinks.getEntries<TypeBlogSkeleton>({
        content_type: 'blog',
        order: orderBy,
        skip: skip,
        limit: limit,
      });
    return blogPosts;
  } catch {
    throw new Error('RESOURCE_UNAVAILABLE');
  }
}

export async function fetchBlogPost(slug: string) {
  const client = createClient(false);
  try {
    const blogPost =
      await client.withoutUnresolvableLinks.getEntries<TypeBlogSkeleton>({
        content_type: 'blog',
        'fields.slug[match]': slug,
      });
    return blogPost.items[0];
  } catch {
    throw new Error(`RESOURCE_UNAVAILABLE`);
  }
}
