import { ActionIcon } from '@mantine/core';
import style from './editorWrapper.module.scss';
import { IconCircleCaretRight } from '@tabler/icons-react';
import { openAdditionalEditor } from '../../type/tuype';
import Editor from '../Editor/Editor';
import { useRef } from 'react';
import { useAppDispatch } from '../../hook/redux';
import { editorSlice } from '../../toolkitRedux/editorSlice';

const EditorWrapper = ({ openAdditionalEditor }: openAdditionalEditor) => {
  const editorWrapperRef = useRef<HTMLDivElement>(null);
  const { changeMakeRequest } = editorSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div
      ref={editorWrapperRef}
      className={
        openAdditionalEditor ? style.wrapperEditor : `${style.wrapperEditor} ${style.grow}`
      }
    >
      <Editor
        purpose="request"
        parentContainerRef={editorWrapperRef}
        openAdditionalEditor={openAdditionalEditor}
      />
      <div>
        <ActionIcon color="blue" size="2rem" onClick={() => dispatch(changeMakeRequest(true))}>
          <IconCircleCaretRight size="2rem" />
        </ActionIcon>
      </div>
    </div>
  );
};
export default EditorWrapper;
