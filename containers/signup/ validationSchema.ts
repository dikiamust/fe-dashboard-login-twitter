import * as Yup from 'yup';

// min 5 characters, 1 Upper case letter, 1 lower case letter, 1 numeric digit
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const validationSchema = Yup.object().shape({
  username: Yup.string().required('This field can not be empty'),
  email: Yup.string()
    .email('Invalid email')
    .required('This field can not be empty'),
  password: Yup.string().required('This field can not be empty'),
  // .min(5)
  // .matches(passwordRules, {
  //   message:
  //     'Password should be min 5 characters, 1 Upper case letter, 1 lower case letter, 1 numeric digit',
  // })
});
