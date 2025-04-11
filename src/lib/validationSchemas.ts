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
