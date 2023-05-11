import { NextApiResponse, NextApiRequest } from 'next'
import httpStatus from '@/constants/httpStatus'
import { generateRoomInvitationLink } from '@/utils/basic'
import apiMessages from '@/constants/messages/api'

const createRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, description } = req.body

    const room = {
      name,
      description,
      link: generateRoomInvitationLink(),
      linkAlias: '/room/join/url',
    }

    res.status(httpStatus.created.code).json({
      room,
      message: apiMessages.success.room.created,
    })
  } catch (error: any) {
    res.status(httpStatus.serverError.code).json({
      message: httpStatus.serverError.message,
    })
  }
}

export default createRoom
