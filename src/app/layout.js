import localFont from "next/font/local";
import "./globals.css";

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
