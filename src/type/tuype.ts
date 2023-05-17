import { Dispatch, SetStateAction } from 'react';

export interface propsPassword {
  setValuePassword: Dispatch<SetStateAction<string>>;
  setValidationPassword: Dispatch<SetStateAction<boolean>>;
}

export interface setOpen {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
