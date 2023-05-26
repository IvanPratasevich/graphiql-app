import { ActionIcon } from '@mantine/core';
import style from './editorWrapper.module.scss';
import { IconCircleCaretRight } from '@tabler/icons-react';
import { openAdditionalEditor } from '../../type/tuype';

const EditorWrapper = ({ openAdditionalEditor }: openAdditionalEditor) => {
  return (
    <div
      className={
        openAdditionalEditor ? style.wrapperEditor : `${style.wrapperEditor} ${style.grow}`
      }
    >
      <div className={style.editor}></div>
      <div>
        <ActionIcon color="blue" size="2rem">
          <IconCircleCaretRight size="2rem" />
        </ActionIcon>
      </div>
    </div>
  );
};
export default EditorWrapper;
