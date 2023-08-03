import { useForm } from 'react-hook-form';
import { FormInputText } from 'components/FormInputText/FormInputText';
import { FormInputValues } from './types';
import { Button } from '@mui/material';

const defaultValues: FormInputValues = {
  email: '',
  password: '',
};

export const AddUserForm = () => {
  const { handleSubmit, control, getValues, watch, formState } = useForm<FormInputValues>({
    defaultValues: defaultValues,
  });

  watch();

  const submitHandler = () => {
    console.log('erererer submitting');
  };

  const addUserDisabled = () => {
    const values = getValues();

    return Object.keys(formState.errors)?.length === 0 && (values?.email === '' || values?.password === '');
  };

  console.log('5665656', getValues(), formState.errors);
  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <FormInputText
          name={'email'}
          control={control}
          label={'Email'}
          rules={{ required: 'Email is required', minLength: 1 }}
          textFieldProps={{
            type: 'text',
          }}
        />
        <FormInputText
          name={'password'}
          control={control}
          label={'Password'}
          rules={{ required: 'Password is required', minLength: 1 }}
          textFieldProps={{
            type: 'password',
          }}
        />
        <Button disabled={addUserDisabled()} type={'submit'} variant={'contained'}>
          {'Add User'}
        </Button>
      </form>
    </>
  );
};
