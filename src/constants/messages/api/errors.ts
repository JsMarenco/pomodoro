const apiErrorMessage = {
  common: {
    internalServer:
      'An error occurred while processing your request. Please try again later.',
    unknown: 'An unknown error has occurred',
  },
  auth: {
    tokenRequired: 'Token is required',
    userNotFound: 'User not found',
    requiredFields: 'Please provide all required fields',
    invalidId: 'Invalid _id value',
    invalidEmail: 'Please provide a valid email address',
    invalidCredentials: 'Invalid credentials',
    incorrectPassword: 'Incorrect password',
    passwordsDoNotMatch: 'Passwords do not match',
    userAlreadyExists: 'User already exists',
    invalidJwtUserId:
      'The user ID in the JWT does not match the expected value',
    invalidJwtUserEmail:
      'The user email in the JWT does not match the expected value',
    jwtExpired: 'JWT has expired',
    invalidToken: 'Invalid token',
    emailIsNotAvailable: 'Email is not available',
    usernameNotAvailable: 'Username is not available',
    firstnameMinLength: (minLength: number) =>
      `The firstname must be at least ${minLength} characters long`,
    firstnameMaxLength: (maxLength: number) =>
      `The firstname must be no longer than ${maxLength} characters`,
    lastnameMinLength: (minLength: number) =>
      `The lastname must be at least ${minLength} characters long`,
    lastnameMaxLength: (maxLength: number) =>
      `The lastname must be no longer than ${maxLength} characters`,
    usernameMinLength: (minLength: number) =>
      `The username must be at least ${minLength} characters long`,
    usernameMaxLength: (maxLength: number) =>
      `The username must be no longer than ${maxLength} characters`,
  },
  posts: {
    postNotFound: 'Post not found',
    postNotWrittenByUser:
      'This post was not written by you or the author is someone else',
    maxContentLenghtReached: 'Maximum character limit has been reached',
  },
  comments: {
    commentNotFound: 'Comment not found',
  },
  friends: {
    selfFriendRequest: 'You can\'t send a friend request to yourself',
    unauthorized: 'You are not authorized to perform this action',
    acceptOwnFriendRequest:
      'You cannot accept a friend request that you have sent',
    friendRequestNotFound: 'Friend request not found',
    receiverUserNotFound:
      'The user you are trying to add as a friend was not found',
    notFriendRequestReceiver:
      'You cannot accept a friend request that was not sent to you',
    alreadyFriends: 'You are already friends with this user',
    notYourFriend: 'This user is not your friend',
    cannotRejectOwnRequest: 'You cannot reject your own request',
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
