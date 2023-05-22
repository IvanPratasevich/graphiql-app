import style from './main.module.scss';
import { Suspense, useState, useEffect } from 'react';
import DocsWrapper from '../../components/DocsWrapper/DocsWrapper';
import EditorWrapper from '../../components/EditorWrapper/EditorWrapper';
import { lazy } from 'react';
import { LoaderWrapper } from '../../components/LoaderWrapper/LoaderWrapper';
import { AdditionalEditor } from '../../components/AdditionalEditor/AdditionalEditor';
import request from "graphql-request";
import MainDocs from "../../components/Docs/MainDocs/Docs";
import {
    buildClientSchema,
    getIntrospectionQuery, GraphQLEnumType, GraphQLInputObjectType,
    GraphQLInterfaceType,
    GraphQLObjectType,
    GraphQLSchema
} from "graphql";

const Docs = lazy(() => import('../../components/Docs/Docs'));

const Main = () => {
  const [open, setOpen] = useState(true);
  const [schemas, setSchemas] = useState<any>(null)
    const [currentSchema, setCurrentSchema] = useState<any>(null)
    const [previousSchema, setPreviousSchema] = useState<string[]>([])
    useEffect(() => {
        request('https://rickandmortyapi.com/graphql', getIntrospectionQuery()).then((data) => {
            console.log(data)
            setSchemas(data.__schema)
            return buildClientSchema(data)
        }).then()
    }, [])
    useEffect(() => {
        console.log(previousSchema)
    },[previousSchema])
  return (
    <div className={open ? style.wrapper : `${style.wrapper} ${style.active}`}>
      <DocsWrapper setOpen={setOpen} open={open}/>
      <Suspense fallback={<LoaderWrapper />}>
          {open && <div></div>}
          {!open && !currentSchema && <MainDocs schemas={schemas} setCurrentSchema={setCurrentSchema} previousSchema={previousSchema} setPreviousSchema={setPreviousSchema} />}
          {!open && currentSchema &&  <Docs schemas={schemas} previousSchema={previousSchema} setPreviousSchema={setPreviousSchema} setCurrentSchema={setCurrentSchema} currentSchema={currentSchema} />}
      </Suspense>
      <div className={style.wrapperRequest}>
        <EditorWrapper />
        <AdditionalEditor></AdditionalEditor>
      </div>
      <div className={style.wrapperResponse} />
    </div>
  );
};
export default Main;
