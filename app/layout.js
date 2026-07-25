import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/site/theme-provider';

export const metadata = {
  metadataBase: new URL('https://mimag.tech'),
  title: {
    default: 'MIMAG Technologies — Enterprise Technology Consulting',
    template: '%s · MIMAG Technologies',
  },
  description:
    'MIMAG Technologies partners with global enterprises on cloud modernization, AI adoption, cybersecurity, and digital transformation. Strategy through execution.',
  keywords: [
    'enterprise technology consulting',
    'digital transformation',
    'cloud modernization',
    'AI adoption',
    'cybersecurity',
    'MIMAG Technologies',
  ],
  openGraph: {
    title: 'MIMAG Technologies — Enterprise Technology Consulting',
    description:
      'Strategy through execution for the world’s most demanding enterprises.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MIMAG Technologies',
    description:
      'Enterprise technology consulting. Cloud, AI, cybersecurity, transformation.',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
