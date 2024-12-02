import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import "./globals.css";


export const metadata = {
    title: "Louvre Website",
    description: "Created by Kaushal Dabbiru",
};

export default function RootLayout(children: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined) {
  return (
      <html lang="en">
      <body>
      {children}
      </body>
      </html>
  );
}
