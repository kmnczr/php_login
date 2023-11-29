// Function to check if the email is in a valid format
const isValidEmail = (email) => {
    // Use a regular expression to check if the email has a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export default isValidEmail;