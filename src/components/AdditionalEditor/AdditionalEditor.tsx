import { Button } from '@mantine/core';
import style from './additionalEditor.module.scss';

export const AdditionalEditor = () => {
  return (
    <div className={style.wrapperVariables}>
      <div className={style.wrapperButtons}>
        <Button variant="subtle" color="gray" size="xs">
          Variables
        </Button>
        <Button variant="subtle" color="gray" size="xs">
          Headers
        </Button>
      </div>
      <div className={style.variables}></div>
    </div>
  );
};
