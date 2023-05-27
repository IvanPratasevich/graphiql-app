import { Button, ActionIcon } from '@mantine/core';
import style from './additionalEditor.module.scss';
import { setOpenAdditionalEditor } from '../../type/tuype';
import { IconArrowsDownUp } from '@tabler/icons-react';
<<<<<<< HEAD
import { useRef, useState } from 'react';
import Editor from '../Editor/Editor';
=======
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { headersSlice } from '../../toolkitRedux/additionalHeaders';
>>>>>>> origin/develop

export const AdditionalEditor = ({
  openAdditionalEditor,
  setOpenAdditionalEditor,
}: setOpenAdditionalEditor) => {
<<<<<<< HEAD
  const [changeVariablesHeaders, setChangeVariablesHeaders] = useState(true);
  const additionalEditorWrapperRef = useRef<HTMLDivElement>(null);
=======
  const { headers } = useAppSelector((state) => state.headersSlice);
  const { changeHeaders } = headersSlice.actions;
  const dispatch = useAppDispatch();
>>>>>>> origin/develop

  return (
    <div
      ref={additionalEditorWrapperRef}
      className={
        openAdditionalEditor ? style.wrapperVariables : `${style.wrapperVariables} ${style.hidden}`
      }
    >
      <div className={style.wrapperButtons}>
        <div className={style.container}>
          <Button
            variant="subtle"
            compact
            color="yellow"
            size="sm"
            onClick={() => {
              dispatch(changeHeaders(!headers));
            }}
            disabled={!headers}
          >
            Variables
          </Button>
          &nbsp;
          <Button
            variant="subtle"
            compact
            color="yellow"
            size="sm"
            onClick={() => {
              dispatch(changeHeaders(!headers));
            }}
            disabled={headers}
          >
            Headers
          </Button>
        </div>
        <ActionIcon
          color="blue"
          size="2rem"
          onClick={() => {
            setOpenAdditionalEditor(!openAdditionalEditor);
          }}
        >
          <IconArrowsDownUp size={20} strokeWidth={2} color={'#edecdd'} />
        </ActionIcon>
      </div>

      <div className={changeVariablesHeaders ? style.editor_hidden : style.additionalEditor}>
        <Editor
          parentContainerRef={additionalEditorWrapperRef}
          openAdditionalEditor={openAdditionalEditor}
        />
      </div>

      <div className={!changeVariablesHeaders ? style.editor_hidden : style.additionalEditor}>
        <Editor
          parentContainerRef={additionalEditorWrapperRef}
          openAdditionalEditor={openAdditionalEditor}
        />
      </div>
    </div>
  );
};
