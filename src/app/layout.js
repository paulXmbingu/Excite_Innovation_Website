import localFont from "next/font/local";
import Head from "next/head";
import HomePage from "./Pages/Home/Home";

// Define local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define inline styles
const bodyStyle = {
  margin: 0,
  padding: 0,
  display: 'flex',
  minHeight: '100vh',
  boxSizing: 'border-box',
};

// Metadata for basic SEO
export const metadata = {
  title: "Excite! Innovation Company",
  description: "Premier Digital Product Innovation Company that Specializes in UIUX Research, Design & Software Engineering",
  keywords: "UIUX, Digital Innovation, Product Design, Software Engineering, Research, Web Development, Mobile Apps, Prototyping",
  author: "Excite! Innovation Company",
  robots: "index, follow",
  language: "en-US",
  charSet: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Excite! Innovation Company</title>
        <meta name="description" content="Excite! is a premier digital product innovation company specializing in UIUX research, design, and software engineering." />
        <meta name="keywords" content="Digital Product Innovation, UIUX Research, Design, Software Engineering" />
        <meta property="og:title" content="Excite! Innovation Company" />
        <meta property="og:description" content="Excite! is a premier digital product innovation company specializing in UIUX research, design, and software engineering." />
        <meta property="og:image" content="https://res.cloudinary.com/excit3/image/upload/v1725624528/Excite%20Company%20Website/File_Cover_kleht5.jpg" />
        <meta property="og:url" content="https://excite.company/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Excite! Innovation Company" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Excite! Innovation Company" />
        <meta name="twitter:description" content="Excite! is a premier digital product innovation company specializing in UIUX research, design, and software engineering." />
        <meta name="twitter:image" content="https://res.cloudinary.com/excit3/image/upload/v1725624528/Excite%20Company%20Website/File_Cover_kleht5.jpg" />
        <meta name="twitter:site" content="@ExciteCompany" />
        <meta name="twitter:creator" content="@ExciteCompany" />
        <meta property="fb:app_id" content="Excite.Company" />
        <link rel="canonical" href="https://excite.company/" />
      </Head>
      <body style={bodyStyle} className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <HomePage />
      </body>
    </html>
  );
}
