import { useForm } from 'react-hook-form';
import { FormInputValues } from './types';
import useAsync from 'hooks/useAsync';
import { userApi } from 'utils/api';

const defaultValues: FormInputValues = {
  email: '',
  password: '',
};

const addUserController = () => {
  const { handleSubmit, control, getValues, watch, formState } = useForm<FormInputValues>({
    defaultValues,
  });
  const { isLoading, err, res: newUser, asyncFunc: submitForm } = useAsync(userApi.addUser);
  watch();

  const submitHandler = () => {
    const values = getValues();
    submitForm(values);
  };

  // useEffect(() => {
  //   if (newUser) addUserToList(newUser)
  // }, [newUser])

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
    newUser,
    submitForm,
  };
};

export default addUserController;
