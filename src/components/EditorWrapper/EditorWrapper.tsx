import { ActionIcon } from '@mantine/core';
import style from './editorWrapper.module.scss';
import { IconCircleCaretRight } from '@tabler/icons-react';
import { openAdditionalEditor } from '../../type/tuype';
import Editor from '../Editor/Editor';
import { useEffect, useRef, useState } from 'react';

const EditorWrapper = ({ openAdditionalEditor }: openAdditionalEditor) => {
  const [heightValue, setHeight] = useState<number>();
  const editorWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openAdditionalEditor || openAdditionalEditor) {
      if (editorWrapperRef.current) {
        setHeight(editorWrapperRef.current.clientHeight);
      }
    }

    window.addEventListener('resize', () => {
      if (editorWrapperRef.current) {
        setHeight(editorWrapperRef.current.clientHeight);
      }
    });

    if (editorWrapperRef.current) {
      setHeight(editorWrapperRef.current.clientHeight);
    }
  }, [openAdditionalEditor]);
  return (
    <div
      ref={editorWrapperRef}
      className={
        openAdditionalEditor ? style.wrapperEditor : `${style.wrapperEditor} ${style.grow}`
      }
    >
      <Editor height={heightValue} openAdditionalEditor={openAdditionalEditor} />
      <div>
        <ActionIcon color="blue" size="2rem">
          <IconCircleCaretRight size="2rem" />
        </ActionIcon>
      </div>
    </div>
  );
};
export default EditorWrapper;
