import "./globals.css";
import HomePage from "./Pages/Home/Home";
import { ReactNode } from 'react';

const bodyStyle: React.CSSProperties = {
  margin: 0,
  padding: 0,
  display: 'flex',
  minHeight: '100vh',
  boxSizing: 'border-box',
};

export const metadata = {
  title: 'Excite! Innovation Company',
  author: 'Excite! Innovation Company',
  description: 'Premier digital product innovation company specializing in UIUX research, design, and software engineering.',
  keywords: ['Digital Product Innovation', 'UIUX Research', 'Design', 'Software Engineering'],
  openGraph: {
    title: 'Excite! Innovation Company',
    description: 'Premier digital product innovation company specializing in UIUX research, design, and software engineering.',
    url: 'https://excite.company/',
    images: [
      {
        url: 'https://res.cloudinary.com/excit3/image/upload/v1727720945/Excite%20Company%20Website/File_Cover_kleht5.jpg',
        alt: 'Excite! Innovation Company',
      },
    ],
    siteName: 'Excite! Innovation Company',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excite! Innovation Company',
    description: 'Premier digital product innovation company specializing in UIUX research, design, and software engineering.',
    creator: '@ExciteCompany',
    site: '@ExciteCompany',
    images: ['https://res.cloudinary.com/excit3/image/upload/v1727720945/Excite%20Company%20Website/File_Cover_kleht5.jpg'],
  },
  alternates: {
    canonical: 'https://excite.company/',
  },
  // New fields added
  ia: {
    markup_url: 'https://excite.company/markup',
    markup_url_dev: 'https://dev.excite.company/markup',
    rules_url: 'https://excite.company/rules',
    rules_url_dev: 'https://dev.excite.company/rules',
  },
};

interface RootLayoutProps {
  children: ReactNode; // Add the type for children
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body style={bodyStyle}>
        {children}
        <HomePage />
      </body>
    </html>
  );
}
