import style from './main.module.scss';
import { Suspense, useState, useEffect } from 'react';
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
<<<<<<< HEAD
  GraphQLSchemaConfig,
=======
>>>>>>> origin/develop
  IntrospectionQuery,
  IntrospectionSchema,
  IntrospectionType,
} from 'graphql';
<<<<<<< HEAD
import { GraphQLSchema } from 'graphql';
import { Data, Schema } from '../../type/shemas';
=======
import { Schema } from '../../type/schemas';
>>>>>>> origin/develop
const Docs = lazy(() => import('../../components/Docs/Docs'));

const Main = () => {
  const [open, setOpen] = useState(true);
  const [openAdditionalEditor, setOpenAdditionalEditor] = useState(true);
  const [schemas, setSchemas] = useState<IntrospectionSchema | null>(null);
  const [currentSchema, setCurrentSchema] = useState<Schema | IntrospectionType | null>(null);
  const [previousSchema, setPreviousSchema] = useState<string[]>([]);

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
    <div className={open ? style.wrapper : `${style.wrapper} ${style.active}`}>
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
      <div className={style.wrapperResponse} />
    </div>
  );
};
export default Main;
