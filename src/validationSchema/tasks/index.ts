import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  time_spent: yup.number().integer().nullable(),
  business_id: yup.string().nullable(),
});
