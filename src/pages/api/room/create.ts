// Third-party dependencies
import type { NextApiRequest, NextApiResponse } from 'next'

// Current project dependencies
import httpStatus from '@/constants/httpStatus'
import createRoom from '@/controllers/room/create'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      await createRoom(req, res)
      break
    default:
      res
        .status(httpStatus.methodNotAllowed.code)
        .json({ message: httpStatus.methodNotAllowed.message })
      break
  }
}
