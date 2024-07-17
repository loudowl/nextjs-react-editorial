import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch('https://api.pexels.com/videos/popular', {
    headers: {
      Authorization: 'YOUR_PEXELS_API_KEY',
    },
  });

  const data = await response.json();
  const videoUrl = data.videos[0]?.video_files[0]?.link || '';

  res.status(200).json({ url: videoUrl });
}