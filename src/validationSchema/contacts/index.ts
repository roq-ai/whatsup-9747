import * as yup from 'yup';

export const contactValidationSchema = yup.object().shape({
  name: yup.string().required(),
  business_id: yup.string().nullable(),
});
