import "./globals.css"
import Head from "next/head";
import HomePage from "./Pages/Home/Home";

const bodyStyle = {
  margin: 0,
  padding: 0,
  display: 'flex',
  minHeight: '100vh',
  boxSizing: 'border-box',
};

export const metadata = {
  title: "Excite! Innovation Company",
  description: "Premier Digital Product Innovation Company Specializing in UIUX Research, Design & Software Engineering",
  keywords: "UIUX, Digital Innovation, Product Design, Software Engineering, Research, Web Development, Mobile Apps, Prototyping",
  author: "Excite! Innovation Company",
  robots: "index, follow",
  language: "en-US",
  charSet: "UTF-8",
  openGraph: { image: "https://res.cloudinary.com/excit3/image/upload/v1725624528/Excite%20Company%20Website/File_Cover_kleht5.jpg" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:image" content={metadata.openGraph.image} />
      </Head>
      <body style={bodyStyle}>
        {children}
        <HomePage />
      </body>
    </html>
  );
}
