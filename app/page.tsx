import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmY24GiPcr2WSGhsRzWeREpVtsAkkvCY7e4ChYGpq2diVV/1.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

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

export default function Page() {
  return (
    <>
      <h1>Mode is available now</h1>
    </>
  );
}
