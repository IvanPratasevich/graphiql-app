import style from './main.module.scss';
import { ActionIcon } from '@mantine/core';
import { IconCircleCaretRight, IconClipboardData } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { useState } from 'react';
const Main = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={open ? style.wrapper : `${style.wrapper} ${style.active}`}>
      <div className={style.wrapperDocs}>
        <ActionIcon
          onClick={() => {
            setOpen(!open);
          }}
        >
          <IconClipboardData size="1.625rem"></IconClipboardData>
        </ActionIcon>
      </div>
      <div className={style.docs}></div>
      <div className={style.wrapperRequest}>
        <div className={style.wrapperRedactor}>
          <div className={style.redactor}></div>
          <div>
            <ActionIcon color="blue">
              <IconCircleCaretRight size="1.625rem" />
            </ActionIcon>
          </div>
        </div>

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
      </div>

      <div className={style.wrapperResponse} />
    </div>
  );
};
export default Main;
