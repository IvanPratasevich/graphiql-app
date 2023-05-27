import { Button, ActionIcon } from '@mantine/core';
import style from './additionalEditor.module.scss';
import { setOpenAdditionalEditor } from '../../type/tuype';
import { IconArrowsDownUp } from '@tabler/icons-react';
import { useRef, useState } from 'react';
import Editor from '../Editor/Editor';

export const AdditionalEditor = ({
  openAdditionalEditor,
  setOpenAdditionalEditor,
}: setOpenAdditionalEditor) => {
  const [changeVariablesHeaders, setChangeVariablesHeaders] = useState(true);
  const additionalEditorWrapperRef = useRef<HTMLDivElement>(null);

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
              setChangeVariablesHeaders(!changeVariablesHeaders);
            }}
            disabled={!changeVariablesHeaders}
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
              setChangeVariablesHeaders(!changeVariablesHeaders);
            }}
            disabled={changeVariablesHeaders}
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
