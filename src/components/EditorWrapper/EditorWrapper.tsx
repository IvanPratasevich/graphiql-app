import { ActionIcon } from '@mantine/core';
import style from './editorWrapper.module.scss';
import { IconCircleCaretRight } from '@tabler/icons-react';
import { openAdditionalEditor } from '../../type/tuype';
import Editor from '../Editor/Editor';
import { useRef } from 'react';

const EditorWrapper = ({ openAdditionalEditor }: openAdditionalEditor) => {
  const editorWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={editorWrapperRef}
      className={
        openAdditionalEditor ? style.wrapperEditor : `${style.wrapperEditor} ${style.grow}`
      }
    >
      <Editor parentContainerRef={editorWrapperRef} openAdditionalEditor={openAdditionalEditor} />
      <div>
        <ActionIcon color="blue" size="2rem">
          <IconCircleCaretRight size="2rem" />
        </ActionIcon>
      </div>
    </div>
  );
};
export default EditorWrapper;
