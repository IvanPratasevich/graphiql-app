import { ActionIcon } from '@mantine/core';
import style from './editorWrapper.module.scss';
import { IconCircleCaretRight } from '@tabler/icons-react';
import { openAdditionalEditor } from '../../type/tuype';
import Editor from '../Editor/Editor';
import { MutableRefObject, useEffect, useRef, useState } from 'react';

const EditorWrapper = ({ openAdditionalEditor }: openAdditionalEditor) => {
  const [heightValue, setHeight] = useState<number | undefined>();
  const editorWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorWrapperRef.current) {
      setHeight(editorWrapperRef.current.clientHeight);
    }
  }, []);
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
