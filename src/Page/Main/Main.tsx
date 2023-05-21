import style from './main.module.scss';
import { Suspense, useState } from 'react';
import DocsWrapper from '../../components/DocsWrapper/DocsWrapper';
import EditorWrapper from '../../components/EditorWrapper/EditorWrapper';
import { lazy } from 'react';
import { LoaderWrapper } from '../../components/LoaderWrapper/LoaderWrapper';
import { AdditionalEditor } from '../../components/AdditionalEditor/AdditionalEditor';

const Docs = lazy(() => import('../../components/Docs/Docs'));

const Main = () => {
  const [open, setOpen] = useState(true);
  const [openAdditionalEditor, setOpenAdditionalEditor] = useState(true);

  return (
    <div className={open ? style.wrapper : `${style.wrapper} ${style.active}`}>
      <DocsWrapper setOpen={setOpen} open={open} />
      <Suspense fallback={<LoaderWrapper />}>{!open ? <Docs /> : <div></div>}</Suspense>
      <div className={style.wrapperRequest}>
        <EditorWrapper openAdditionalEditor={openAdditionalEditor} />
        <AdditionalEditor
          openAdditionalEditor={openAdditionalEditor}
          setOpenAdditionalEditor={setOpenAdditionalEditor}
        />
      </div>
      <div className={style.wrapperResponse} />
    </div>
  );
};
export default Main;
