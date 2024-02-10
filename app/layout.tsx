import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CRA to Next.js',
  description: 'Example of migrating CRA to Next.js as a SPA.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
