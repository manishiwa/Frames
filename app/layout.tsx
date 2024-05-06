
import type { Metadata } from 'next';
import frameMetadata from "../components/sendFrameMetadata"

// Calculate frameMetadata here or get it from the context/provider


export const metadata: Metadata = {
  title: 'Mode is available now',
  description: 'A frame of all the metrics at launch',
  openGraph: {
    title: 'Mode is available now',
    description: 'A frame of all the metrics at launch',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmY24GiPcr2WSGhsRzWeREpVtsAkkvCY7e4ChYGpq2diVV/1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
