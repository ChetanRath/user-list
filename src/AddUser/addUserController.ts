import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AddUserFormProps, FormInputValues } from './types';
import useAsync from 'hooks/useAsync';
import { userApi } from 'utils/api';

// const defaultValues: FormInputValues = {
//   email: '',
//   password: '',
//   firstName: '',
//   lastName: '',
// };

const useAddUserController = ({ closeModal, addNewUser }: AddUserFormProps) => {
  const { handleSubmit, control, getValues, watch, formState } = useForm<FormInputValues>({
    // defaultValues,
  });
  const { isLoading, res: newUserId, asyncFunc: submitForm } = useAsync(userApi.addUser);
  watch();

  const submitHandler = () => {
    const values = getValues();
    submitForm(values);
  };

  useEffect(() => {
    if (newUserId) {
      const { firstName, middleName = '', lastName, email, phone } = getValues();
      addNewUser({
        id: newUserId,
        name: firstName + middleName + lastName,
        email,
        phone,
      });
      closeModal();
    }
  }, [newUserId]);

  const addUserDisabled = () => {
    const values = getValues();

    return Object.keys(formState.errors)?.length === 0 && (values?.email === '' || values?.password === '');
  };

  return {
    submitHandler,
    addUserDisabled,
    handleSubmit,
    control,
    getValues,
    watch,
    formState,
    isLoading,
    newUserId,
    submitForm,
  };
};

export default useAddUserController;
