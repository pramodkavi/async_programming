function fetchUserData(callback) {
  setTimeout(() => {
    console.log("Fetching user data...");
    const userData = {
      username: "john_doe",
      email: "john.doe@example.com",
      password: "123456",
    };
    let check = false;
    if (check) {
      resolve(userData);
    } else {
      reject("error occured...");
    }
  }, 1000);
}

function validateUserData(userData, callback) {
  setTimeout(() => {
    console.log("Validating user data...");
    if (!userData.username || !userData.email || !userData.password) {
      callback("Validation error: Missing fields!");
      reject("Validation error: Missing fields!");

    } else if (userData.password.length < 6) {
      reject("Validation error: Password is too short!");

    } else {
        resolve(userData);
    }
  }, 1000);
}

function saveToDatabase(userData, callback) {
  setTimeout(() => {
    console.log("Saving user to the database...");
    const userId = 123; // Simulated user ID
    callback(null, userId);
  }, 1000);
}

function sendConfirmationEmail(userId, callback) {
  setTimeout(() => {
    console.log(`Sending confirmation email to user ID ${userId}...`);
    callback(null, "Email sent successfully!");
  }, 1000);
}

// Callback hell starts here
fetchUserData((err, userData) => {
  if (err) {
    console.error(err);
    return;
  }
  validateUserData(userData, (err, validatedData) => {
    if (err) {
      console.error(err);
      return;
    }
    saveToDatabase(validatedData, (err, userId) => {
      if (err) {
        console.error(err);
        return;
      }
      sendConfirmationEmail(userId, (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(result);
      });
    });
  });
});
