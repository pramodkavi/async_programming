function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching user data...");
      const userData = {
        username: "john_doe",
        email: "john.doe@example.com",
        password: "123456",
      };
      let check = true;
      if (check) {
        resolve(userData);
      } else {
        reject("error occured...");
      }
    }, 1000);
  });
}

function validateUserData(userData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Validating user data...");
      if (!userData.username || !userData.email || !userData.password) {
        reject("Validation error: Missing fields!");
      } else if (userData.password.length < 6) {
        reject("Validation error: Password is too short!");
      } else {
        resolve(userData);
      }
    }, 1000);
  });
}

function saveToDatabase(userData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Saving user to the database...");
      const userId = 123; // Simulated user ID
      resolve(userId);
    }, 1000);
  });
}

function sendConfirmationEmail(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Sending confirmation email to user ID ${userId}...`);
      let check = true;
      if (check) {
        resolve("Email sent successfully!");
      } else {
        reject("Email is't send!");
      }
    }, 1000);
  });
}

// Callback hell starts here
fetchUserData()
  .then((userData) => {
    console.log(userData, "Hutto");
    validateUserData(userData);
  })
  .then((userData) => {
    saveToDatabase(userData);
    console.log(userData, "Hutto");
  })
  .then((userId) => {
    console.log(userId, "Hutto");
    sendConfirmationEmail(userId);
  })
  .catch(() => {
    console.log("Error occured...");
  });

  fetchUserData()
    .then((userData) => validateUserData(userData))
    .then((validatedData) => saveToDatabase(validatedData))
    .then((userId) => sendConfirmationEmail(userId))
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });