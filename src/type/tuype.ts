export interface propsPassword {
  setValuePassword: Dispatch<SetStateAction<string>>;
  setValidationPassword: Dispatch<SetStateAction<boolean>>;
}

export interface setOpen {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
import { Dispatch, SetStateAction } from 'react';

export interface setOpenAdditionalEditor {
  setOpenAdditionalEditor: Dispatch<SetStateAction<boolean>>;
  openAdditionalEditor: boolean;
}
export interface openAdditionalEditor {
  openAdditionalEditor: boolean;
}
