import "./globals.css";
import HomePage from "./Pages/Home/Home";

const bodyStyle = {
  margin: 0,
  padding: 0,
  display: 'flex',
  minHeight: '100vh',
  boxSizing: 'border-box',
};

// Metadata configuration
export const metadata = {
  title: 'Excite! Innovation Company',
  description: 'Excite! is a premier digital product innovation company specializing in UIUX research, design, and software engineering.',
  keywords: ['Digital Product Innovation', 'UIUX Research', 'Design', 'Software Engineering'],
  openGraph: {
    title: 'Excite! Innovation Company',
    description: 'Excite! is a premier digital product innovation company specializing in UIUX research, design, and software engineering.',
    url: 'https://excite.company/',
    images: [
      {
        url: 'https://res.cloudinary.com/excit3/image/upload/v1725624528/Excite%20Company%20Website/File_Cover_kleht5.jpg',
        alt: 'Excite! Innovation Company',
      },
    ],
    siteName: 'Excite! Innovation Company',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excite! Innovation Company',
    description: 'Excite! is a premier digital product innovation company specializing in UIUX research, design, and software engineering.',
    creator: '@ExciteCompany',
    site: '@ExciteCompany',
    images: ['https://res.cloudinary.com/excit3/image/upload/v1725624528/Excite%20Company%20Website/File_Cover_kleht5.jpg'],
  },
  alternates: {
    canonical: 'https://excite.company/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={bodyStyle}>
        {children}
        <HomePage />
      </body>
    </html>
  );
}
