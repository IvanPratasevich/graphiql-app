import { ActionIcon } from '@mantine/core';
import style from './editorWrapper.module.scss';
import { IconCircleCaretRight } from '@tabler/icons-react';
const EditorWrapper = () => {
  return (
    <div className={style.wrapperEditor}>
      <div className={style.editor}></div>
      <div>
        <ActionIcon color="blue">
          <IconCircleCaretRight size="1.625rem" />
        </ActionIcon>
      </div>
    </div>
  );
};
export default EditorWrapper;
