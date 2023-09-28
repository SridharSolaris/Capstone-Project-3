export default function validateSignup(values) {
    let errors = {};

    //Name errors
    if (!values.name) {
        errors.name = "A username is required.";
    }
    //Email errors
    if (!values.email) {
        errors.email = "Your email is required.";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Your email is invalid.";
    }

    return errors;
}