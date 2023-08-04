import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress'; // Add to button for loading
import { FormInputText } from 'components/FormInputText/FormInputText';
import { emailRegex, phoneNumberRegex } from 'utils/regex';
import { Grid } from '@mui/material';

import useAddUserController from './addUserController';

export const AddUserForm = () => {
  const { submitHandler, addUserDisabled, handleSubmit, control, isLoading } = useAddUserController();

  return (
    <>
      <h2 style={{ margin: 'auto', width: 'fit-content' }}>{' ADD USER '}</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <FormInputText
              name={'firstName'}
              control={control}
              label={'First Name'}
              rules={{
                required: 'First name is required',
                minLength: 1,
              }}
              textFieldProps={{
                type: 'text',
              }}
            />
          </Grid>
          <Grid item md={6}>
            <FormInputText
              name={'lastName'}
              control={control}
              label={'Last Name'}
              rules={{
                required: 'Last name is required',
                minLength: 1,
              }}
              textFieldProps={{
                type: 'text',
              }}
            />
          </Grid>
          <Grid item md={6}>
            <FormInputText
              name={'middleName'}
              control={control}
              label={'Middle Name'}
              textFieldProps={{
                type: 'text',
              }}
            />
          </Grid>
          <Grid item md={6}>
            <FormInputText
              name={'email'}
              control={control}
              label={'Email'}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: emailRegex,
                  message: 'Please enter a valid email address',
                },
              }}
              textFieldProps={{
                type: 'text',
              }}
            />
          </Grid>
          <Grid item md={6}>
            <FormInputText
              name={'password'}
              control={control}
              label={'Password'}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password cannot be less than 8 characters',
                },
              }}
              textFieldProps={{
                type: 'password',
              }}
            />
          </Grid>
          <Grid item md={6}>
            <FormInputText
              name={'phonenumber'}
              control={control}
              label={'Phone Number'}
              rules={{
                required: 'Phone Number is required',
                pattern: {
                  value: phoneNumberRegex,
                  message: 'Please enter a valid phone number',
                },
              }}
              textFieldProps={{
                type: 'number',
              }}
            />
          </Grid>
          <Grid item md={12}>
            <Button disabled={addUserDisabled()} type={'submit'} variant={'contained'}>
              {isLoading ? 'Add' : <CircularProgress size={30} />}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
