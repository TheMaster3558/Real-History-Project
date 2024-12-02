import "./globals.css";


export const metadata = {
  title: "Louvre Website",
  description: "Created by Kaushal Dabbiru",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
      {children}
      </body>
      </html>
  );
}
