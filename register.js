document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  const usernameInput = document.getElementById("username");
  const username = usernameInput.value;
  const passwordInput = document.getElementById("password");
  const password = passwordInput.value;

  const usernameRegex = /^(?=.*[A-Z])(?=.*[a-z]{5,})(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  if (!usernameRegex.test(username)) {
    alert("Username must be at least 8 characters long, containing 1 uppercase, 5 lowercase, 1 special character, and 1 digit.");
    return;
  }

  if (password === "") {
    alert("Password is required.");
    return;
  }

  alert("Registration successful!");
});
