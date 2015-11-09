Accounts.onCreateUser(function(options, user) {
  user.student = true;
  if (options.profile)
    user.profile = options.profile;
  return user;
});