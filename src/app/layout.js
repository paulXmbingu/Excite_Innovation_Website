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
  openGraph: {
    image: "https://res.cloudinary.com/excit3/image/upload/v1725624528/Excite%20Company%20Website/File_Cover_kleht5.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content={metadata.openGraph.image} />
      </Head>
      <body style={bodyStyle} className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <HomePage />
      </body>
    </html>
  );
}
