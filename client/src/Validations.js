import * as yup from 'yup'

export const validations = yup.object({
    email: yup.string().email('Invalid Email').required('Enter valid email'),
    password: yup.string().min(6).required('Enter password')
});


export const Studentvalidations = yup.object({
    firstname: yup.string().min(3).required('Enter Firstname'),
    lastname: yup.string().min(3).required('Enter Lastname'),
    course: yup.string().min(3).required('Enter Course'),
    phone: yup.string().min(3).required('Enter Phone'),
    email: yup.string().email('Invalid Email').required('Enter valid email'),
    password: yup.string().min(6).required('Enter password')
})