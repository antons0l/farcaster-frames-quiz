import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin the quiz"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/QmYZgqhhhJJJh897Q7X65dg2YAgsbfUxm74aqNnc6SdXe7/start.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Quiz farcaster frame',
  description: 'Beginning of the quiz',
  openGraph: {
    title: 'Quiz farcaster frame',
    description: 'Beginning of the quiz',
    images: [`${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/QmYZgqhhhJJJh897Q7X65dg2YAgsbfUxm74aqNnc6SdXe7/start.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Quiz farcaster frame</h1>
      <h2>If you want to debug the frame: </h2>
      <p>* Deploy the app on vercel and test it with https://warpcast.com/~/developers/frames</p>
      <p>* From frames.js, run framesjs-starter locally and use http://localhost:3000 url</p>
      <img src="demo.gif"></img>
    </>
  );
}