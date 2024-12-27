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
  title: 'AuthSafe',
  description:
    'Enterprise-ready platform offering secure authentication with OAuth2, OIDC, and 2FA integration. Open-source and easy to deploy.',
  icons: [
    {
      url: '/favicon.ico',
      rel: 'icon',
      type: 'image/x-icon',
    },
    {
      url: '/icons/logo-128x128.png',
      sizes: '128x128',
      type: 'image/png',
    },
    {
      url: '/icons/logo-256x256.png',
      sizes: '256x256',
      type: 'image/png',
    },
    {
      url: '/icons/logo-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      url: '/icons/logo-maskable-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
  twitter: {
    title: 'AuthSafe - Secure Access Management',
    description:
      'Enterprise-ready platform offering secure authentication with OAuth2, OIDC, and 2FA integration. Open-source and easy to deploy.',
    images: {
      url: '/icons/logo-256x256.png',
      height: '256',
      width: '256',
      type: 'image/png',
      alt: 'AuthSafe X logo',
    },
  },
  openGraph: {
    type: 'website',
    title: 'AuthSafe - Secure Access Management',
    description:
      'Enterprise-ready platform offering secure authentication with OAuth2, OIDC, and 2FA integration. Open-source and easy to deploy.',
    images: {
      url: '/icons/logo-256x256.png',
      height: '256',
      width: '256',
      type: 'image/png',
      alt: 'AuthSafe social logo',
    },
  },
  manifest: '/site.webmanifest',
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
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
