function createLoginTracker(userInfo) {
  let attemptCount = 0;
  let locked = false;

  return (passwordAttempt) => {
    if (locked) {
      return "Account locked due to too many failed login attempts";
    }

    attemptCount++;

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    // Return the failure message for first 3 attempts
    const message = `Attempt ${attemptCount}: Login failed`;

    // Lock after the 3rd failed attempt
    if (attemptCount >= 3) {
      locked = true;
    }

    return message;
  };
}

module.exports = {
  createLoginTracker
};