const apiSuccessMessages = {
  user: {
    created: 'User successfully created',
    deleted: 'User successfully deleted',
    documentUpdate: 'The user document was updated successfully',
    updated: 'Info updated successfully',
  },
  password: {
    resetLinkSent: 'We will send you a link to reset your password',
    reset: 'Your password has been reset successfully',
  },
  email: {
    sent: 'An email has been sent to your address',
  },
  post: {
    created: 'Post successfully created',
    deleted: 'Post deleted successfully',
    liked: 'Post liked',
    unliked: 'Post unliked',
    updated: 'Post updated successfully',
  },
  comment: {
    created: 'Your comment was created successfully',
    liked: 'Comment liked',
    unliked: 'Comment unliked',
  },
  friendRequest: {
    sent: 'Friend request sent!',
    received: 'Friend request received!',
    accepted: 'Friend request accepted!',
    declined: 'Friend request declined!',
    cancelled: 'Friend request cancelled!',
    rejected: 'Friend request has been rejected',
  },
  friend: {
    nowFriends: 'You are now friends!',
    removedFromFriendList: 'This user has been removed from your friend list',
  },
  test: {
    usersCreatedSuccessfully: 'Users created successfully!',
    friendRequestsReceived: 'Friend requests received!',
    deleteAllUsers: 'Deleting all users from the database...',
    generatingFakeUsers: 'Generating fake users...',
    uploadingToDb: 'Uploading data to the database...',
    creatingMainUser: 'Creating main user...',
    generatingFriendRequests:
      'Generating friend requests to send to main user...',
    findingMainUser: 'Finding main user...',
    redirectToGenerateFriendsRequests:
      'Redirecting to generate friends requests...',
    postsCreatedSuccessfully: 'Posts created successfully!',
    deletingAllPosts: 'Deleting all posts...',
    generatingFakePosts: 'Generating fake posts...',
    testDataLoadedSuccessfully: 'All test data loaded successfully!',
  },
  authentication: {
    loginSuccessful: 'Login successful!',
  },
}

export default apiSuccessMessages
