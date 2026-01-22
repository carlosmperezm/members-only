import { body } from "express-validator";

const MAX_LENGTH = 50;
const onlyLettersError = "must only contain letters.";
const lengthError = `must be between 1 and ${MAX_LENGTH} characters.`;
const passwordLengthError = "must be more than 2 characters";
const passwordMatchError = "must match";
const emptyError = "must not be empty";

export const validateFirstName = body("firstName")
    .trim()
    .notEmpty()
    .withMessage(`First Name ${emptyError}`)
    .isAlpha()
    .withMessage(`First name ${onlyLettersError}`)
    .isLength({ min: 1, max: MAX_LENGTH })
    .withMessage(`First name ${lengthError}`)
    .escape();

export const validateLastName = body("lastName")
    .trim()
    .notEmpty()
    .withMessage(`Last Name ${emptyError}`)
    .isAlpha()
    .withMessage(`Last name ${onlyLettersError}`)
    .isLength({ min: 1, max: MAX_LENGTH })
    .withMessage(`Last name ${lengthError}`)
    .escape();

export const validateUsername = body("username")
    .trim()
    .notEmpty()
    .withMessage(`Username ${emptyError}`)
    .isLength({ min: 1, max: MAX_LENGTH })
    .withMessage(`Username name ${lengthError}`)
    .escape();

export const validatePassword = body("password")
    .trim()
    .notEmpty()
    .withMessage(`Password ${emptyError}`)
    .isLength({ min: 2 })
    .withMessage(`Password ${passwordLengthError}`)
    .escape();

export const validateConfirmPassword = body("confirmPassword")
    .trim()
    .notEmpty()
    .withMessage(`Password confirmation ${emptyError}`)
    .custom((value, { req }) => value === req.body.password)
    .withMessage(`Password confirmation ${passwordMatchError}`)
    .escape();

export const validateMessageTitle = body("title")
    .trim()
    .notEmpty()
    .withMessage(`Title ${emptyError}`)
    .isLength({ min: 1, max: MAX_LENGTH })
    .withMessage(`Message ${lengthError}`)
    .escape();

export const validateDescription = body("description")
    .trim()
    .escape();