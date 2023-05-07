import { Dispatch, SetStateAction } from 'react';

export interface propsPassword {
  setValuePassword: Dispatch<SetStateAction<string>>;
  setValidationPassword: Dispatch<SetStateAction<boolean>>;
}
