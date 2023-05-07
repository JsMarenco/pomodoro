const apiErrorMessage = {
  common: {
    internalServer:
      'An error occurred while processing your request. Please try again later.',
    unknown: 'An unknown error has occurred',
  },
  api: {
    routeNotFound: 'Route not found',
    limitOffset: 'Limit and offset cannot be empty',
    offsetMustBeNumber: 'Offset param should be a number',
    limitMustBeNumber: 'Limit param should be a number',
    passwordMaxLength: (length: number) =>
      `The password must be no longer than ${length} characters`,
    passwordMinLength: (length: number) =>
      `The password must be at least ${length} characters long`,
  },
}

export default apiErrorMessage
