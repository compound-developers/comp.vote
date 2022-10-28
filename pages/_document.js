import { Html, Head, Main, NextScript } from "next/document"; // Document imports

// Export with html lang for accessibility
export default function Document() {
  return (
    // Export page with explicit en lang
    <Html lang="en">
      {/* Inject head */}
      <Head />
      <body>
        {/* Inject body + scripts */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
