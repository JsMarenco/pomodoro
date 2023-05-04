/**
 * Api status codes
 */
const httpStatus = {
  ok: {
    code: 200,
    message: 'OK',
  },
  created: {
    code: 201,
    message: 'Created',
  },
  accepted: {
    code: 202,
    message: 'Accepted',
  },
  noContent: {
    code: 204,
    message: 'No Content',
  },
  badRequest: {
    code: 400,
    message: 'Bad Request',
  },
  unauthorized: {
    code: 401,
    message: 'Unauthorized',
  },
  forbidden: {
    code: 403,
    message: 'Forbidden',
  },
  notFound: {
    code: 404,
    message: 'Not Found',
  },
  conflict: {
    code: 409,
    message: 'Conflict',
  },
  serverError: {
    code: 500,
    message: 'Internal Server Error',
  },
  methodNotAllowed: {
    code: 405,
    message: 'Method not allowed',
  },
}

export default httpStatus
