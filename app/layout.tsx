import type {Metadata} from 'next';
import './globals.css'; // Global styles
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dahisar Realty Pro | Real Estate Agency in Mumbai',
  description: 'Find your dream home or commercial space in Dahisar, Mumbai with our expert real estate services.',
  openGraph: {
    title: 'Dahisar Realty Pro | Real Estate Agency in Mumbai',
    description: 'Find your dream home or commercial space in Dahisar, Mumbai with our expert real estate services.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dahisar Realty Pro | Real Estate Agency in Mumbai',
    description: 'Find your dream home or commercial space in Dahisar, Mumbai with our expert real estate services.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ZS7Ji6uzAvCK4ZWV-kfNVwciVcpp0w9o9JPaGPKRc4Q" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
