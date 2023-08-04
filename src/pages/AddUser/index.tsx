import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { FormInputText } from 'components/FormInputText/FormInputText';

import useAddUser from './useAddUser';
import { AddUserFormProps } from './types';
import { userFormDetails } from './userFormDetails';

export const AddUserForm = ({ closeModal, addNewUser }: AddUserFormProps) => {
  const { submitHandler, addUserDisabled, handleSubmit, control, isLoading } = useAddUser({
    closeModal,
    addNewUser,
  });

  return (
    <>
      <Typography sx={{ textAlign: 'center' }} variant={'h4'} gutterBottom>
        {' ADD USER '}
      </Typography>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Grid sx={{ margin: '1.25rem auto' }} container spacing={2}>
          {userFormDetails.map(fields => (
            <Grid item md={6} key={fields.id}>
              <FormInputText
                name={fields.name}
                control={control}
                label={fields.label}
                rules={fields.rules}
                textFieldProps={fields.textFieldProps}
              />
            </Grid>
          ))}
          <Grid item md={12} sm={12}>
            <Button disabled={addUserDisabled()} type={'submit'} variant={'contained'}>
              {!isLoading ? 'Add' : <CircularProgress size={30} />}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
