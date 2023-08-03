import { TextFieldProps } from '@mui/material';
import { GenericType } from './common.types';
import { RegisterOptions } from 'react-hook-form';

export interface FormInputProps {
  name: string;
  control: GenericType;
  label: string;
  setValue?: GenericType;
  textFieldProps?: TextFieldProps;
  rules?: RegisterOptions;
}
