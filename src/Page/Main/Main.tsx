import style from './main.module.scss';
import { Suspense, useState, useEffect, useRef } from 'react';
import DocsWrapper from '../../components/DocsWrapper/DocsWrapper';
import EditorWrapper from '../../components/EditorWrapper/EditorWrapper';
import { lazy } from 'react';
import { LoaderWrapper } from '../../components/LoaderWrapper/LoaderWrapper';
import { AdditionalEditor } from '../../components/AdditionalEditor/AdditionalEditor';
import request from 'graphql-request';
import MainDocs from '../../components/Docs/MainDocs/Docs';
import {
  buildClientSchema,
  getIntrospectionQuery,
  IntrospectionQuery,
  IntrospectionSchema,
  IntrospectionType,
} from 'graphql';
import { Schema } from '../../type/schemas';
import Editor from '../../components/Editor/Editor';
const Docs = lazy(() => import('../../components/Docs/Docs'));

const Main = () => {
  const [open, setOpen] = useState(true);
  const [openAdditionalEditor, setOpenAdditionalEditor] = useState(true);
  const [schemas, setSchemas] = useState<IntrospectionSchema | null>(null);
  const [currentSchema, setCurrentSchema] = useState<Schema | IntrospectionType | null>(null);
  const [previousSchema, setPreviousSchema] = useState<string[]>([]);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function responseShema() {
      const data: IntrospectionQuery = await request(
        'https://rickandmortyapi.com/graphql',
        getIntrospectionQuery()
      );
      setSchemas(data.__schema);
      buildClientSchema(data);
    }
    responseShema();
  }, []);

  useEffect(() => {
    console.log(previousSchema);
  }, [previousSchema]);
  return (
    <div ref={mainRef} className={open ? style.wrapper : `${style.wrapper} ${style.active}`}>
      <DocsWrapper setOpen={setOpen} open={open} />
      <Suspense fallback={<LoaderWrapper />}>
        {open && <div></div>}
        {!open && !currentSchema && (
          <MainDocs
            schemas={schemas}
            setCurrentSchema={setCurrentSchema}
            previousSchema={previousSchema}
            setPreviousSchema={setPreviousSchema}
          />
        )}
        {!open && currentSchema && (
          <Docs
            schemas={schemas}
            previousSchema={previousSchema}
            setPreviousSchema={setPreviousSchema}
            setCurrentSchema={setCurrentSchema}
            currentSchema={currentSchema as Schema}
          />
        )}
      </Suspense>
      <div className={style.wrapperRequest}>
        <EditorWrapper openAdditionalEditor={openAdditionalEditor} />
        <AdditionalEditor
          openAdditionalEditor={openAdditionalEditor}
          setOpenAdditionalEditor={setOpenAdditionalEditor}
        />
      </div>
      <div className={style.wrapperResponse}>
        <Editor parentContainerRef={mainRef} openAdditionalEditor={openAdditionalEditor} />
      </div>
    </div>
  );
};
export default Main;
