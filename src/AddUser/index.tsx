import { useForm } from 'react-hook-form';
import { FormInputText } from 'components/FormInputText/FormInputText';
import { FormInputValues } from './types';

const defaultValues: FormInputValues = {
  email: '',
  password: '',
};

export const AddUserForm = () => {
  const { handleSubmit, control, getValues, watch } = useForm<FormInputValues>({
    defaultValues: defaultValues,
  });

  watch();

  console.log('5665656', getValues());
  return (
    <>
      <FormInputText
        name={'email'}
        control={control}
        label={'Email'}
        textFieldProps={{
          type: 'text',
        }}
      />
      <FormInputText
        name={'password'}
        control={control}
        label={'Password'}
        textFieldProps={{
          type: 'text',
        }}
      />
    </>
  );
};
