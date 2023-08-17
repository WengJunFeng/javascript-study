const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateEmail(email) {
  return emailRegex.test(email);
}

exports.validateEmail = validateEmail;
