import { TextFieldProps } from "@mui/material";
import { GenericType } from "./common.types";

export interface FormInputProps {
    name: string;
    control: GenericType;
    label: string;
    setValue?: GenericType;
    textFieldProps?: TextFieldProps
  }