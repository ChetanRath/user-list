import { emailRegex, phoneNumberRegex } from 'utils/regex';

export const userFormDetails = [
  {
    id: 1,
    name: 'firstName',
    label: 'First Name',
    rules: {
      required: 'First name is required',
      minLength: 1,
    },
    textFieldProps: {
      type: 'text',
    },
  },
  {
    id: 2,
    name: 'lastName',
    label: 'Last Name',
    rules: {
      required: 'Last name is required',
      minLength: 1,
    },
    textFieldProps: {
      type: 'text',
    },
  },
  {
    id: 3,
    name: 'middleName',
    label: 'Middle Name',
    textFieldProps: {
      type: 'text',
    },
  },
  {
    id: 4,
    name: 'email',
    label: 'Email',
    rules: {
      required: 'Email is required',
      pattern: {
        value: emailRegex,
        message: 'Please enter a valid email address',
      },
    },
    textFieldProps: {
      type: 'text',
    },
  },
  {
    id: 5,
    name: 'password',
    label: 'Password',
    rules: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password cannot be less than 8 characters',
      },
    },
    textFieldProps: {
      type: 'password',
    },
  },
  {
    id: 6,
    name: 'phone',
    label: 'Phone Number',
    rules: {
      required: 'Phone Number is required',
      pattern: {
        value: phoneNumberRegex,
        message: 'Please enter a valid phone number',
      },
    },
    textFieldProps: {
      type: 'number',
    },
  },
];
