import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAsync from 'hooks/useAsync';
import { userApi } from 'utils/api';
import { AddUserFormProps, FormInputValues } from './types';

const useAddUserController = ({ closeModal, addNewUser }: AddUserFormProps) => {
  const { handleSubmit, control, getValues, watch, formState } = useForm<FormInputValues>();
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
    getValues,
    watch,
    control,
    formState,
    isLoading,
    newUserId,
    submitForm,
  };
};

export default useAddUserController;
