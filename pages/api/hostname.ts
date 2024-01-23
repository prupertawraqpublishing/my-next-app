// pages/api/hostname.ts
import { NextApiHandler } from 'next';
import os from 'os';

const handler: NextApiHandler = async (_, res) => {
  const hostname = os.hostname();

  res.status(200).json({ hostname });
};

export default handler;
