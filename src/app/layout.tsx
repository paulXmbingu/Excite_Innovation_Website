import './globals.css';
import HomePage from './Pages/Home/Home';
import { ReactNode } from 'react';

const bodyStyle: React.CSSProperties = {
  margin: 0,
  padding: 0,
  display: 'flex',
  minHeight: '100vh',
  boxSizing: 'border-box',
};

export const metadata = {
  title: 'Excite! Innovation',
  author: 'Excite! Innovation',
  description: 'Premier digital product innovation company specializing in UIUX research, design, and software engineering.',
  keywords: ['Digital Product Innovation', 'UIUX Research', 'Design', 'Software Engineering'],
  openGraph: {
    title: 'Excite! Innovation',
    description: 'Premier digital product innovation company specializing in UIUX research, design, and software engineering.',
    url: 'https://excite.company/',
    images: [
      {
        url: 'https://res.cloudinary.com/excit3/image/upload/v1727720945/Excite%20Company%20Website/File_Cover_kleht5.jpg',
        alt: 'Excite! Innovation',
      },
    ],
    siteName: 'Excite! Innovation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excite! Innovation',
    description: 'Premier digital product innovation company specializing in UIUX research, design, and software engineering.',
    creator: '@ExciteCompany',
    site: '@ExciteCompany',
    images: ['https://res.cloudinary.com/excit3/image/upload/v1727720945/Excite%20Company%20Website/File_Cover_kleht5.jpg'],
  },
  alternates: {
    canonical: 'https://excite.company/',
  },
  ia: {
    markup_url: 'https://excite.company/markup',
    markup_url_dev: 'https://dev.excite.company/markup',
    rules_url: 'https://excite.company/rules',
    rules_url_dev: 'https://dev.excite.company/rules',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6X7E86H9G7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6X7E86H9G7');
            `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PMK3LLRX');
            `,
          }}
        />
      </head>
      <body style={bodyStyle}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PMK3LLRX"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        
        {children}
        <HomePage />
      </body>
    </html>
  );
}
