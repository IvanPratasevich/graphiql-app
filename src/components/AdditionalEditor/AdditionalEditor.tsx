import { Button, ActionIcon } from '@mantine/core';
import style from './additionalEditor.module.scss';
import { setOpenAdditionalEditor } from '../../type/tuype';
import { IconArrowsDownUp } from '@tabler/icons-react';
import { useRef } from 'react';
import Editor from '../Editor/Editor';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { headersSlice } from '../../toolkitRedux/additionalHeaders';
import { useTranslation } from 'react-i18next';

export const AdditionalEditor = ({
  openAdditionalEditor,
  setOpenAdditionalEditor,
}: setOpenAdditionalEditor) => {
  const additionalEditorWrapperRef = useRef<HTMLDivElement>(null);
  const { headers } = useAppSelector((state) => state.headersSlice);
  const { changeHeaders } = headersSlice.actions;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
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
            {t('variables')}
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
            {t('headers')}
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
      {openAdditionalEditor && (
        <>
          <div className={headers ? style.editor_hidden : style.additionalEditor}>
            <Editor
              purpose="headers"
              parentContainerRef={additionalEditorWrapperRef}
              openAdditionalEditor={openAdditionalEditor}
            />
          </div>
          <div className={!headers ? style.editor_hidden : style.additionalEditor}>
            <Editor
              purpose="variables"
              parentContainerRef={additionalEditorWrapperRef}
              openAdditionalEditor={openAdditionalEditor}
            />
          </div>
        </>
      )}
    </div>
  );
};
