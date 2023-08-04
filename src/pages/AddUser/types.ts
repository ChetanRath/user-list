import { UserType } from 'UserList/types';

export interface FormInputValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  phone: number;
}

export interface AddUserFormProps {
  closeModal: () => void;
  addNewUser: (user: UserType) => void;
}
