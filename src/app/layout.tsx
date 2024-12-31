import { Footer, Header } from '@/components';
import { theme } from '@/config/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import { ReactNode } from 'react';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'AuthSafe | Secure Tomorrow, Today',
  description:
    'Integrate secure authentication to your app in minutes and streamline user onboarding, customized for fast-growing businesses, devs, and agile teams.',
  icons: [
    {
      url: '/icons/favicon.svg',
      rel: 'icon',
      type: 'image/svg+xml',
      sizes: 'any',
    },
    {
      url: '/icons/light/favicon.ico',
      rel: 'icon',
      type: 'image/x-icon',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/icons/light/apple-touch-icon.png',
      rel: 'apple-touch-icon',
      sizes: '180x180',
      type: 'image/png',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/icons/light/favicon-32x32.png',
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/icons/light/favicon-16x16.png',
      rel: 'icon',
      sizes: '16x16',
      type: 'image/png',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/icons/dark/favicon.ico',
      rel: 'icon',
      type: 'image/x-icon',
      media: '(prefers-color-scheme: dark)',
    },
    {
      url: '/icons/dark/apple-touch-icon.png',
      rel: 'apple-touch-icon',
      sizes: '180x180',
      type: 'image/png',
      media: '(prefers-color-scheme: dark)',
    },
    {
      url: '/icons/dark/favicon-32x32.png',
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png',
      media: '(prefers-color-scheme: dark)',
    },
    {
      url: '/icons/dark/favicon-16x16.png',
      rel: 'icon',
      sizes: '16x16',
      type: 'image/png',
      media: '(prefers-color-scheme: dark)',
    },
  ],
  openGraph: {
    type: 'website',
    url: 'https://authsafe.in',
    title: 'AuthSafe | Secure Tomorrow, Today',
    description:
      'Integrate secure authentication to your app in minutes and streamline user onboarding, customized for fast-growing businesses, devs, and agile teams.',
    siteName: 'AuthSafe',
    locale: 'en_US',
    images: {
      url: '/images/opengraph.jpg',
      height: '630',
      width: '1200',
      type: 'image/jpeg',
      alt: 'AuthSafe social logo',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AuthSafe | Secure Tomorrow, Today',
    description:
      'Integrate secure authentication to your app in minutes and streamline user onboarding, customized for fast-growing businesses, devs, and agile teams.',
    images: {
      url: '/images/opengraph.jpg',
      height: '630',
      width: '1200',
      type: 'image/jpeg',
      alt: 'AuthSafe twitter logo',
    },
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable} suppressHydrationWarning>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
