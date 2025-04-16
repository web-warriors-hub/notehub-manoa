import * as Yup from 'yup';

export const AddStuffSchema = Yup.object({
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const AddNoteSchema = Yup.object({
  email: Yup.string().required(),
  title: Yup.string().required(),
  department: Yup.string().required(),
  class: Yup.string().required(),
  semester: Yup.string().required(),
  professor: Yup.string().required(),
  description: Yup.string().required(),
  documentLink: Yup.string().required(),
  owner: Yup.string().required(),
});

export const EditNoteSchema = Yup.object({
  id: Yup.number().required(),
  email: Yup.string().required(),
  title: Yup.string().required(),
  department: Yup.string().required(),
  class: Yup.string().required(),
  semester: Yup.string().required(),
  professor: Yup.string().required(),
  description: Yup.string().required(),
  documentLink: Yup.string().required(),
  owner: Yup.string().required(),
});

export const AddContactSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  address: Yup.string().required('Address is required'),
  image: Yup.string().required('Image URL is required'),
  description: Yup.string().required('Description is required'),
  owner: Yup.string().required(), // Ensure the owner is provided, typically the current user
});

export const EditContactSchema = Yup.object({
  id: Yup.number().required(),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  address: Yup.string().required('Address is required'),
  image: Yup.string().required('Image URL is required'),
  description: Yup.string().required('Description is required'),
  owner: Yup.string().required('Owner is required'), // Ensure the owner is provided, typically the current user
});
