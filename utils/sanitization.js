import { body } from "express-validator";

const onlyLettersError = "must only contain letters.";
const lengthError = "must be between 1 and 10 characters.";
const passwordLengthError = "must be more than 2 characters";

export const validateFirstName = body("firstName")
    .trim()
    .isAlpha()
    .withMessage(`First name ${onlyLettersError}`)
    .isLength({ min: 1, max: 20 })
    .withMessage(`First name ${lengthError}`);

export const validateLastName = body("lastName")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${onlyLettersError}`)
    .isLength({ min: 1, max: 20 })
    .withMessage(`Last name ${lengthError}`);

export const validateUsername = body("username")
    .trim()
    .isLength({ min: 1, max: 20 })
    .withMessage(`Username name ${lengthError}`);

export const validatePassword = body("password")
    .trim()
    .isLength({ min: 2 })
    .withMessage(`Password ${passwordLengthError}`);

export const validateConfirmPassword = body("confirmPassword")
    .trim()
    .isLength({ min: 2 })
    .withMessage(`Password confirmation ${passwordLengthError}`);
