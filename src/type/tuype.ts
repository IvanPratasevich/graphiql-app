export interface propsPassword {
  setValuePassword: Dispatch<SetStateAction<string>>;
  setValidationPassword: Dispatch<SetStateAction<boolean>>;
}

export interface setOpen {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
<<<<<<< HEAD
=======
import { Dispatch, SetStateAction } from 'react';

>>>>>>> origin/develop
export interface setOpenAdditionalEditor {
  setOpenAdditionalEditor: Dispatch<SetStateAction<boolean>>;
  openAdditionalEditor: boolean;
}
export interface openAdditionalEditor {
  openAdditionalEditor: boolean;
}
