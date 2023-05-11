import axios from 'axios'
import { GlobalApiResponse } from '@/ts/interfaces/api'
import appRoutes from '@/constants/routes/app'
import httpStatus from '@/constants/httpStatus'

const createRoomService = async (
  name: string,
  description: string
): Promise<GlobalApiResponse> => {
  try {
    const body = {
      name,
      description,
    }

    const { data, status } = await axios.post(appRoutes.roomApi.create, body)

    const apiAnswer: GlobalApiResponse = {
      body: data.room,
      message: data.message,
      success: true,
      status,
    }

    return apiAnswer
  } catch (err: unknown) {
    const apiAnswer = {
      body: [],
      message: httpStatus.badRequest.message,
      success: false,
      status: httpStatus.badRequest.code,
    }

    if (axios.isAxiosError(err)) {
      apiAnswer.body = err.response?.data
      apiAnswer.message = err.response?.data.message
      apiAnswer.status = err.response?.status || httpStatus.badRequest.code
    }

    return apiAnswer
  }
}

export default createRoomService
